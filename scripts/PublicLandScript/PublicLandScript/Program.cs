using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using Npgsql;
using TroutMapper.Data;
using TroutMapper.Services;

namespace PublicLandScript
{
	class Program
	{
		private static Random rand = new Random();
		private static void Main(string[] args)
		{
			var db = new StreamDatabase();
			var interestingStreams =
				db.Streams.Where(s => s.route_mi > 0.5).ToList().Where(s => s.kittle_nam.IndexOf("Unnamed", StringComparison.OrdinalIgnoreCase) < 0).ToList();

			var countyLookupTable = GetCounties();

			var results = interestingStreams.Select(s =>
			                                        {
				                                        var model = new StreamViewModel();
				                                        model.kittle_nam = s.kittle_nam;
				                                        model.gid = s.gid;
				                                        model.length_mi = s.route_mi;
				                                        model.route_mi = s.route_mi;
				                                        model.kittle_nbr = s.kittle_nbr;
				                                        model.objectid = s.objectid;
				                                        model.species = SpeciesGenerator();
				                                        model.Counties = countyLookupTable[model.gid];
				                                        model.publicLand =
					                                        s.PubliclyAccessibleSectionses.Select(
						                                        pas => new PublicLand()
						                                               {
							                                               start = pas.start,
							                                               stop = pas.stop,
							                                               type = "TBD"
						                                               });

				                                        var restrictionGroups =
					                                        s.FishingRestrictionSections.GroupBy(
						                                        restrictionSection => restrictionSection.DnrAnglingRestriction.id).ToArray();

				                                        var restrictions = restrictionGroups.Select(group => new Restriction()
				                                                                                             {
					                                                                                             RestrictionSections =
																													 group.Select(ConvertToRestricitonSection),
																													 RestrictionType = group.FirstOrDefault().DnrAnglingRestriction
				                                                                                             }).ToList();
				                                        model.restrictions = restrictions;
				                                        return model;
			                                        }).ToList();

			var json = JsonConvert.SerializeObject(results);
		}

		private static ILookup<int, CountyViewModel> GetCounties()
		{
			var q = @"SELECT county.*, stream.kittle_nam, stream.gid from public.""Minnesota_County_Borders"" county, 
public.""minnesota_dnr_troutstreamsfiltered"" stream
where ST_Intersects(county.geom, stream.geom)
order by stream.gid";

			var tempStorage = new List<Tuple<int, CountyViewModel>>();


			using (var conn =
				new NpgsqlConnection("Server=127.0.0.1;Port=5432;User Id=postgres;Password=fakepassword;Database=TroutMaps;"))
			{
				conn.Open();
				var command = new NpgsqlCommand(q, conn);
				var dr = command.ExecuteReader();

				while (dr.Read())
				{
					var start = (int)dr.GetInt16(5);
					var stop = dr.GetString(6);
					var streamGid = dr.GetInt32(11);
					var streamName = dr.GetString(10);

					var county = new CountyViewModel()
					{
						id = start,
						name = stop,
					};

					tempStorage.Add(new Tuple<int, CountyViewModel>(streamGid, county));	
				}
			}

			return tempStorage.ToLookup(i => i.Item1, j => j.Item2);
		}

		private static RestrictionSection ConvertToRestricitonSection(FishingRestrictionSections frs)
		{
			var t = new RestrictionSection()
			        {
				        start = frs.start,
				        stop = frs.stop,
				        restriction = new FishingRestriction()
				                      {
					                      isAnglingRestriction =
						                      frs.DnrAnglingRestriction
						                      .is_angling_restriction,
					                      isHarvestRestriction =
						                      frs.DnrAnglingRestriction
						                      .is_harvest_restriction,
					                      officialText =
						                      frs.DnrAnglingRestriction
						                      .official_text,
					                      summary =
						                      frs.DnrAnglingRestriction
						                      .short_description
				                      }
			        };

			return t;
		}

		private static IEnumerable<Species> SpeciesGenerator()
		{
			var randomizedSpecies = Enumerable.Range(1,3).Select(WizardMagic)
				.Select(species => new Tuple<Species, Guid>(species, Guid.NewGuid()))
				.OrderBy(i => i.Item2)
				.Select(t => t.Item1);

			return randomizedSpecies.Take(rand.Next(1, 3));
		}

