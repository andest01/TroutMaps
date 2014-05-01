using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics;

namespace TroutMapper.Data
{
	[Table("DNR_Angling_Restrictions", Schema = "public")]
	[DebuggerDisplay("{short_description}, {start} - {stop}")]
	public class DnrAnglingRestriction
	{
		[Key]
		public int id { get; set; }

		[Column("short_description")]
		public string short_description { get; set; }

		[Column("official_text")]
		public string official_text { get; set; }

		[Column("is_angling_restriction")]
		public bool is_angling_restriction { get; set; }

		[Column("is_harvest_restriction")]
		public bool is_harvest_restriction { get; set; }

		[Column("dnr_trout_map_new_reg")]
		public int dnr_trout_map_new_reg { get; set; }
	}
}