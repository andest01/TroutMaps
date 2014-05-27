using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using TroutMapper.Data;

namespace PublicLandScript
{
	public class StreamViewModel
	{
		private IEnumerable<PublicLand> _publicLand;
		private IEnumerable<Restriction> _restrictions;
		public int gid { get; set; }
		public string kittle_nam { get; set; }
		public double route_mi { get; set; }
		public double public_mi { get; set; }
		public double length_mi { get; set; }
		public int objectid { get; set; }
		public string trout_flag { get; set; }
		public string kittle_nbr { get; set; }
		public string shortName { get; set; }

		public double public_route_length
		{
			get
			{
				if (publicLand == null)
				{
					return 0;
				}

				var sum = publicLand.Sum(pal => Math.Abs((double) (pal.stop - pal.start)));
				var distance = sum * route_mi;

				return distance;
			}
		}

		public IEnumerable<Species> species { get; set; }

		public IEnumerable<CountyViewModel> Counties { get; set; } 

		public IEnumerable<Restriction> restrictions
		{
			get
			{

				if (_restrictions == null)
				{
					return new Restriction[0];
				}

				return _restrictions;
			}
			set { _restrictions = value; }
		}

//		private IEnumerable<T> Collapse<T>(IEnumerable<T> input, Func<T,T,T> comparatorFunc ) where T : ISection
//		{
//
//			var accumulator = default(T);
//			for (int i = 0; i < input.Count(); i++)
//			{
//				var item = input.ElementAt(i);
//				var next = input.ElementAtOrDefault(i + 1);
//
//				var isFirstItem = EqualityComparer<T>.Default.Equals(accumulator, default(T));
//				if (isFirstItem)
//				{
//					accumulator = item;
//				}
//
//				var isLastItem = EqualityComparer<T>.Default.Equals(next, default(T));
//
//				if (isLastItem)
//				{
//					yield return accumulator;
//				}
//
//				if (item.stop - next.start < 0.05)
//				{
//					// accumulate!
//
//				}
//			}
//		}
//
//		public IEnumerable<RestrictionSection> Wizards(RestrictionSection first, RestrictionSection second)
//		{
//			if (first.stop - second.start < 0.05)
//			{
//				return new[]
//				       {
//					       new RestrictionSection
//					       {
//						       start = first.start,
//						       stop = second.stop,
//						       restriction = first.restriction
//					       }
//				       };
//			}
//
//			return new[]
//			       {
//				       first, second
//			       };
//		}


		public IEnumerable<PublicLand> publicLand
		{
			get
			{
				return _publicLand ?? new PublicLand[0];
			}
			set { _publicLand = value; }
		}
	}
}