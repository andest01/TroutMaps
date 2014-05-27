using TroutMapper.Data;

namespace PublicLandScript
{
	public class PublicLand : ISection
	{
		public double start { get; set; }
		public double stop { get; set; }
		public string type { get; set; }
	}
}