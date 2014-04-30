using System;
using Npgsql;
using TroutMapper.Data;

namespace TroutMapper.Services
{
	public class FishingRestrictionsSectionService : IFishingRestrictionsSectionService
	{
		private readonly StreamDatabase _db;

		public FishingRestrictionsSectionService(StreamDatabase db)
		{
			_db = db;
		}

		public void UpdateFishingRestrictions(int gid)
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
	public.""Minnesota_DNR_All_Public_Land"" as publicland,
	(select * from public.""Minnesota_DNR_TroutStreams"" where gid = {0}) as winnebago) as t) as publicsections,

	(select * from public.""Minnesota_DNR_TroutStreams"" where gid = {0}) as w";

			using (var conn = new NpgsqlConnection("Server=127.0.0.1;Port=5432;User Id=postgres;Password=fakepassword;Database=TroutMaps;"))
			{
				conn.Open();
			
				try
				{
					var id = gid;
					var q = string.Format(query, id);

					var command = new NpgsqlCommand(q, conn);
					var dr = command.ExecuteReader();

					while (dr.Read())
					{
						var start = dr.GetDouble(0);
						var stop = dr.GetDouble(1);

						var section = new PubliclyAccessibleSection();
						section.start = start;
						section.stop = stop;
						section.gid = gid;

//						if (Math.Abs(stop - start) < 0.05)
//						{
//							break;
//						}


						_db.PubliclyAccessibleSectionses.Add(section);
						_db.SaveChanges();

					}
				}
				catch (Exception)
				{
					throw new InvalidOperationException("Failed to save for gid: " + gid);
				}

				finally
				{
					conn.Close();
				}
			}
		}
	}
}