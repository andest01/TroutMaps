using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics;

namespace TroutMapper.Data
{
	[Table("LR_Publicly_Accessible_Sections", Schema = "public")]
	[DebuggerDisplay("{gid}, {start} - {stop}")]
	public class PubliclyAccessibleSection : ISection
	{
		[Key]
		public int id { get; set; }

		[Column("gid")]
		public int gid { get; set; }

		public double start { get; set; }
		public double stop { get; set; }

		[ForeignKey("gid")]
		public virtual Stream Stream { get; set; }
	}
}