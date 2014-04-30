using System;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TroutMapper.Data
{
	public class StreamDatabase : DbContext
	{
		public StreamDatabase() : base(nameOrConnectionString: "MonkeyFist") { }
		public DbSet<Stream> Streams { get; set; }
		public DbSet<PubliclyAccessibleSection> PubliclyAccessibleSectionses { get; set; }
		public DbSet<FishingRestrictionSections> FishingRestrictionSections { get; set; }
		public DbSet<DnrAnglingRestriction> DnrAnglingRestriction { get; set; }
	}
}
