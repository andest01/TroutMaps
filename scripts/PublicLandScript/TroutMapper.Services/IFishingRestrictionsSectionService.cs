using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TroutMapper.Services
{
    public interface IFishingRestrictionsSectionService
    {
	    void UpdateFishingRestrictions(int gid);
//	    IEnumerable<FishingRestrictionSections> GetFishingRestrictions(int streamGid);
    }
}
