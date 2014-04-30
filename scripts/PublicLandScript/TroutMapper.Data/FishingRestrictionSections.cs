using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics;

namespace TroutMapper.Data
{
	[Table("LR_Fishing_Restriction_Sections", Schema = "public")]
	[DebuggerDisplay("{gid}, {start} - {stop}")]
	public class FishingRestrictionSections : ISection
	{
		[Key]
		public int id { get; set; }

		[Column("gid")]
		public int gid { get; set; }

		public double start { get; set; }
		public double stop { get; set; }


		public int dnr_restriction_id { get; set; }

		[ForeignKey("gid")]
		public virtual Stream Stream { get; set; }

		[ForeignKey("dnr_restriction_id")]
		public virtual DnrAnglingRestriction DnrAnglingRestriction { get; set; }

		


	}
}