		private static Species WizardMagic(int randomSpecies)
		{
			const string rainbow = "Rainbow Trout";
			const string brook = "Brook Trout";
			const string brown = "Brown Trout";
			var isStocked = rand.Next(0, 2) == 0;
			

			switch (randomSpecies)
			{
				case 1:
					return new Species()
					{
						id = randomSpecies,
						isStocked = true,  // rainbows are always stocked
						name = rainbow
					};
				case 2:
					return new Species()
					{
						id = randomSpecies,
						isStocked = isStocked,
						name = brook
					};
				default:
					return new Species()
					{
						id = randomSpecies,
						isStocked = isStocked,
						name = brown
					};
			}
		}

		private static void CreateFishingRestrictionSections()
		{
			var db = new StreamDatabase();

			var service = new PubliclyAccessibleSectionService(db);
			var t = service.GetArray();
			var matches = db.Streams.ToList().Where(s => t.Any(id => id == s.gid));
			foreach (var stream in matches)
			{
				try
				{
					service.UpdatePubliclyAccessibleLand(stream);
					//Console.WriteLine("Success! " + stream.gid + " " + stream.ShortName);
				}
				catch (Exception)
				{
					Console.WriteLine();
					Console.WriteLine("#####FAILED#######");
					Console.WriteLine(stream.gid + " " + stream.ShortName);
				}
			}
		}

		private static void CreateStuff()
		{
			var db = new StreamDatabase();
			var streams = db.Streams.ToList();

			streams.ForEach(
				s =>
					s.kittle_nam = s.kittle_nam.Replace("Middle", "M.")
						.Replace("South", "S.")
						.Replace("North", "N.")
						.Replace("West", "W.")
						.Replace("East", "E."));
//			var longAssName = streams.OrderByDescending(s => s.kittle_nam.Length).ToList();

			var query = @"select
	ST_LineLocatePoint(ST_LineMerge(w.geom),  ST_StartPoint(ST_LineMerge(publicsections.geom))) ,
	ST_LineLocatePoint(ST_LineMerge(w.geom),  ST_EndPoint(ST_LineMerge(publicsections.geom))) 
		--ST_AsText(publicsections.geom)
from
(select (t.geo_dump).geom from 


(select 
	*, ST_Dump(ST_LineMerge(ST_Intersection(ST_LineMerge(winnebago.geom), publicland.geom))) as geo_dump
from 
	public.""Minnesota_DNR_All_Public_Land"" as publicland,
	(select * from public.""Minnesota_DNR_TroutStreams"" where gid = {0}) as winnebago) as t) as publicsections,

	(select * from public.""Minnesota_DNR_TroutStreams"" where gid = {0}) as w";


			var success = new List<Stream>();
			var fail = new List<Stream>();
			try
			{
				var namedStreams = streams.Where(s => s.kittle_nam.IndexOf("Unnamed", StringComparison.OrdinalIgnoreCase) < 0);
				var count = namedStreams.Count();
				Console.WriteLine("Streams: " + count);
				var current = 1;
				foreach (var s in namedStreams)
				{
					Console.WriteLine(current + ": current stream: " + s.kittle_nam);
					current++;
					NpgsqlConnection conn =
						new NpgsqlConnection("Server=127.0.0.1;Port=5432;User Id=postgres;Password=fakepassword;Database=TroutMaps;");
					conn.Open();
					try
					{
						var id = s.gid;
						var q = string.Format(query, id);

						var command = new NpgsqlCommand(q, conn);
						var dr = command.ExecuteReader();

						while (dr.Read())
						{
							var start = dr.GetDouble(0);
							var stop = dr.GetDouble(1);

							var asfd = new PubliclyAccessibleSection();
							asfd.start = start;
							asfd.stop = stop;
							asfd.gid = s.gid;


							db.PubliclyAccessibleSectionses.Add(asfd);
							db.SaveChanges();

//							Console.WriteLine("Success!");
						}

//						var a = dr[0];
//						var b = dr[1];


//						var c = dr[2];

						Console.WriteLine("Success: " + s.kittle_nam);
						success.Add(s);
					}
					catch (Exception)
					{
						Console.Write("FAIL" + s.kittle_nam);
						fail.Add(s);
					}

					finally
					{
						conn.Close();
					}
				}
			}


			catch (Exception)
			{
				throw;
			}


			Console.Write("YESS");
		}
	}


}
