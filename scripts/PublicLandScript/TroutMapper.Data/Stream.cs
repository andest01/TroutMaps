using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics;

namespace TroutMapper.Data
{
	[Table("Minnesota_DNR_TroutStreams", Schema = "public")]
	[DebuggerDisplay("{kittle_nam}")]
	public class Stream
	{
		private Lazy<string> _shortName; 
		public Stream()
		{
			PubliclyAccessibleSectionses = new Collection<PubliclyAccessibleSection>();
			_shortName = new Lazy<string>(() => CreateShortName(kittle_nam));
		}

		[Key]
		[Column("gid")]
		public int gid { get; set; }

		[Column("kittle_nbr")]
		public string kittle_nbr { get; set; }

		[Column("objectid")]
		public int objectid { get; set; }

		private static string CreateShortName(string kittle_nam)
		{
			if (string.IsNullOrWhiteSpace(kittle_nam))
			{
				return string.Empty;
			}

			if (kittle_nam.Split(' ').Length <= 2)
			{
				return kittle_nam;
			}

			var shortName = kittle_nam.Replace("Middle", "M.")
				.Replace("South", "S.")
				.Replace("North", "N.")
				.Replace("West", "W.")
				.Replace("East", "E.");

			return shortName;
		}

		public string ShortName
		{
			get { return _shortName.Value; }
		}

		[Column("kittle_nam")]
		public string kittle_nam { get; set; }

		[Column("route_mi")]
		public double route_mi { get; set; }

		public virtual ICollection<PubliclyAccessibleSection> PubliclyAccessibleSectionses { get; set; }

		public virtual ICollection<FishingRestrictionSections> FishingRestrictionSections { get; set; } 
	}


}