using TroutMapper.Data;

namespace PublicLandScript
{
	public class RestrictionSection : ISection
	{
		public double start { get; set; }
		public double stop { get; set; }
		public FishingRestriction restriction { get; set; }
	}
}