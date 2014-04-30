using System;
using System.Collections.Generic;
using System.Linq;
using Npgsql;
using TroutMapper.Data;

namespace TroutMapper.Services
{
	public interface IPubliclyAccessibleSectionService
	{
		void UpdatePubliclyAccessibleLand(Stream stream);
	}

	public class PubliclyAccessibleSectionService : IPubliclyAccessibleSectionService
	{
		private readonly StreamDatabase _db;
		private readonly List<DnrAnglingRestriction> _restrictions;

		public PubliclyAccessibleSectionService(StreamDatabase db)
		{
			_db = db;
			_restrictions = _db.DnrAnglingRestriction.ToList();
		}



		public void UpdatePubliclyAccessibleLand(Stream stream)
		{
			const string query = @"select
	ST_LineLocatePoint(ST_LineMerge(w.geom),  ST_StartPoint(ST_LineMerge(publicsections.geom))) ,
	ST_LineLocatePoint(ST_LineMerge(w.geom),  ST_EndPoint(ST_LineMerge(publicsections.geom))) 
		--ST_AsText(publicsections.geom)
from
(select (t.geo_dump).geom from 


(select 
	*, ST_Dump(ST_LineMerge(ST_Intersection(ST_LineMerge(winnebago.geom), publicland.geom))) as geo_dump
from 
	(select * from public.""disolvedbufferedregulations5thebest"" where new_reg = {0}) as publicland,
	(select * from public.""Minnesota_DNR_TroutStreams"" where gid = {1}) as winnebago) as t) as publicsections,

	(select * from public.""Minnesota_DNR_TroutStreams"" where gid = {1}) as w";

			bool hasFailure = false;
			bool hasSections = false;
			foreach (var restriction in _restrictions)
			{
				
				using (
					var conn = new NpgsqlConnection("Server=127.0.0.1;Port=5432;User Id=postgres;Password=fakepassword;Database=TroutMaps;")
					)
				{
					conn.Open();

					try
					{
						var q = string.Format(query, restriction.dnr_trout_map_new_reg, stream.gid);
						var command = new NpgsqlCommand(q, conn);
						var dr = command.ExecuteReader();

						while (dr.Read())
						{
							hasSections = true;
							var start = dr.GetDouble(0);
							var stop = dr.GetDouble(1);

							var section = new FishingRestrictionSections();
							section.start = start;
							section.stop = stop;
							section.gid = stream.gid;
							section.dnr_restriction_id = restriction.id;

							var isStartOfStream = Math.Abs(start) < 0.0001;

							var length = Math.Abs(stop - start) * (double)stream.route_mi;
							if (isStartOfStream && length < 0.005)
							{
								break;
							}


							_db.FishingRestrictionSections.Add(section);
							_db.SaveChanges();
							
						}
//						success = true;
					}

					catch (Exception)
					{
						hasFailure = true;
						Console.WriteLine("Something bad happened updating gid: " + stream.gid);
					}

					finally
					{
						conn.Close();
					}
				}

			}

			if (hasFailure)
			{
				throw new InvalidOperationException("Something bad happened updating gid: " + stream.gid);
			}
		}

		public IEnumerable<int> GetArray()
		{
			const string items = @"9
12
15
17
18
73
182
184
231
247
248
249
272
431
655
666
830
833
877
879
971
1030
1082
1153
1157
1206
1207
1220
1250
1355
1356
1359
1360
1484
1492
1493
1547
1571
1583
1618
1619
1769
1770
1771
1773
1774
1776
1777
1806
1807
1808
1883
1884
2315
2326
2328
2329
2391
2413
2437
2439
2532
2534
2535
2537
2538
2539
2540
2542
2547
2620
2637
2743
2748
2758
2759
2760
2761
2762
2809
2863
2893
2978
2979
2980
2981
2982
2984
3355
3814
3953
4058
4115
4145
4200
4220
4332
4333
4395
4454
4457
4580
4617
4619
4621
4637
4737
4818
4820
5189
5297
5300
5301
5302
5456
5476
5477
5478
5479
5480
5481
5482
5483
5484
5642";

			var spits = items.Split(Environment.NewLine.ToArray())
				.Where(t => String.IsNullOrWhiteSpace(t) == false)
				.Select(t => t.Trim())
				.Select(Int32.Parse);

			return spits;
		}
	}
}