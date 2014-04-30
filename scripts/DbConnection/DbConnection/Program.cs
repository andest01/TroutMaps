using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Npgsql;

namespace DbConnection
{
	class Program
	{
		static void Main(string[] args)
		{
			NpgsqlConnection conn = new NpgsqlConnection("Server=127.0.0.1;Port=5432;User Id=postgres;Password=skyd1ve;Database=TroutMaps;");

			var query = @"SELECT gid, __gid, objectid, kittle_nbr, kittle_nam, route_mi, from_meas, 
       to_meas, length_mi, start_x, start_y, end_x, end_y, shape_le_1, 
       trout_flag, length  FROM ""Minnesota_DNR_TroutStreams""";


			conn.Open();
			

			try
			{
				var command = new NpgsqlCommand(query, conn);
				var dr = command.ExecuteReader();
				while (dr.Read())
				{
					for (var i = 0; i < dr.FieldCount; i++)
					{
						var arg0 = dr[i];
						Console.Write("{0} \t", arg0);
					}
					Console.WriteLine();
				}
			}
			catch (Exception)
			{

				throw;
			}

			finally
			{
				conn.Close();
			}
		}
	}
}
