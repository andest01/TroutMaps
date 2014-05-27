using System.Collections.Generic;
using TroutMapper.Data;

namespace PublicLandScript
{
	public class Restriction
	{
		public DnrAnglingRestriction RestrictionType { get; set; }
		public IEnumerable<RestrictionSection> RestrictionSections { get; set; } 
	}
}