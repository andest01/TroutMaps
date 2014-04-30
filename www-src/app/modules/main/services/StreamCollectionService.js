define(/** @lends Zoom */function(require) {
    'use strict';

    // load our main module.
    var mainModule = require('modules/main/MainModule');




    mainModule.factory('StreamCollectionService', function($http, $q) {
        var StreamCollectionService = function() {

        };

        StreamCollectionService.prototype.getStreams = function() {
            var deferred = $q.defer();

            var streams =
                [
                    {
                        "gid": 4200,
                        "kittle_nam": "Eagle Creek",
                        "route_mi": 2.186,
                        "length_mi": 2.186,
                        "objectid": 25589,
                        "trout_flag": null,
                        "kittle_nbr": "M-055-009",
                        "public_route_length": 1.5700006655647,
                        "species": [
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0.20307926510961,
                                "stop": 1,
                                "restriction": {
                                    "summary": "No harvest.",
                                    "officialText": "Catch & Release for All Trout (Bait Allowed)",
                                    "isAnglingRestriction": false,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.95256294544859,
                                "stop": 1,
                                "type": "TBD"
                            },
                            {
                                "start": 0.81529754908876,
                                "stop": 0.91503463922589,
                                "type": "TBD"
                            },
                            {
                                "start": 0.55387531789129,
                                "stop": 0.80121003778454,
                                "type": "TBD"
                            },
                            {
                                "start": 0.38979940067561,
                                "stop": 0.54919276907013,
                                "type": "TBD"
                            },
                            {
                                "start": 0.21838385499819,
                                "stop": 0.3826886968456,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 971,
                        "kittle_nam": "Root River, S. Fork",
                        "route_mi": 16.071,
                        "length_mi": 16.071,
                        "objectid": 25429,
                        "trout_flag": null,
                        "kittle_nbr": "M-009-010",
                        "public_route_length": 11.368444542351,
                        "species": [
                            {
                                "id": 2,
                                "name": "Brook Trout",
                                "isStocked": true
                            },
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0.53285940258205,
                                "stop": 1,
                                "restriction": {
                                    "summary": "No harvest. No bait.",
                                    "officialText": "Catch & Release for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0.58971610136856,
                                "stop": 0.59002472557674,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                                    "isAnglingRestriction": false,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.93240212041424,
                                "stop": 0.95941237552254,
                                "type": "TBD"
                            },
                            {
                                "start": 0.92359287260638,
                                "stop": 0.92379924952958,
                                "type": "TBD"
                            },
                            {
                                "start": 0.9247208251339,
                                "stop": 0.92697767710969,
                                "type": "TBD"
                            },
                            {
                                "start": 0.75336616228243,
                                "stop": 0.87529620359415,
                                "type": "TBD"
                            },
                            {
                                "start": 0.73661446522212,
                                "stop": 0.75271835798383,
                                "type": "TBD"
                            },
                            {
                                "start": 0.72629691621372,
                                "stop": 0.73649471809775,
                                "type": "TBD"
                            },
                            {
                                "start": 0.72450384884481,
                                "stop": 0.72505232071142,
                                "type": "TBD"
                            },
                            {
                                "start": 0.72293139128677,
                                "stop": 0.7238524214289,
                                "type": "TBD"
                            },
                            {
                                "start": 0.71554135415828,
                                "stop": 0.72246246980975,
                                "type": "TBD"
                            },
                            {
                                "start": 0.71387689413673,
                                "stop": 0.71477326853033,
                                "type": "TBD"
                            },
                            {
                                "start": 0.71103407350003,
                                "stop": 0.71296654558417,
                                "type": "TBD"
                            },
                            {
                                "start": 0.67586555073902,
                                "stop": 0.71083249295698,
                                "type": "TBD"
                            },
                            {
                                "start": 0.49427995490406,
                                "stop": 0.67478532176362,
                                "type": "TBD"
                            },
                            {
                                "start": 0.25111165812168,
                                "stop": 0.49089722014591,
                                "type": "TBD"
                            },
                            {
                                "start": 0.1846565362087,
                                "stop": 0.23165266072953,
                                "type": "TBD"
                            },
                            {
                                "start": 0.12083174366452,
                                "stop": 0.13704181027433,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 877,
                        "kittle_nam": "Vermillion River",
                        "route_mi": 22.918,
                        "length_mi": 22.918,
                        "objectid": 25677,
                        "trout_flag": null,
                        "kittle_nbr": "M-049",
                        "public_route_length": 3.3909178649975,
                        "species": [
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            },
                            {
                                "id": 3,
                                "name": "Brown Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0.63177579624797,
                                "stop": 1,
                                "restriction": {
                                    "summary": "No harvest.",
                                    "officialText": "Catch & Release for All Trout (Bait Allowed)",
                                    "isAnglingRestriction": false,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0,
                                "stop": 0.54251552651778,
                                "restriction": {
                                    "summary": "No harvest.",
                                    "officialText": "Catch & Release for All Trout (Bait Allowed)",
                                    "isAnglingRestriction": false,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.38521478459524,
                                "stop": 0.38572462669635,
                                "type": "TBD"
                            },
                            {
                                "start": 0.33245500375361,
                                "stop": 0.38417946275943,
                                "type": "TBD"
                            },
                            {
                                "start": 0.27345410517079,
                                "stop": 0.29196203431626,
                                "type": "TBD"
                            },
                            {
                                "start": 0.073462495945853,
                                "stop": 0.10828494752336,
                                "type": "TBD"
                            },
                            {
                                "start": 0.073007491511382,
                                "stop": 0.073289632379162,
                                "type": "TBD"
                            },
                            {
                                "start": 0,
                                "stop": 0.042111893813244,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 4637,
                        "kittle_nam": "Eagle Creek, E. Branch",
                        "route_mi": 0.565,
                        "length_mi": 0.565,
                        "objectid": 25585,
                        "trout_flag": null,
                        "kittle_nbr": "M-055-009-003",
                        "public_route_length": 0.54960839936469,
                        "species": [
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            },
                            {
                                "id": 3,
                                "name": "Brown Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0,
                                "stop": 1,
                                "restriction": {
                                    "summary": "No harvest.",
                                    "officialText": "Catch & Release for All Trout (Bait Allowed)",
                                    "isAnglingRestriction": false,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0,
                                "stop": 0.36665744463087,
                                "type": "TBD"
                            },
                            {
                                "start": 0.39389921566682,
                                "stop": 1,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 2743,
                        "kittle_nam": "Peterson Creek",
                        "route_mi": 0.93,
                        "length_mi": 0.93,
                        "objectid": 25169,
                        "trout_flag": null,
                        "kittle_nbr": "M-026-001-008",
                        "public_route_length": 0.023111636428196,
                        "species": [
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            },
                            {
                                "id": 3,
                                "name": "Brown Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0,
                                "stop": 0.052747834789451,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0,
                                "stop": 0.024851221965802,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 73,
                        "kittle_nam": "Garvin Brook",
                        "route_mi": 0.888,
                        "length_mi": 0.888,
                        "objectid": 25177,
                        "trout_flag": null,
                        "kittle_nbr": "M-026-001",
                        "public_route_length": 0.16813875210476,
                        "species": [
                            {
                                "id": 2,
                                "name": "Brook Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0.61931130317179,
                                "stop": 0.86756893760797,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0.61094735572573,
                                "stop": 0.61693320306437,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0.60905692063863,
                                "stop": 0.61033052965982,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0.60696128783018,
                                "stop": 0.60775026729847,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0.59624761975095,
                                "stop": 0.59677574437841,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0.59534813418704,
                                "stop": 0.59605732135323,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0.5974562627704,
                                "stop": 0.59912549559701,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0.58802107261528,
                                "stop": 0.59262956099384,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0.58506839484856,
                                "stop": 0.58769527990496,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0.57045256217856,
                                "stop": 0.58377926870236,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.93155150011464,
                                "stop": 0.93450479219818,
                                "type": "TBD"
                            },
                            {
                                "start": 0.90477113480811,
                                "stop": 0.92184893731759,
                                "type": "TBD"
                            },
                            {
                                "start": 0.90122453850257,
                                "stop": 0.90431967965846,
                                "type": "TBD"
                            },
                            {
                                "start": 0.76087169224664,
                                "stop": 0.86770521070364,
                                "type": "TBD"
                            },
                            {
                                "start": 0.92982467222425,
                                "stop": 0.93107879477787,
                                "type": "TBD"
                            },
                            {
                                "start": 0.92348290372675,
                                "stop": 0.92632652770959,
                                "type": "TBD"
                            },
                            {
                                "start": 0.51751556424226,
                                "stop": 0.54053575684763,
                                "type": "TBD"
                            },
                            {
                                "start": 0.54868809949828,
                                "stop": 0.55465456947439,
                                "type": "TBD"
                            },
                            {
                                "start": 0.55550754625109,
                                "stop": 0.58180882448664,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 666,
                        "kittle_nam": "Trout Run Creek",
                        "route_mi": 13.653,
                        "length_mi": 13.653,
                        "objectid": 25254,
                        "trout_flag": null,
                        "kittle_nbr": "M-009-029",
                        "public_route_length": 9.9932298098477,
                        "species": [
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            },
                            {
                                "id": 3,
                                "name": "Brown Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0.0013417648806322,
                                "stop": 1,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.53088138113039,
                                "stop": 0.64214359215697,
                                "type": "TBD"
                            },
                            {
                                "start": 0.85085441570292,
                                "stop": 0.91226940182324,
                                "type": "TBD"
                            },
                            {
                                "start": 0.76654807849154,
                                "stop": 0.85015265309534,
                                "type": "TBD"
                            },
                            {
                                "start": 0.67485775604244,
                                "stop": 0.71969391401487,
                                "type": "TBD"
                            },
                            {
                                "start": 0.74826657560514,
                                "stop": 0.76585094010522,
                                "type": "TBD"
                            },
                            {
                                "start": 0.72347648975021,
                                "stop": 0.74722971515994,
                                "type": "TBD"
                            },
                            {
                                "start": 0.72187342524886,
                                "stop": 0.72275888496776,
                                "type": "TBD"
                            },
                            {
                                "start": 0.14840650649263,
                                "stop": 0.47170288568648,
                                "type": "TBD"
                            },
                            {
                                "start": 0.033339089521168,
                                "stop": 0.098645612162596,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 879,
                        "kittle_nam": "Hay Creek",
                        "route_mi": 17.434,
                        "length_mi": 17.434,
                        "objectid": 25721,
                        "trout_flag": null,
                        "kittle_nbr": "M-046",
                        "public_route_length": 5.4110988614549,
                        "species": [
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            },
                            {
                                "id": 3,
                                "name": "Brown Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0.54203149025542,
                                "stop": 0.78423019536946,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.89251211603034,
                                "stop": 0.92713322213481,
                                "type": "TBD"
                            },
                            {
                                "start": 0.85557460266353,
                                "stop": 0.88123728248388,
                                "type": "TBD"
                            },
                            {
                                "start": 0.81218656494338,
                                "stop": 0.82221381792628,
                                "type": "TBD"
                            },
                            {
                                "start": 0.73545649961539,
                                "stop": 0.78005073460878,
                                "type": "TBD"
                            },
                            {
                                "start": 0.54180131075546,
                                "stop": 0.73543257560563,
                                "type": "TBD"
                            },
                            {
                                "start": 0.53685195456703,
                                "stop": 0.53869162675157,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 1583,
                        "kittle_nam": "Spring Valley Creek",
                        "route_mi": 16.814,
                        "length_mi": 16.814,
                        "objectid": 25235,
                        "trout_flag": null,
                        "kittle_nbr": "M-009-033-010",
                        "public_route_length": 1.0181109795935,
                        "species": [
                            {
                                "id": 2,
                                "name": "Brook Trout",
                                "isStocked": true
                            },
                            {
                                "id": 3,
                                "name": "Brown Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0,
                                "stop": 0.3922495462857,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                                    "isAnglingRestriction": false,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.62968512680983,
                                "stop": 0.63725857275464,
                                "type": "TBD"
                            },
                            {
                                "start": 0.49088373348491,
                                "stop": 0.49635807925643,
                                "type": "TBD"
                            },
                            {
                                "start": 0.47519890786778,
                                "stop": 0.47585919906036,
                                "type": "TBD"
                            },
                            {
                                "start": 0.47224096404625,
                                "stop": 0.47379806519003,
                                "type": "TBD"
                            },
                            {
                                "start": 0.46968085650542,
                                "stop": 0.47150670430933,
                                "type": "TBD"
                            },
                            {
                                "start": 0.44573211621033,
                                "stop": 0.46859679087113,
                                "type": "TBD"
                            },
                            {
                                "start": 0.41739943868224,
                                "stop": 0.43799511670115,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 4818,
                        "kittle_nam": "Logan Creek",
                        "route_mi": 0.976,
                        "length_mi": 0.976,
                        "objectid": 25330,
                        "trout_flag": null,
                        "kittle_nbr": "M-031-018-004",
                        "public_route_length": 0.70090601571375,
                        "species": [
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0,
                                "stop": 0.960399524371,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.97705098483048,
                                "stop": 1,
                                "type": "TBD"
                            },
                            {
                                "start": 0,
                                "stop": 0.69519239437325,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 4395,
                        "kittle_nam": "Beaver Creek, Main",
                        "route_mi": 6.991,
                        "length_mi": 6.991,
                        "objectid": 25419,
                        "trout_flag": null,
                        "kittle_nbr": "M-009-010-003",
                        "public_route_length": 1.5820947383348,
                        "species": [
                            {
                                "id": 2,
                                "name": "Brook Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0.99964653575935,
                                "stop": 1,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                                    "isAnglingRestriction": false,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.64482327386078,
                                "stop": 0.69466934937235,
                                "type": "TBD"
                            },
                            {
                                "start": 0.88344959983538,
                                "stop": 1,
                                "type": "TBD"
                            },
                            {
                                "start": 0.74323587098431,
                                "stop": 0.78406968850414,
                                "type": "TBD"
                            },
                            {
                                "start": 0.85188640415882,
                                "stop": 0.86496453177997,
                                "type": "TBD"
                            },
                            {
                                "start": 0.86715191106297,
                                "stop": 0.87314798721831,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 4115,
                        "kittle_nam": "Trout Valley Creek",
                        "route_mi": 7.329,
                        "length_mi": 7.329,
                        "objectid": 25185,
                        "trout_flag": null,
                        "kittle_nbr": "M-031-001",
                        "public_route_length": 2.3829750647536,
                        "species": [
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            },
                            {
                                "id": 2,
                                "name": "Brook Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0,
                                "stop": 0.94564273116525,
                                "restriction": {
                                    "summary": "12\" minimum for Brook Trout. Bag Limit of one trout. No bait.",
                                    "officialText": "12 Inch Minimum for Brook Trout, Bag Limit of 1 (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0,
                                "stop": 0.15980186979385,
                                "type": "TBD"
                            },
                            {
                                "start": 0.16622534750093,
                                "stop": 0.21089350829097,
                                "type": "TBD"
                            },
                            {
                                "start": 0.63209573629567,
                                "stop": 0.72671521542086,
                                "type": "TBD"
                            },
                            {
                                "start": 0.75963527214057,
                                "stop": 0.76256107268217,
                                "type": "TBD"
                            },
                            {
                                "start": 0.74903020569687,
                                "stop": 0.75731650865806,
                                "type": "TBD"
                            },
                            {
                                "start": 0.27035943379847,
                                "stop": 0.28520109589749,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 1206,
                        "kittle_nam": "Whitewater River, M. Branch",
                        "route_mi": 15.267,
                        "length_mi": 15.267,
                        "objectid": 25276,
                        "trout_flag": null,
                        "kittle_nbr": "M-031-019",
                        "public_route_length": 10.686834249828,
                        "species": [
                            {
                                "id": 3,
                                "name": "Brown Trout",
                                "isStocked": true
                            },
                            {
                                "id": 2,
                                "name": "Brook Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0.36075875637434,
                                "stop": 0.97471895309788,
                                "restriction": {
                                    "summary": "No harvest. No bait.",
                                    "officialText": "Catch & Release for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.9200237824195,
                                "stop": 0.96305283953856,
                                "type": "TBD"
                            },
                            {
                                "start": 0.8060765168581,
                                "stop": 0.8335689511231,
                                "type": "TBD"
                            },
                            {
                                "start": 0.76728693042137,
                                "stop": 0.80461465556069,
                                "type": "TBD"
                            },
                            {
                                "start": 0.6365753710324,
                                "stop": 0.76572789517935,
                                "type": "TBD"
                            },
                            {
                                "start": 0.61690261673279,
                                "stop": 0.61919795419045,
                                "type": "TBD"
                            },
                            {
                                "start": 0.60435882324798,
                                "stop": 0.61238922011419,
                                "type": "TBD"
                            },
                            {
                                "start": 0.58259240316676,
                                "stop": 0.59830693149514,
                                "type": "TBD"
                            },
                            {
                                "start": 0.56243699689463,
                                "stop": 0.56591248680319,
                                "type": "TBD"
                            },
                            {
                                "start": 0.55058530025004,
                                "stop": 0.55727145588194,
                                "type": "TBD"
                            },
                            {
                                "start": 0.5490729311371,
                                "stop": 0.54986791601736,
                                "type": "TBD"
                            },
                            {
                                "start": 0.48201042523575,
                                "stop": 0.50572817885019,
                                "type": "TBD"
                            },
                            {
                                "start": 0.51456706404855,
                                "stop": 0.52307820041542,
                                "type": "TBD"
                            },
                            {
                                "start": 0.099109817396426,
                                "stop": 0.47686705924197,
                                "type": "TBD"
                            },
                            {
                                "start": 0.044284549024093,
                                "stop": 0.044621152830341,
                                "type": "TBD"
                            },
                            {
                                "start": 0.043756711451448,
                                "stop": 0.044214924652102,
                                "type": "TBD"
                            },
                            {
                                "start": 0.027123452815154,
                                "stop": 0.042339563552354,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 1207,
                        "kittle_nam": "Whitewater River, N. Branch",
                        "route_mi": 19.004,
                        "length_mi": 19.004,
                        "objectid": 25387,
                        "trout_flag": null,
                        "kittle_nbr": "M-031-018",
                        "public_route_length": 11.647152463699,
                        "species": [
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            },
                            {
                                "id": 2,
                                "name": "Brook Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0.58046302500343,
                                "stop": 0.79174254041683,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0.54176875891649,
                                "stop": 0.58005798195506,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0.23072638046678,
                                "stop": 0.53638298576674,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0.13545543941897,
                                "stop": 0.22836150944757,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.79487903299021,
                                "stop": 0.86078972074753,
                                "type": "TBD"
                            },
                            {
                                "start": 0.65422659548872,
                                "stop": 0.69323449230548,
                                "type": "TBD"
                            },
                            {
                                "start": 0.48071980896675,
                                "stop": 0.51632149372812,
                                "type": "TBD"
                            },
                            {
                                "start": 0.52801552181139,
                                "stop": 0.57880734605127,
                                "type": "TBD"
                            },
                            {
                                "start": 0.58399868726495,
                                "stop": 0.58928536371171,
                                "type": "TBD"
                            },
                            {
                                "start": 0.5795692502196,
                                "stop": 0.58193531423395,
                                "type": "TBD"
                            },
                            {
                                "start": 0.23587306565737,
                                "stop": 0.47266019131172,
                                "type": "TBD"
                            },
                            {
                                "start": 0.1460524352354,
                                "stop": 0.23348595988457,
                                "type": "TBD"
                            },
                            {
                                "start": 0.11905176904868,
                                "stop": 0.14402868106138,
                                "type": "TBD"
                            },
                            {
                                "start": 0.038347326125441,
                                "stop": 0.10306392702069,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 272,
                        "kittle_nam": "Kedron Creek",
                        "route_mi": 1.119,
                        "length_mi": 1.119,
                        "objectid": 25239,
                        "trout_flag": null,
                        "kittle_nbr": "M-009-033-008-004",
                        "public_route_length": 0.37806138878323,
                        "species": [
                            {
                                "id": 3,
                                "name": "Brown Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0,
                                "stop": 1,
                                "restriction": {
                                    "summary": "No harvest. No bait.",
                                    "officialText": "Catch & Release for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.23176504986265,
                                "stop": 0.56962151883783,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 5642,
                        "kittle_nam": "W. Indian Creek",
                        "route_mi": 0.053,
                        "length_mi": 0.053,
                        "objectid": 25310,
                        "trout_flag": null,
                        "kittle_nbr": "M-034-017",
                        "public_route_length": 0.03507828674892,
                        "species": [
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0.48334207573793,
                                "stop": 0.98597016386139,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                                    "isAnglingRestriction": false,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.1444740791556,
                                "stop": 0.24959515053687,
                                "type": "TBD"
                            },
                            {
                                "start": 0.41184397343442,
                                "stop": 0.74160585545784,
                                "type": "TBD"
                            },
                            {
                                "start": 0.74217354857862,
                                "stop": 0.96914506213469,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 1153,
                        "kittle_nam": "Forestville Creek",
                        "route_mi": 0.877,
                        "length_mi": 0.877,
                        "objectid": 25262,
                        "trout_flag": null,
                        "kittle_nbr": "M-009-025-009",
                        "public_route_length": 0.65239323635249,
                        "species": [
                            {
                                "id": 3,
                                "name": "Brown Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0,
                                "stop": 0.74091247020605,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                                    "isAnglingRestriction": false,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0,
                                "stop": 0.74389194566988,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 4058,
                        "kittle_nam": "Canfield Creek",
                        "route_mi": 0.46,
                        "length_mi": 0.46,
                        "objectid": 25260,
                        "trout_flag": null,
                        "kittle_nbr": "M-009-025-010",
                        "public_route_length": 0.45798947729282,
                        "species": [
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            },
                            {
                                "id": 2,
                                "name": "Brook Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0,
                                "stop": 0.76116230236814,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.68854241127563,
                                "stop": 1,
                                "type": "TBD"
                            },
                            {
                                "start": 0,
                                "stop": 0.68417170973829,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 1619,
                        "kittle_nam": "Wisel Creek",
                        "route_mi": 9.001,
                        "length_mi": 9.001,
                        "objectid": 25377,
                        "trout_flag": null,
                        "kittle_nbr": "M-009-010-010",
                        "public_route_length": 6.0508936387625,
                        "species": [
                            {
                                "id": 3,
                                "name": "Brown Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0,
                                "stop": 0.99373642362339,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                                    "isAnglingRestriction": false,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.87782657362032,
                                "stop": 0.95637664489517,
                                "type": "TBD"
                            },
                            {
                                "start": 0.1032347812487,
                                "stop": 0.13961154893774,
                                "type": "TBD"
                            },
                            {
                                "start": 0.17928275704133,
                                "stop": 0.28841240842875,
                                "type": "TBD"
                            },
                            {
                                "start": 0.8719311354293,
                                "stop": 0.87589829409125,
                                "type": "TBD"
                            },
                            {
                                "start": 0,
                                "stop": 0.06665277077153,
                                "type": "TBD"
                            },
                            {
                                "start": 0.09514438616402,
                                "stop": 0.09620975353352,
                                "type": "TBD"
                            },
                            {
                                "start": 0.078207689246265,
                                "stop": 0.078771324708787,
                                "type": "TBD"
                            },
                            {
                                "start": 0.072838055424735,
                                "stop": 0.076597464787923,
                                "type": "TBD"
                            },
                            {
                                "start": 0.082365416747333,
                                "stop": 0.085048942998227,
                                "type": "TBD"
                            },
                            {
                                "start": 0.29644036599618,
                                "stop": 0.40403269939204,
                                "type": "TBD"
                            },
                            {
                                "start": 0.46175121381218,
                                "stop": 0.52485543189396,
                                "type": "TBD"
                            },
                            {
                                "start": 0.52873371836931,
                                "stop": 0.6991358902295,
                                "type": "TBD"
                            },
                            {
                                "start": 0.70399000647225,
                                "stop": 0.70628524293995,
                                "type": "TBD"
                            },
                            {
                                "start": 0.40872167039751,
                                "stop": 0.41394434019151,
                                "type": "TBD"
                            },
                            {
                                "start": 0.41426565602561,
                                "stop": 0.41524608600028,
                                "type": "TBD"
                            },
                            {
                                "start": 0.41693698303776,
                                "stop": 0.4179777492893,
                                "type": "TBD"
                            },
                            {
                                "start": 0.418357506064,
                                "stop": 0.42258565415281,
                                "type": "TBD"
                            },
                            {
                                "start": 0.42340180615585,
                                "stop": 0.42370426347226,
                                "type": "TBD"
                            },
                            {
                                "start": 0.42481530470357,
                                "stop": 0.42547186671594,
                                "type": "TBD"
                            },
                            {
                                "start": 0.42740147602485,
                                "stop": 0.42862355341654,
                                "type": "TBD"
                            },
                            {
                                "start": 0.42893403230718,
                                "stop": 0.43053954286525,
                                "type": "TBD"
                            },
                            {
                                "start": 0.44745311164692,
                                "stop": 0.44867893689838,
                                "type": "TBD"
                            },
                            {
                                "start": 0.43336681339747,
                                "stop": 0.43400289922196,
                                "type": "TBD"
                            },
                            {
                                "start": 0.43429592827187,
                                "stop": 0.43686059134262,
                                "type": "TBD"
                            },
                            {
                                "start": 0.44297950329384,
                                "stop": 0.44500198714923,
                                "type": "TBD"
                            },
                            {
                                "start": 0.43727580281076,
                                "stop": 0.43993610494251,
                                "type": "TBD"
                            },
                            {
                                "start": 0.44010036622283,
                                "stop": 0.4410846185427,
                                "type": "TBD"
                            },
                            {
                                "start": 0.44163064755286,
                                "stop": 0.44238291700197,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 1157,
                        "kittle_nam": "Camp Creek",
                        "route_mi": 0.562,
                        "length_mi": 0.562,
                        "objectid": 25272,
                        "trout_flag": null,
                        "kittle_nbr": "M-009-025-003",
                        "public_route_length": 0.13117847457196,
                        "species": [
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0.099635409201266,
                                "stop": 0.30956308547862,
                                "restriction": {
                                    "summary": "No harvest. No bait.",
                                    "officialText": "Catch & Release for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            },
                            {
                                "start": 0.069480653318395,
                                "stop": 0.099416171925123,
                                "restriction": {
                                    "summary": "No harvest. No bait.",
                                    "officialText": "Catch & Release for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.0025734134451806,
                                "stop": 0.011662922692101,
                                "type": "TBD"
                            },
                            {
                                "start": 0.012044789301272,
                                "stop": 0.20317970479336,
                                "type": "TBD"
                            },
                            {
                                "start": 0.26121733802301,
                                "stop": 0.29169701521745,
                                "type": "TBD"
                            },
                            {
                                "start": 0.29874185807828,
                                "stop": 0.30145141196683,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 5456,
                        "kittle_nam": "Gribben Creek",
                        "route_mi": 3.968,
                        "length_mi": 3.968,
                        "objectid": 25286,
                        "trout_flag": null,
                        "kittle_nbr": "M-009-024",
                        "public_route_length": 3.1400252108147,
                        "species": [
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            },
                            {
                                "id": 3,
                                "name": "Brown Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0,
                                "stop": 0.92575988041571,
                                "restriction": {
                                    "summary": "12\" to 16\" no harvest. No bait.",
                                    "officialText": "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                    "isAnglingRestriction": true,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.054625495656997,
                                "stop": 0.3479863607904,
                                "type": "TBD"
                            },
                            {
                                "start": 0.60197547746593,
                                "stop": 0.91329779121433,
                                "type": "TBD"
                            },
                            {
                                "start": 0.40675715014609,
                                "stop": 0.59341096995751,
                                "type": "TBD"
                            }
                        ]
                    },
                    {
                        "gid": 1571,
                        "kittle_nam": "Stoney Brook",
                        "route_mi": 17.461,
                        "length_mi": 17.461,
                        "objectid": 25988,
                        "trout_flag": null,
                        "kittle_nbr": "M-096-001-006",
                        "public_route_length": 2.9688049685896,
                        "species": [
                            {
                                "id": 2,
                                "name": "Brook Trout",
                                "isStocked": true
                            },
                            {
                                "id": 1,
                                "name": "Rainbow Trout",
                                "isStocked": true
                            }
                        ],
                        "restrictions": [
                            {
                                "start": 0.0038945690396086,
                                "stop": 0.14679609476294,
                                "restriction": {
                                    "summary": "No harvest for Brook Trout.",
                                    "officialText": "Catch & Release for Brook Trout ",
                                    "isAnglingRestriction": false,
                                    "isHarvestRestriction": true
                                }
                            }
                        ],
                        "publicLand": [
                            {
                                "start": 0.7616457491515,
                                "stop": 0.79430589205991,
                                "type": "TBD"
                            },
                            {
                                "start": 0.34322929014442,
                                "stop": 0.36621052009882,
                                "type": "TBD"
                            },
                            {
                                "start": 0.087578863990397,
                                "stop": 0.14665126367664,
                                "type": "TBD"
                            },
                            {
                                "start": 0.030789128440946,
                                "stop": 0.079338343043079,
                                "type": "TBD"
                            },
                            {
                                "start": 0,
                                "stop": 0.0067619237124303,
                                "type": "TBD"
                            }
                        ]
                    }
                ];


            deferred.resolve(streams);

            return deferred.promise;
        };

        return new StreamCollectionService();
    });
});