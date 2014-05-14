
define('text!modules/main/home/HomeControllerTemplate.html',[],function () { return '<h1>Home controller template.</h1>\r\n<div>\r\n<div class="grid">\r\n    <ul>\r\n        <li class="box" ng-repeat="stream in streams">\r\n            <div class="grid-row">\r\n                <div class="containerHeader grid-row box-hd">\r\n                    <div class="grid-row-col grid-row-col_9of12">\r\n                        <h2 class="link js-stream-link sectionTitle" ng-click="selectStream(stream)">\r\n                            {{stream.streamName}}\r\n                        </h2>\r\n                    </div>\r\n                    <div class="grid-row-col grid-row-col_3of12">\r\n                        <div class="grid-row-col grid-row-col_4of12">\r\n                            <div data-species-summary species="stream.speciesSummary">\r\n\r\n                            </div>\r\n                        </div>\r\n                        <!--<div class="grid-row-col grid-row-col_4of12">-->\r\n                            <!--<div data-stream-ratio stream="stream">-->\r\n\r\n                            <!--</div>-->\r\n                        <!--</div>-->\r\n                        <div class="grid-row-col grid-row-col_8of12">\r\n                            <span class="heading statusText">Avoid</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- end .containerHeader -->\r\n\r\n                <div class="containerBody grid-row">\r\n                    <div class="grid-row-col_12of12">\r\n                        <div data-stream-line stream="stream"></div>\r\n                    </div>\r\n                </div>\r\n                <!-- end .containerBody -->\r\n\r\n                <div class="grid-row">\r\n                    <!--data-ng-if="stream.restrictionSegments == null || stream.restrictionSegments.length === 0"-->\r\n                    <div class="grid-row-col grid-row-col_9of12">\r\n                        <div data-restriction-legend restriction="stream.restrictionSegments"></div>\r\n                    </div>\r\n                    <div class="grid-row-col grid-row-col_3of12">\r\n                        <div class="fractionContainer">\r\n                            <span class="{{stream.publiclyAccessibleLength > 0.0 ? \'numerator\' : \'denominator\'}} ">{{stream.publiclyAccessibleLength}}</span>\r\n                            /\r\n                            <span class="denominator">{{stream.streamLength}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- end .containerFooter -->\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n</div>\r\n\r\n';});

define('modules/main/home/HomeModule',['require','angular','angular-route','text!./HomeControllerTemplate.html'],function(require) {
    

    var ng = require('angular');
    require('angular-route');

    /**
     * Home Module
     *
     * ### Overview
     *
     * This is a long-form description of the home module.  Here, things such as the available controllers, directives,
     * routes, services, filters and so forth should be documented.  Generally speaking, these kinds of modules should
     * only include controllers, templates and routes.  Specialized directives are also okay, although it's usually
     * better to write directives that are reusable, rather than highly specialized ones.  Those reusable directives
     * belong as root level modules in the 'app/modules' directory, rather than under the main module.
     *
     * Services are also okay, but exposing them to other modules can be tricky, especially if it requires two modules
     * to depend on each other.  Since services are typically meant to share state between components (they are
     * singletons after all) it's best to give special care to their design, and extrapolate them into a services
     * sub-module or stand-alone module.  In doing so, services can be readily shared between modules so long as
     * developers take care and understand the consequences that the coupling can create.
     *
     * @name app.home
     * @requires 'angular-route'
     */
    var homeModule = ng.module('app.home', [
        'ngRoute'
    ]);

    /**
     * @requires HomeControllerTemplate.html
     */
    var homeControllerTemplate = require('text!./HomeControllerTemplate.html');

    /**
     * Home module configuration
     *
     * ### Routes
     *
     * The home module utilizes the following routes:
     *
     *  - '/'
     *    - Controller: HomeController.js
     *    - Template: HomeControllerTemplate.html
     *
     */
    homeModule.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                template: homeControllerTemplate,
                controller: 'HomeController'
            });
    });

    return homeModule;
});

define('modules/main/home/HomeController',['require','./HomeModule'],function(require) {
    

    var homeModule = require('./HomeModule');
    var StreamCollectionService;
    /**
     * Home Module Controller
     *
     * ### Index Page
     *
     * The HomeController is responsible for responding to the '/' route, as defined in HomeModule.
     */

    /**
     * @constructor
     * @param {$log} Angular's wrapper for window.console.log
     */
    function HomeController($log, $scope, _StreamCollectionService_) {
        StreamCollectionService = _StreamCollectionService_;
        $log.info('application is running!');
        this.setupScope($scope);
    }

    HomeController.$inject = [
        '$log',
        '$scope',
        'StreamCollectionService'
    ];

    HomeController.prototype.setupScope = function($scope) {
        StreamCollectionService.getStreams()
            .then(function (streams) {
                $scope.streams = streams;
//                console.log($scope.streams);
            });

        $scope.selectStream = function(stream) {
            console.log(stream);
        };
    };

    homeModule.controller(
        'HomeController',
        HomeController
    );

});


define('text!modules/main/home/Restriction/RestrictionTemplate.html',[],function () { return '<ul class="restrictions" data-ng-repeat="restriction in restrictionViewModel.restrictions">\r\n    <li>\r\n        <div class="media">\r\n            <div class="media-hd legend {{restriction.cssClass}}">\r\n\r\n            </div>\r\n            <span class="media-bd heading">{{restriction.text}}</span>\r\n\r\n        </div>\r\n    </li>\r\n</ul>';});

/**
 * Created by MBP on 3/12/14.
 */

define('ViewModels/LinearReferenceSegment',['require'],function(require) {
    
    var LinearReferenceSegment = function(start, stop) {
        //this.initialize(start, stop);
        this.start = 0.0;
        this.stop = 0.0;
    };

    var proto = LinearReferenceSegment.prototype;

    proto.init = function(start, stop) {
        if (typeof start !== 'number' || start < 0 || start > 1) {
            throw new Error('start must be a number between 0 and 1');
        }

        if (typeof stop !== 'number' || stop < 0 || stop > 1) {
            throw new Error('start must be a number between 0 and 1');
        }

        this.start = start;
        this.stop = stop;
    };

    return LinearReferenceSegment;
});
define('modules/main/home/StreamLine/StreamLineViewModel',['require','ViewModels/LinearReferenceSegment'],function(require) {
    

    var Base = require('ViewModels/LinearReferenceSegment');

    var StreamLineViewModel = function (lineSegment) {
        this.lineSegment = null;
        this.xOffset = 0.0;
        this.width = 0.0;
        this.init(lineSegment);
    };

    StreamLineViewModel.prototype.init = function(lineSegment) {
        this.lineSegment = lineSegment;
        this.xOffset = 1.0 - this.lineSegment.stop;
        this.width = Math.abs(this.lineSegment.stop - this.lineSegment.start);
    };

    return StreamLineViewModel;
});
define('modules/main/home/StreamLine/RestrictionSummaryViewModel',['require','ViewModels/LinearReferenceSegment','./StreamLineViewModel'],function(require) {
    

    var Base = require('ViewModels/LinearReferenceSegment');
    var streamLineViewModel = require('./StreamLineViewModel');

    var RestrictionSummaryViewModel = function (restrictionSegments) {
        this.init(restrictionSegments);
    };

    RestrictionSummaryViewModel.prototype.init = function(restrictionSegments) {
        this.restrictions = [];
        for (var i = 0; i < restrictionSegments.length; i++) {
            var r = restrictionSegments[i];
            var restrictionViewModel = {
                restrictionSections: r.restrictionSections.map(function(t) {
                    return new streamLineViewModel(t);
                }),
                cssClass: i == 0 ? 'stream-line_restriction' : 'stream-line_restriction_secondary',
                text: r.officialText
            };

            this.restrictions.push(restrictionViewModel);
        }
    };

    return RestrictionSummaryViewModel;
});
define(/** @lends SelectableGeometryDirective */'modules/main/home/Restriction/RestrictionDirective',['require','../HomeModule','text!./RestrictionTemplate.html','ViewModels/LinearReferenceSegment','../StreamLine/RestrictionSummaryViewModel'],function(require) {
    
    var homeModule = require('../HomeModule');
//    require('./services/ProjectionService');
    var htmlTemplate = require('text!./RestrictionTemplate.html');
    var linearReferenceViewModel = require('ViewModels/LinearReferenceSegment');
    var restrictionSummaryViewModel = require('../StreamLine/RestrictionSummaryViewModel');

    homeModule.directive('restrictionLegend', function() {

        var exports = {
            restrict: "A",
            scope: {
                restriction: '='
            },
            template: htmlTemplate,
            link: function(scope, element, attrs) {
//                console.log('hit the restriction directive');
//                console.log(scope.restriction);
                scope.restrictionViewModel = new restrictionSummaryViewModel(scope.restriction);
            }
        };

        return exports;

    });

});

define('text!modules/main/home/Species/SpeciesTemplate.html',[],function () { return '<span class="statusIcon">\r\n    <svg preserveAspectRatio="xMidYMid meet" width="16" height="16"\r\n         viewBox="0 0 16 16" version="1.1"\r\n         xmlns="http://www.w3.org/2000/svg" class="species">\r\n        <g>\r\n            <g class="{{species.brownTrout.name}}">\r\n                <circle class="population {{species.brownTrout.getPopulationClassName()}}" cx="4" cy="12" r="3.4"/>\r\n                <circle class="stocking {{species.brownTrout.getIsStockedClass()}}" cx="4" cy="12" r="3.05"/>\r\n            </g>\r\n\r\n            <g class="{{species.brookTrout.name}}" >\r\n                <circle class="population {{species.brookTrout.getPopulationClassName()}}" cx="12" cy="12" r="3.4"/>\r\n                <circle class="stocking {{species.brookTrout.getIsStockedClass()}}" cx="12" cy="12" r="3.05"/>\r\n            </g>\r\n\r\n            <g class="{{species.rainbowTrout.name}}">\r\n                <circle class="population {{species.rainbowTrout.getPopulationClassName()}}" cx="8" cy="5.0718" r="3.4"/>\r\n                <circle class="stocking {{species.rainbowTrout.getIsStockedClass()}}" cx="8" cy="5.0718" r="3.05"/>\r\n            </g>\r\n        </g>\r\n    </svg>\r\n  <!--<img src="assets/images/iconThing.png" >-->\r\n</span>';});

define('modules/main/home/Species/SpeciesDirective',['require','../HomeModule','text!./SpeciesTemplate.html'],function(require) {
    

    var homeModule = require('../HomeModule');
    var template = require('text!./SpeciesTemplate.html');

    homeModule.directive('speciesSummary', function () {
        var exports = {
            restrict: 'A',

            template: template,

            scope: {
                species: '='
            },

            link: function(scope, element, attributes) {
//                console.log('hit the species summary directive');
//                console.log(scope.speciesSummary);
            }
        };

        return exports;
    });
});

define('text!modules/main/home/StreamLine/StreamLineTemplate.html',[],function () { return '<div height="12" width="292">\r\n    <svg class="js-stream-line stream-line" ng-attr-width="{{stage.width}}" height="20">\r\n\r\n        <g class="stream-line_public-land js-stream-line_public-land">\r\n            <g data-ng-repeat="segment in publicSegments">\r\n                <rect ng-attr-x="{{segment.xOffset * stage.width}}"\r\n                      y="0"\r\n                      ng-attr-width="{{segment.width * stage.width}}"\r\n                      height="11"\r\n                      rx="4"\r\n                      ry="4"\r\n                      class="public-land">\r\n                </rect>\r\n            </g>\r\n        </g>\r\n\r\n        <g class="js-stream-line_stream stream-line_stream">\r\n            <rect\r\n                    x="0"\r\n                    y="3"\r\n                    height="5"\r\n                    ng-attr-width="{{stage.width}}"></rect>\r\n        </g>\r\n\r\n        <g class="js-stream-line_restriction stream-line_restriction" data-ng-repeat="restriction in restrictionViewModel.restrictions">\r\n            <g data-ng-repeat="segment in restriction.restrictionSections">\r\n                <rect ng-attr-x="{{segment.xOffset * stage.width}}"\r\n                      y="3"\r\n                      ng-attr-width="{{segment.width * stage.width}}"\r\n                      height="5"\r\n                      class="restriction {{restriction.cssClass}}">\r\n                </rect>\r\n            </g>\r\n        </g>\r\n        <g class="js-stream-line_grid-lines" data-ng-repeat="tick in tickMarks">\r\n            <rect ng-attr-x="{{tick.xOffset}}"\r\n                  ng-attr-y="{{tick.yOffset}}"\r\n                  ng-attr-width="{{tick.width}}"\r\n                  ng-attr-height="{{tick.height}}"\r\n                  class="tick">\r\n            </rect>\r\n        </g>\r\n    </svg>\r\n    <!--<img src="assets/images/stream-line.png" height="12" width="292" alt="" />-->\r\n</div>';});

define('modules/main/home/StreamLine/StreamLineDirective',['require','../HomeModule','text!./StreamLineTemplate.html','./StreamLineViewModel','ViewModels/LinearReferenceSegment','./RestrictionSummaryViewModel'],function(require) {
    

    var homeModule = require('../HomeModule');
    var template = require('text!./StreamLineTemplate.html');
    var viewModel = require('./StreamLineViewModel');
    var linearReferenceViewModel = require('ViewModels/LinearReferenceSegment');
    var restrictionSummaryViewModel = require('./RestrictionSummaryViewModel');

    homeModule.directive('streamLine', function () {
        var exports = {
            restrict: 'A',

            template: template,

            scope: {
                stream: '='
            },

            link: function(scope, element, attributes) {
                scope.stage = {
                    width: 292
                };

                var streamBase = new linearReferenceViewModel();
                streamBase.init(1.0, 0.0);
                scope.streamBase = new viewModel(streamBase);

                scope.publicSegments = scope.stream.publicAccessSegments.map(function(segment) {
                    return new viewModel(segment);
                });

                scope.restrictionViewModel = new restrictionSummaryViewModel(scope.stream.restrictionSegments);

                var createTickMarks = function(streamLength) {
                    var clampedLength = Math.floor(length);
                    var tickMarks = [];
                    if (clampedLength < 1) {
                        return tickMarks;
                    }

                    var tickWidth = scope.stage.width / clampedLength;
                    for (var i = 0; i <= clampedLength; i++) {
                        tickMarks.push({
                                xOffset: i * tickWidth,
                                width: 3,
                                height: 3,
                                yOffset: 8
                            }
                        )
                    }

                    return tickMarks;
                };

                var length = parseFloat(scope.stream.streamLength);
                scope.tickMarks = createTickMarks(length);

//                scope.restrictions = scope.stream.restrictionSegments;
//                for (var i = 0; i < scope.restrictions.length; i++) {
//                    var restriction = scope.restrictions[i];
//                    restriction.restrictionSections = restriction.restrictionSections.map(function(segment) {
//                        return new viewModel(segment);
//                    });
//                }
            }
        };

        return exports;
    });
});

define('text!modules/main/home/StreamRatio/StreamRatioTemplate.html',[],function () { return '<div class="icon">\r\n    <svg class="stream-ratio" preserveAspectRatio="xMidYMid meet" width="16" height="16"\r\n         viewBox="0 0 16 16" version="1.1"\r\n         xmlns="http://www.w3.org/2000/svg">\r\n        <g class="stream-ratio_stream">\r\n            <circle cx="8" cy="8" ng-attr-r="{{streamRatio.waterRadius * 2.5}}"/>\r\n        </g>\r\n        <g class="stream-ratio_public-land">\r\n            <circle cx="8" cy="8" ng-attr-r="{{streamRatio.publicLandRadius * 2.5}}"/>\r\n        </g>\r\n    </svg>\r\n</div>';});

define('modules/main/home/StreamRatio/StreamRatioViewModel',['require'],function(require) {
    

    var StreamRatioViewModel = function() {
        this.totalLength = 0;
        this.publicLandLength = 0;
    };

    var proto = StreamRatioViewModel.prototype;

    proto.init = function(totalLength, publicLandLength) {
        if (totalLength == null || publicLandLength < 0) {
            throw new Error('totalLength cannot be null or less than 0');
        }

        if (publicLandLength == null || publicLandLength < 0) {
            throw new Error('publicLength cannot be null or less than 0');
        }

        if (publicLandLength > totalLength) {
            throw new Error('publicLength cannot be longer than total length');
        }

        this.totalLength = totalLength;
        this.publicLandLength = publicLandLength;

        var computeRadiusFromLength = function(length) {
            var area = Math.sqrt(length / Math.PI);
            return area;
        }

        this.waterRadius = computeRadiusFromLength(this.totalLength);
        this.publicLandRadius = computeRadiusFromLength(this.publicLandLength);
    };

    return StreamRatioViewModel;
});
define('modules/main/home/StreamRatio/StreamRatioDirective',['require','../HomeModule','text!./StreamRatioTemplate.html','./StreamRatioViewModel'],function(require) {
    

    var homeModule = require('../HomeModule');
    var template = require('text!./StreamRatioTemplate.html');
    var viewModel = require('./StreamRatioViewModel');

    homeModule.directive('streamRatio', function () {
        var exports = {
            restrict: 'A',

            template: template,

            scope: {
                stream: '='
            },

            link: function(scope, element, attributes) {
                console.log('hit stream ratio');
                var streamLength = parseFloat(scope.stream.streamLength);
                var publicLandLength = parseFloat(scope.stream.publiclyAccessibleLength);
                var vm = new viewModel();
                vm.init(streamLength, publicLandLength);
                scope.streamRatio = vm;
            }
        };

        return exports;
    });
});
define('modules/main/home/index',['require','./HomeController','./HomeModule','./Restriction/RestrictionDirective','./Species/SpeciesDirective','./StreamLine/StreamLineDirective','./StreamLine/StreamLineViewModel','../../../ViewModels/LinearReferenceSegment','./StreamLine/RestrictionSummaryViewModel','./StreamRatio/StreamRatioDirective','./StreamRatio/StreamRatioViewModel'],function(require) {
    

    require('./HomeController');
    require('./HomeModule');
    require('./Restriction/RestrictionDirective');
    require('./Species/SpeciesDirective');
    require('./StreamLine/StreamLineDirective');
    require('./StreamLine/StreamLineViewModel');
    require('../../../ViewModels/LinearReferenceSegment');
    require('./StreamLine/RestrictionSummaryViewModel');
    require('./StreamRatio/StreamRatioDirective');
    require('./StreamRatio/StreamRatioViewModel');
});

/**
 * Main Module
 *
 * ### Application root
 *
 * The MainModule is the primary namespace for the core application module.
 *
 * Each module that responds to the URL hash change belongs as a child module of Main.  The goal of this structure
 * is to define how the primary application 'sections' or templates respond to the URL hash changes and routing
 * structure.  MainModule, therefore, should remain relatively simple, as it need only require and register its
 * child modules, as well as any sibling modules (which are primarily directives and global services).
 *
 * Each module should have an index.js file, which requires (but does not need to utilize or assign) all of the files
 * within the module folder except for the *Module file itself- all other files will need to require it.  This way,
 * it will be possible for two modules to depend on each other without introducing circular dependencies into
 * require.js
 *
 * To require a module, simply:
 *
 * ```javascript
 * require('childModuleFolder/index');
 * ```
 * and add it to the module definition:
 *
 * ```javascript
 * ng.module('namespace', [
 *     // insert the string name defined by the child module required above
 *     'childModule'
 * ]);
 * ```
 *
 * and every file that registers itself with Angular will be available via Angular's dependency injection.
 *
 * ### Configuration
 *
 * Each module within the Main hierarchy is responsible for informing angular of the routes that it handles. MainModule
 * does not normally need to perform any route configuration, as it is only responsible for binding together the
 * specialized child modules.  However, it may be necessary to configure providers, such as adding domains to Angular's
 * $sce whitelist or other tasks.  If there isn't a specialized child module (or sibling module) for which it makes
 * sense to own responsibility for a particular domain, you can whitelist those domains in MainModule as the primary
 * application owner.
 *
 * ### Run Blocks
 *
 * Angular module run blocks are executed after everything else, including depencency injection setup, has occured.
 * They are difficult to unit test, and so should be kept as light and isolated as possible.
 *
 * @see [Angular Modules](http://docs.angularjs.org/guide/module)
 */
define('modules/main/MainModule',['require','angular','./home/index'],function(require) {
    

    var ng = require('angular');

    /**
     * @requires HomeModule
     */
    require('./home/index');

    return ng.module('app', [
        'app.home'
    ]);
});

/**
 * @fileOverview Stream is a base class for a Stream View.
 */

define('ViewModels/Stream',['require'],function(require) {
    

    var Stream = function() {
        this.streamName = '';
        this.streamLength = 0;
        this.publiclyAccessibleLength = 0;
        this.streamId = -1;
    };

    var proto = Stream.prototype;

    proto.init = function() {

    };

    proto.getStreamId = function() {
        return this.streamId;
    };

    proto.setStreamId = function(id) {
        this.streamId = id;
    };

    proto.getStreamName = function() {
        return this.streamName;
    };

    proto.setStreamName = function(name) {
        this.streamName = name;
    };

    proto.getStreamLength = function() {
        return this.streamLength;
    };

    proto.setStreamLength = function(length) {
        this.streamLength = length.toFixed(1);
    };

    proto.getPublicAccessibleLength = function() {
        return this.publiclyAccessibleLength;
    };

    proto.setPublicAccessibleLength = function(length) {
        this.publiclyAccessibleLength = length.toFixed(1);
    };

    proto.clone = function() {
        throw new Error('not implemented yet');
    };

    proto.copy = function() {
        throw new Error('not implemented yet');
    };

    proto.toJSON = function() {
        throw new Error('not implemented yet');
    };

    proto.fromJSON = function() {
        throw new Error('not implemented yet');
    };

    proto.destroy = function() {
        throw new Error('not implemented yet');
    };

    return Stream;
});
define('ViewModels/Species/SpeciesConfiguration',['require'],function(require) {
    

    var config = {
        rainbowTroutId: 1,
        rainbowClassName: 'rainbow',

        brookTroutId: 2,
        brookClassName: 'brook',

        brownTroutId: 3,
        brownClassName: 'brown',

        stockedClassName: 'stocked',
        notStockedClassName: 'none',
        wildClassName: 'wild',
        notWildClassName: 'none'
    }

    return config;
});
/**
 * Created by MBP on 3/12/14.
 */

define('ViewModels/Species/Species',['require','ViewModels/Species/SpeciesConfiguration'],function(require) {
    

    var config = require('ViewModels/Species/SpeciesConfiguration');

    var Species = function(id, name, isStocked) {
    };


    var proto = Species.prototype;

    proto.init = function(id, name, isStocked) {
        this.id = id;
        this.name = name;
        this.isStocked = isStocked;
        this.isPresent = false;
        this.stockingClass = config.notStockedClassName;
    };

    proto.getId = function() {
        return this.id;
    };

    proto.setId = function(id) {
        this.id = id;
    };

    proto.getName = function() {
        return this.name;
    };

    proto.setName = function(name) {
        if (typeof name !== 'string' || name == null || name.length === 0) {
            throw new Error('name cannot be null');
        }

        this.name = name;
    };

    proto.getPopulationClassName = function() {
        return this.isPresent
            ? config.wildClassName
            : config.notWildClassName;
    }

    proto.getIsStocked = function() {
        return this.isStocked;
    };

    proto.setIsStocked = function(isStocked) {
        this.isStocked = isStocked;
    };

    proto.getIsStockedClass = function() {
        return this.getIsStocked()
            ? config.stockedClassName
            : config.notStockedClassName;
    }

    proto.fromJSON = function(json) {
        this.setIsStocked(json.isStocked);
        this.setName(json.name);
        this.setId(json.id);
    };

    proto.destroy = function() {
        throw new Error('not implemented yet');
    };

    return Species;
});

define('ViewModels/Species/BrookTrout',['require','ViewModels/Species/SpeciesConfiguration','ViewModels/Species/Species'],function(require) {
    
    var config = require('ViewModels/Species/SpeciesConfiguration');
    var Base = require('ViewModels/Species/Species');

    var BrookTrout = function (isStocked) {
        Base.prototype.constructor.call(this);
        this.init(config.brookTroutId, config.brookClassName, isStocked);
    };

    BrookTrout.prototype = new Base();
    var proto = BrookTrout.prototype;

    return BrookTrout;
});

define('ViewModels/Species/BrownTrout',['require','ViewModels/Species/SpeciesConfiguration','ViewModels/Species/Species'],function(require) {
    
    var config = require('ViewModels/Species/SpeciesConfiguration');
    var Base = require('ViewModels/Species/Species');

    var BrownTrout = function (isStocked) {
        Base.prototype.constructor.call(this);
        this.init(config.brownTroutId, config.brownClassName, isStocked);
    };

    BrownTrout.prototype = new Base();
    var proto = BrownTrout.prototype;

    return BrownTrout;
});

define('ViewModels/Species/RainbowTrout',['require','ViewModels/Species/SpeciesConfiguration','ViewModels/Species/Species'],function(require) {
    
    var config = require('ViewModels/Species/SpeciesConfiguration');
    var Base = require('ViewModels/Species/Species');

    var RainbowTrout = function (isStocked) {
        if (isStocked)
        Base.prototype.constructor.call(this);
        this.init(config.rainbowTroutId, config.rainbowClassName, isStocked);
    };

    RainbowTrout.prototype = new Base();
    var proto = RainbowTrout.prototype;

    return RainbowTrout;
});
define('ViewModels/Species/SpeciesSummary',['require','ViewModels/Species/SpeciesConfiguration','ViewModels/Species/BrookTrout','ViewModels/Species/BrownTrout','ViewModels/Species/RainbowTrout'],function(require) {
    
    var config = require('ViewModels/Species/SpeciesConfiguration');
    var brookTrout = require('ViewModels/Species/BrookTrout');
    var brownTrout = require('ViewModels/Species/BrownTrout');
    var rainbowTrout = require('ViewModels/Species/RainbowTrout');

    var SpeciesSummary = function() {
        this.init();
    };

    var proto = SpeciesSummary.prototype;

    proto.init = function() {
        this.rainbowTrout = new rainbowTrout(false);
        this.brownTrout = new brownTrout(false);
        this.brookTrout = new brookTrout(false);
    };

    proto.fromJSON = function(json) {
        if (json == null || json.length === 0) {
            return;
        }
        for (var i = 0; i < json.length; i++) {
            var s = json[i];
            if (s.id === config.rainbowTroutId) {
                this.rainbowTrout = new rainbowTrout(s.isStocked);
                this.rainbowTrout.isPresent = true;
            }

            else if (s.id === config.brookTroutId) {
                this.brookTrout = new brookTrout(s.isStocked);
                this.brookTrout.isPresent = true;
            }

            else if (s.id === config.brownTroutId) {
                this.brownTrout = new brownTrout(s.isStocked);
                this.brownTrout.isPresent = true;
            }

        }

    };

    return SpeciesSummary;
});
/**
 * Created by MBP on 3/12/14.
 */

define('ViewModels/RestrictionSegment',['require','ViewModels/LinearReferenceSegment'],function(require) {
    

    var Base = require('ViewModels/LinearReferenceSegment');


    var RestrictionSegment = function(start, stop, restrictionType) {
        Base.prototype.constructor.call(this, start, stop);
        Base.prototype.init.call(this, start, stop);
        this.restrictionType = restrictionType;
    };

    RestrictionSegment.prototype = new Base();

    RestrictionSegment.prototype.getRestrictionType = function() {
        return this.restrictionType;
    };

    RestrictionSegment.prototype.setRestrictionType = function(restrictionType) {
        this.restrictionType = restrictionType;
    };

    RestrictionSegment.prototype.fromJSON = function(json) {

    };

    return RestrictionSegment;
});
/**
 * Created by MBP on 3/12/14.
 */

define('ViewModels/Restriction',['require','ViewModels/RestrictionSegment'],function(require) {
    
    var RestrictionSection = require('ViewModels/RestrictionSegment');

    var Restriction = function() {
        this.summary = '';
        this.officialText = '';
        this.isAnglingRestriction = false;
        this.isHarvestRestriction = false;
        this.restrictionSections = [];
    };

    var proto = Restriction.prototype;

    Restriction.prototype.getIsHarvestingRestriction = function() {
        return this.isHarvestRestriction;
    };
    
    Restriction.prototype.setIsHarvestingRestriction = function(isHarvestingRestriction) {
        this.isHarvestRestriction = isHarvestingRestriction;
    };
    
    Restriction.prototype.getIsAnglingRestriction = function() {
        return this.isAnglingRestriction;
    };
    
    Restriction.prototype.setIsAnglingRestriction = function(isAnglingRestriction) {
        this.isAnglingRestriction = isAnglingRestriction;
    };
    
    Restriction.prototype.getSummary = function() {
        return this.summary;
    };
    
    Restriction.prototype.setSummary = function(summary) {
        this.summary = summary;
    };

    Restriction.prototype.getOfficialText = function() {
        return this.officialText;
    };
    
    Restriction.prototype.setOfficialText = function(officialText) {
        this.officialText = officialText;
    };

    Restriction.prototype.setRestrictionSections = function(restrictionSections) {
        this.restrictionSections = restrictionSections;
    };

    Restriction.prototype.getRestrictionSections = function() {
        return this.restrictionSections;
    };

    Restriction.prototype.fromJSON = function(json) {
        var restrictionType = json.RestrictionType;
        this.setSummary(restrictionType.short_description);
        this.setIsAnglingRestriction(restrictionType.is_angling_restriction);
        this.setIsHarvestingRestriction(restrictionType.is_harvest_restriction);
        this.setOfficialText(restrictionType.official_text);

        var sections = json.RestrictionSections;
        if (sections == null || sections.length === 0) {
            this.setRestrictionSections([]);
            return;
        }

        var restrictionSections = sections.map(function(s) {
            var restrictionSection = new RestrictionSection(s.start, s.stop, restrictionType);
            return restrictionSection;
        });

        this.setRestrictionSections(restrictionSections);
    };

    return Restriction;
});
/**
 * Created by MBP on 3/12/14.
 */

define('ViewModels/PublicLandSegment',['require','ViewModels/LinearReferenceSegment'],function(require) {
    

    var Base = require('ViewModels/LinearReferenceSegment');

    var PublicLandSegment = function(start, stop, landType) {
        Base.prototype.constructor.call(this, start, stop);
        Base.prototype.init.call(this, start, stop);
        this.landType = landType;
    };

    PublicLandSegment.prototype = new Base();

    PublicLandSegment.prototype.getLandType = function() {
        return this.landType;
    };
    
    PublicLandSegment.prototype.setLandType = function(landType) {
        this.landType = landType;
    };

    return PublicLandSegment;
});
/**
 * Created by MBP on 3/12/14.
 */

define('ViewModels/PublicLand',['require'],function(require) {
    

    var PublicLand = function() {
        this.shortText = '';
        this.longText = '';
        this.additionalInfo = '';
    };

    PublicLand.prototype.getShortText = function() {
        return this.shortText;
    };

    PublicLand.prototype.setShortText = function(shortText) {
        this.shortText = shortText;
    };

    PublicLand.prototype.getLongText = function() {
        return this.longText;
    };

    PublicLand.prototype.setLongText = function(longText) {
        this.longText = longText;
    };

    PublicLand.prototype.getAdditionalInfo = function() {
        return this.additionalInfo;
    };

    PublicLand.prototype.setAdditionalInfo = function(additionalInfo) {
        this.additionalInfo = additionalInfo;
    };

    PublicLand.prototype.fromJSON = function(json) {
        this.setShortText(json);
    };

    return PublicLand;
});
/**
 * @fileOverview Stream is a base class for a Stream View.
 */

define('ViewModels/StreamLine',['require','ViewModels/Stream','ViewModels/Species/Species','ViewModels/Species/SpeciesSummary','ViewModels/LinearReferenceSegment','ViewModels/RestrictionSegment','ViewModels/Restriction','ViewModels/PublicLandSegment','ViewModels/PublicLand'],function(require) {
    
    var Base = require('ViewModels/Stream');
    var Species = require('ViewModels/Species/Species');
    var SpeciesSummary = require('ViewModels/Species/SpeciesSummary');
    var LinearReferenceSegment = require('ViewModels/LinearReferenceSegment');

    var RestrictionSegment = require('ViewModels/RestrictionSegment');
    var Restriction = require('ViewModels/Restriction');

    var PublicLandSegment = require('ViewModels/PublicLandSegment');
    var PublicLand = require('ViewModels/PublicLand');




    var StreamLine = function() {
        Base.prototype.constructor.call(this);
        this.init();
    };

    StreamLine.prototype = new Base();
    var proto = StreamLine.prototype;

    proto.init = function() {
        this.streamName = '';
        this.streamLength = 0;
        this.restrictionSegments = [];
        this.publicAccessSegments = [];
        this.speciesSummary = new SpeciesSummary();
    };

    proto.getRestrictionSegment = function() {
        return this.restrictionSegments;
    };

    proto.setRestrictionSegments = function(segments) {
        this.restrictionSegments = segments;
    };

    proto.getPublicAccessSegments = function() {
        return this.publicAccessSegments;
    };

    proto.setPublicAccessSegments = function(segments) {
        this.publicAccessSegments = segments;
    };

    proto.getSpeciesSummary = function() {
        return this.speciesSummary;
    };

    proto.setSpeciesSummary = function(speciesSummary) {
        this.speciesSummary = speciesSummary;
    };

    proto.fromJSON = function(json) {
        // how can i defer to the functionality of the base type Stream's fromJSON functionality?
        this.setStreamId(json.gid);
        this.setStreamName(json.kittle_nam);
        this.setStreamLength(json.length_mi);
        this.setPublicAccessibleLength(json.public_route_length)

        if (json.species != null) {
//            var species = json.species.map(function(speciesJson) {
//                return new Species(speciesJson.id, speciesJson.name, speciesJson.isStocked);
//            });
            var speciesJSON = json.species;
            this.speciesSummary.fromJSON(speciesJSON);
//            this.setSpecies(species);
        }

        if (json.restrictions != null) {
            var restrictions = json.restrictions.map(function(restrictionLocationJson) {
                var restriction = new Restriction();
                restriction.fromJSON(restrictionLocationJson);
                return restriction;
            });
            this.setRestrictionSegments(restrictions);
        }

        if (json.publicLand != null) {
            var publicLandSegments = json.publicLand.map(function(publicLandSegmentJson) {
                var publicLand = new PublicLand();
                publicLand.fromJSON(publicLandSegmentJson.type);
                var start = publicLandSegmentJson.start;
                var stop = publicLandSegmentJson.stop;
                return new PublicLandSegment(start, stop, publicLand);
            });
            this.setPublicAccessSegments(publicLandSegments);
        }
    };

    return StreamLine;
});
define(/** @lends Zoom */'modules/main/services/StreamCollectionService',['require','modules/main/MainModule','ViewModels/StreamLine'],function(require) {
    

    // load our main module.
    var mainModule = require('modules/main/MainModule');

    var StreamLine = require('ViewModels/StreamLine');


    mainModule.factory('StreamCollectionService', function($http, $q) {
        var StreamCollectionService = function() {

        };

        StreamCollectionService.prototype.getStreams = function() {
            var deferred = $q.defer();

            var streams =
                [
                    { "gid" : 4200,
                    "kittle_nam" : "Eagle Creek",
                    "kittle_nbr" : "M-055-009",
                    "length_mi" : 2.1859999999999999,
                    "objectid" : 25589,
                    "publicLand" : [ { "start" : 0.952562945448592,
                        "stop" : 1.0,
                        "type" : "TBD"
                    },
                        { "start" : 0.815297549088763,
                            "stop" : 0.915034639225893,
                            "type" : "TBD"
                        },
                        { "start" : 0.553875317891289,
                            "stop" : 0.801210037784541,
                            "type" : "TBD"
                        },
                        { "start" : 0.389799400675607,
                            "stop" : 0.549192769070127,
                            "type" : "TBD"
                        },
                        { "start" : 0.218383854998189,
                            "stop" : 0.382688696845599,
                            "type" : "TBD"
                        }
                    ],
                    "public_route_length" : 1.5700006655646521,
                    "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : false,
                        "isHarvestRestriction" : true,
                        "officialText" : "Catch & Release for All Trout (Bait Allowed)",
                        "summary" : "No harvest."
                    },
                        "start" : 0.203079265109606,
                        "stop" : 1.0
                    } ],
                        "RestrictionType" : { "dnr_trout_map_new_reg" : 5,
                            "id" : 5,
                            "is_angling_restriction" : false,
                            "is_harvest_restriction" : true,
                            "official_text" : "Catch & Release for All Trout (Bait Allowed)",
                            "short_description" : "No harvest."
                        }
                    } ],
                    "route_mi" : 2.1859999999999999,
                    "species" : [ { "id" : 1,
                        "isStocked" : true,
                        "name" : "Rainbow Trout"
                    },
                        { "id" : 3,
                            "isStocked" : true,
                            "name" : "Brown Trout"
                        }
                    ],
                    "trout_flag" : null
                },
                    { "gid" : 971,
                        "kittle_nam" : "Root River, S. Fork",
                        "kittle_nbr" : "M-009-010",
                        "length_mi" : 16.071000000000002,
                        "objectid" : 25429,
                        "publicLand" :
                            [ { "start" : 0.932402120414244,
                            "stop" : 0.959412375522536,
                            "type" : "TBD"
                        },
                            { "start" : 0.923592872606383,
                                "stop" : 0.923799249529581,
                                "type" : "TBD"
                            },
                            { "start" : 0.924720825133901,
                                "stop" : 0.926977677109685,
                                "type" : "TBD"
                            },
                            { "start" : 0.75336616228243003,
                                "stop" : 0.875296203594151,
                                "type" : "TBD"
                            },
                            { "start" : 0.73661446522212004,
                                "stop" : 0.752718357983832,
                                "type" : "TBD"
                            },
                            { "start" : 0.72629691621371995,
                                "stop" : 0.736494718097753,
                                "type" : "TBD"
                            },
                            { "start" : 0.724503848844811,
                                "stop" : 0.725052320711422,
                                "type" : "TBD"
                            },
                            { "start" : 0.722931391286766,
                                "stop" : 0.723852421428899,
                                "type" : "TBD"
                            },
                            { "start" : 0.715541354158281,
                                "stop" : 0.722462469809745,
                                "type" : "TBD"
                            },
                            { "start" : 0.713876894136729,
                                "stop" : 0.714773268530328,
                                "type" : "TBD"
                            },
                            { "start" : 0.711034073500027,
                                "stop" : 0.712966545584167,
                                "type" : "TBD"
                            },
                            { "start" : 0.675865550739017,
                                "stop" : 0.710832492956983,
                                "type" : "TBD"
                            },
                            { "start" : 0.494279954904062,
                                "stop" : 0.674785321763619,
                                "type" : "TBD"
                            },
                            { "start" : 0.251111658121677,
                                "stop" : 0.490897220145909,
                                "type" : "TBD"
                            },
                            { "start" : 0.184656536208703,
                                "stop" : 0.231652660729528,
                                "type" : "TBD"
                            },
                            { "start" : 0.120831743664522,
                                "stop" : 0.137041810274331,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 11.368444542351011,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : true,
                            "isHarvestRestriction" : true,
                            "officialText" : "Catch & Release for All Trout (Artificial Lures or Flies Only)",
                            "summary" : "No harvest. No bait."
                        },
                            "start" : 0.532859402582055,
                            "stop" : 1.0
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 4,
                                "id" : 4,
                                "is_angling_restriction" : true,
                                "is_harvest_restriction" : true,
                                "official_text" : "Catch & Release for All Trout (Artificial Lures or Flies Only)",
                                "short_description" : "No harvest. No bait."
                            }
                        },
                            { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : false,
                                "isHarvestRestriction" : true,
                                "officialText" : "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                                "summary" : "12\" to 16\" no harvest."
                            },
                                "start" : 0.589716101368559,
                                "stop" : 0.590024725576744
                            } ],
                                "RestrictionType" : { "dnr_trout_map_new_reg" : 3,
                                    "id" : 7,
                                    "is_angling_restriction" : false,
                                    "is_harvest_restriction" : true,
                                    "official_text" : "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                                    "short_description" : "12\" to 16\" no harvest."
                                }
                            }
                        ],
                        "route_mi" : 16.071000000000002,
                        "species" : [ { "id" : 2,
                            "isStocked" : false,
                            "name" : "Brook Trout"
                        } ],
                        "trout_flag" : null
                    },
                    { "gid" : 877,
                        "kittle_nam" : "Vermillion River",
                        "kittle_nbr" : "M-049",
                        "length_mi" : 22.917999999999999,
                        "objectid" : 25677,
                        "publicLand" : [ { "start" : 0.385214784595243,
                            "stop" : 0.385724626696348,
                            "type" : "TBD"
                        },
                            { "start" : 0.332455003753615,
                                "stop" : 0.384179462759432,
                                "type" : "TBD"
                            },
                            { "start" : 0.273454105170789,
                                "stop" : 0.291962034316265,
                                "type" : "TBD"
                            },
                            { "start" : 0.0734624959458526,
                                "stop" : 0.108284947523362,
                                "type" : "TBD"
                            },
                            { "start" : 0.0730074915113824,
                                "stop" : 0.0732896323791618,
                                "type" : "TBD"
                            },
                            { "start" : 0.0,
                                "stop" : 0.0421118938132443,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 3.3909178649975193,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : false,
                            "isHarvestRestriction" : true,
                            "officialText" : "Catch & Release for All Trout (Bait Allowed)",
                            "summary" : "No harvest."
                        },
                            "start" : 0.631775796247975,
                            "stop" : 1.0
                        },
                            { "restriction" : { "isAnglingRestriction" : false,
                                "isHarvestRestriction" : true,
                                "officialText" : "Catch & Release for All Trout (Bait Allowed)",
                                "summary" : "No harvest."
                            },
                                "start" : 0.0,
                                "stop" : 0.542515526517776
                            }
                        ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 5,
                                "id" : 5,
                                "is_angling_restriction" : false,
                                "is_harvest_restriction" : true,
                                "official_text" : "Catch & Release for All Trout (Bait Allowed)",
                                "short_description" : "No harvest."
                            }
                        } ],
                        "route_mi" : 22.917999999999999,
                        "species" : [ { "id" : 3,
                            "isStocked" : true,
                            "name" : "Brown Trout"
                        },
                            { "id" : 1,
                                "isStocked" : true,
                                "name" : "Rainbow Trout"
                            }
                        ],
                        "trout_flag" : null
                    },
                    { "gid" : 4637,
                        "kittle_nam" : "Eagle Creek, E. Branch",
                        "kittle_nbr" : "M-055-009-003",
                        "length_mi" : 0.56499999999999995,
                        "objectid" : 25585,
                        "publicLand" : [ { "start" : 0.0,
                            "stop" : 0.366657444630871,
                            "type" : "TBD"
                        },
                            { "start" : 0.393899215666819,
                                "stop" : 1.0,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 0.5496083993646893,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : false,
                            "isHarvestRestriction" : true,
                            "officialText" : "Catch & Release for All Trout (Bait Allowed)",
                            "summary" : "No harvest."
                        },
                            "start" : 0.0,
                            "stop" : 1.0
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 5,
                                "id" : 5,
                                "is_angling_restriction" : false,
                                "is_harvest_restriction" : true,
                                "official_text" : "Catch & Release for All Trout (Bait Allowed)",
                                "short_description" : "No harvest."
                            }
                        } ],
                        "route_mi" : 0.56499999999999995,
                        "species" : [ { "id" : 1,
                            "isStocked" : true,
                            "name" : "Rainbow Trout"
                        },
                            { "id" : 3,
                                "isStocked" : true,
                                "name" : "Brown Trout"
                            }
                        ],
                        "trout_flag" : null
                    },
                    { "gid" : 2743,
                        "kittle_nam" : "Peterson Creek",
                        "kittle_nbr" : "M-026-001-008",
                        "length_mi" : 0.93000000000000005,
                        "objectid" : 25169,
                        "publicLand" : [ { "start" : 0.0,
                            "stop" : 0.0248512219658021,
                            "type" : "TBD"
                        } ],
                        "public_route_length" : 0.023111636428195956,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : true,
                            "isHarvestRestriction" : true,
                            "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                            "summary" : "12\" to 16\" no harvest. No bait."
                        },
                            "start" : 0.0,
                            "stop" : 0.0527478347894509
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 2,
                                "id" : 2,
                                "is_angling_restriction" : true,
                                "is_harvest_restriction" : true,
                                "official_text" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "short_description" : "12\" to 16\" no harvest. No bait."
                            }
                        } ],
                        "route_mi" : 0.93000000000000005,
                        "species" : [ { "id" : 1,
                            "isStocked" : true,
                            "name" : "Rainbow Trout"
                        } ],
                        "trout_flag" : null
                    },
                    { "gid" : 73,
                        "kittle_nam" : "Garvin Brook",
                        "kittle_nbr" : "M-026-001",
                        "length_mi" : 0.88800000000000001,
                        "objectid" : 25177,
                        "publicLand" : [ { "start" : 0.931551500114637,
                            "stop" : 0.934504792198182,
                            "type" : "TBD"
                        },
                            { "start" : 0.904771134808107,
                                "stop" : 0.92184893731758999,
                                "type" : "TBD"
                            },
                            { "start" : 0.901224538502568,
                                "stop" : 0.904319679658459,
                                "type" : "TBD"
                            },
                            { "start" : 0.760871692246637,
                                "stop" : 0.867705210703636,
                                "type" : "TBD"
                            },
                            { "start" : 0.929824672224248,
                                "stop" : 0.931078794777874,
                                "type" : "TBD"
                            },
                            { "start" : 0.923482903726745,
                                "stop" : 0.92632652770959001,
                                "type" : "TBD"
                            },
                            { "start" : 0.517515564242262,
                                "stop" : 0.540535756847628,
                                "type" : "TBD"
                            },
                            { "start" : 0.548688099498282,
                                "stop" : 0.554654569474391,
                                "type" : "TBD"
                            },
                            { "start" : 0.555507546251087,
                                "stop" : 0.581808824486639,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 0.16813875210476142,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : true,
                            "isHarvestRestriction" : true,
                            "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                            "summary" : "12\" to 16\" no harvest. No bait."
                        },
                            "start" : 0.619311303171795,
                            "stop" : 0.867568937607969
                        },
                            { "restriction" : { "isAnglingRestriction" : true,
                                "isHarvestRestriction" : true,
                                "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "summary" : "12\" to 16\" no harvest. No bait."
                            },
                                "start" : 0.610947355725732,
                                "stop" : 0.616933203064368
                            },
                            { "restriction" : { "isAnglingRestriction" : true,
                                "isHarvestRestriction" : true,
                                "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "summary" : "12\" to 16\" no harvest. No bait."
                            },
                                "start" : 0.609056920638632,
                                "stop" : 0.610330529659815
                            },
                            { "restriction" : { "isAnglingRestriction" : true,
                                "isHarvestRestriction" : true,
                                "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "summary" : "12\" to 16\" no harvest. No bait."
                            },
                                "start" : 0.606961287830184,
                                "stop" : 0.607750267298468
                            },
                            { "restriction" : { "isAnglingRestriction" : true,
                                "isHarvestRestriction" : true,
                                "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "summary" : "12\" to 16\" no harvest. No bait."
                            },
                                "start" : 0.596247619750948,
                                "stop" : 0.596775744378411
                            },
                            { "restriction" : { "isAnglingRestriction" : true,
                                "isHarvestRestriction" : true,
                                "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "summary" : "12\" to 16\" no harvest. No bait."
                            },
                                "start" : 0.595348134187036,
                                "stop" : 0.596057321353228
                            },
                            { "restriction" : { "isAnglingRestriction" : true,
                                "isHarvestRestriction" : true,
                                "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "summary" : "12\" to 16\" no harvest. No bait."
                            },
                                "start" : 0.597456262770404,
                                "stop" : 0.599125495597007
                            },
                            { "restriction" : { "isAnglingRestriction" : true,
                                "isHarvestRestriction" : true,
                                "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "summary" : "12\" to 16\" no harvest. No bait."
                            },
                                "start" : 0.588021072615283,
                                "stop" : 0.592629560993842
                            },
                            { "restriction" : { "isAnglingRestriction" : true,
                                "isHarvestRestriction" : true,
                                "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "summary" : "12\" to 16\" no harvest. No bait."
                            },
                                "start" : 0.585068394848563,
                                "stop" : 0.587695279904963
                            },
                            { "restriction" : { "isAnglingRestriction" : true,
                                "isHarvestRestriction" : true,
                                "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "summary" : "12\" to 16\" no harvest. No bait."
                            },
                                "start" : 0.570452562178556,
                                "stop" : 0.583779268702359
                            }
                        ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 2,
                                "id" : 2,
                                "is_angling_restriction" : true,
                                "is_harvest_restriction" : true,
                                "official_text" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "short_description" : "12\" to 16\" no harvest. No bait."
                            }
                        } ],
                        "route_mi" : 0.88800000000000001,
                        "species" : [ { "id" : 2,
                            "isStocked" : false,
                            "name" : "Brook Trout"
                        } ],
                        "trout_flag" : null
                    },
                    { "gid" : 666,
                        "kittle_nam" : "Trout Run Creek",
                        "kittle_nbr" : "M-009-029",
                        "length_mi" : 13.653,
                        "objectid" : 25254,
                        "publicLand" : [ { "start" : 0.530881381130391,
                            "stop" : 0.642143592156971,
                            "type" : "TBD"
                        },
                            { "start" : 0.850854415702919,
                                "stop" : 0.91226940182324001,
                                "type" : "TBD"
                            },
                            { "start" : 0.766548078491542,
                                "stop" : 0.850152653095336,
                                "type" : "TBD"
                            },
                            { "start" : 0.674857756042439,
                                "stop" : 0.719693914014867,
                                "type" : "TBD"
                            },
                            { "start" : 0.748266575605136,
                                "stop" : 0.765850940105216,
                                "type" : "TBD"
                            },
                            { "start" : 0.723476489750207,
                                "stop" : 0.747229715159939,
                                "type" : "TBD"
                            },
                            { "start" : 0.72187342524886,
                                "stop" : 0.722758884967763,
                                "type" : "TBD"
                            },
                            { "start" : 0.148406506492632,
                                "stop" : 0.471702885686478,
                                "type" : "TBD"
                            },
                            { "start" : 0.0333390895211675,
                                "stop" : 0.0986456121625964,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 9.9932298098476551,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : true,
                            "isHarvestRestriction" : true,
                            "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                            "summary" : "12\" to 16\" no harvest. No bait."
                        },
                            "start" : 0.0013417648806322,
                            "stop" : 1.0
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 2,
                                "id" : 2,
                                "is_angling_restriction" : true,
                                "is_harvest_restriction" : true,
                                "official_text" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "short_description" : "12\" to 16\" no harvest. No bait."
                            }
                        } ],
                        "route_mi" : 13.653,
                        "species" : [ { "id" : 1,
                            "isStocked" : true,
                            "name" : "Rainbow Trout"
                        } ],
                        "trout_flag" : null
                    },
                    { "gid" : 879,
                        "kittle_nam" : "Hay Creek",
                        "kittle_nbr" : "M-046",
                        "length_mi" : 17.434000000000001,
                        "objectid" : 25721,
                        "publicLand" : [ { "start" : 0.892512116030341,
                            "stop" : 0.927133222134813,
                            "type" : "TBD"
                        },
                            { "start" : 0.855574602663532,
                                "stop" : 0.881237282483879,
                                "type" : "TBD"
                            },
                            { "start" : 0.81218656494338004,
                                "stop" : 0.822213817926281,
                                "type" : "TBD"
                            },
                            { "start" : 0.735456499615391,
                                "stop" : 0.780050734608784,
                                "type" : "TBD"
                            },
                            { "start" : 0.541801310755464,
                                "stop" : 0.735432575605627,
                                "type" : "TBD"
                            },
                            { "start" : 0.536851954567032,
                                "stop" : 0.538691626751567,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 5.4110988614549296,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : true,
                            "isHarvestRestriction" : true,
                            "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                            "summary" : "12\" to 16\" no harvest. No bait."
                        },
                            "start" : 0.54203149025541997,
                            "stop" : 0.784230195369456
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 2,
                                "id" : 2,
                                "is_angling_restriction" : true,
                                "is_harvest_restriction" : true,
                                "official_text" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "short_description" : "12\" to 16\" no harvest. No bait."
                            }
                        } ],
                        "route_mi" : 17.434000000000001,
                        "species" : [ { "id" : 3,
                            "isStocked" : false,
                            "name" : "Brown Trout"
                        } ],
                        "trout_flag" : null
                    },
                    { "gid" : 1583,
                        "kittle_nam" : "Spring Valley Creek",
                        "kittle_nbr" : "M-009-033-010",
                        "length_mi" : 16.814,
                        "objectid" : 25235,
                        "publicLand" : [ { "start" : 0.629685126809825,
                            "stop" : 0.63725857275464004,
                            "type" : "TBD"
                        },
                            { "start" : 0.490883733484912,
                                "stop" : 0.496358079256432,
                                "type" : "TBD"
                            },
                            { "start" : 0.475198907867784,
                                "stop" : 0.475859199060361,
                                "type" : "TBD"
                            },
                            { "start" : 0.47224096404624999,
                                "stop" : 0.473798065190027,
                                "type" : "TBD"
                            },
                            { "start" : 0.469680856505424,
                                "stop" : 0.471506704309328,
                                "type" : "TBD"
                            },
                            { "start" : 0.445732116210326,
                                "stop" : 0.468596790871133,
                                "type" : "TBD"
                            },
                            { "start" : 0.417399438682243,
                                "stop" : 0.437995116701153,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 1.0181109795935162,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : false,
                            "isHarvestRestriction" : true,
                            "officialText" : "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                            "summary" : "12\" to 16\" no harvest."
                        },
                            "start" : 0.0,
                            "stop" : 0.392249546285697
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 3,
                                "id" : 7,
                                "is_angling_restriction" : false,
                                "is_harvest_restriction" : true,
                                "official_text" : "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                                "short_description" : "12\" to 16\" no harvest."
                            }
                        } ],
                        "route_mi" : 16.814,
                        "species" : [ { "id" : 1,
                            "isStocked" : true,
                            "name" : "Rainbow Trout"
                        } ],
                        "trout_flag" : null
                    },
                    { "gid" : 4818,
                        "kittle_nam" : "Logan Creek",
                        "kittle_nbr" : "M-031-018-004",
                        "length_mi" : 0.97599999999999998,
                        "objectid" : 25330,
                        "publicLand" : [ { "start" : 0.977050984830476,
                            "stop" : 1.0,
                            "type" : "TBD"
                        },
                            { "start" : 0.0,
                                "stop" : 0.695192394373249,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 0.70090601571374633,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : true,
                            "isHarvestRestriction" : true,
                            "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                            "summary" : "12\" to 16\" no harvest. No bait."
                        },
                            "start" : 0.0,
                            "stop" : 0.960399524370996
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 2,
                                "id" : 2,
                                "is_angling_restriction" : true,
                                "is_harvest_restriction" : true,
                                "official_text" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "short_description" : "12\" to 16\" no harvest. No bait."
                            }
                        } ],
                        "route_mi" : 0.97599999999999998,
                        "species" : [ { "id" : 3,
                            "isStocked" : false,
                            "name" : "Brown Trout"
                        } ],
                        "trout_flag" : null
                    },
                    { "gid" : 4395,
                        "kittle_nam" : "Beaver Creek, Main",
                        "kittle_nbr" : "M-009-010-003",
                        "length_mi" : 6.9909999999999997,
                        "objectid" : 25419,
                        "publicLand" : [ { "start" : 0.644823273860784,
                            "stop" : 0.694669349372351,
                            "type" : "TBD"
                        },
                            { "start" : 0.883449599835377,
                                "stop" : 1.0,
                                "type" : "TBD"
                            },
                            { "start" : 0.743235870984308,
                                "stop" : 0.784069688504137,
                                "type" : "TBD"
                            },
                            { "start" : 0.851886404158821,
                                "stop" : 0.864964531779966,
                                "type" : "TBD"
                            },
                            { "start" : 0.867151911062966,
                                "stop" : 0.873147987218311,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 1.5820947383348119,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : false,
                            "isHarvestRestriction" : true,
                            "officialText" : "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                            "summary" : "12\" to 16\" no harvest."
                        },
                            "start" : 0.999646535759348,
                            "stop" : 1.0
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 3,
                                "id" : 7,
                                "is_angling_restriction" : false,
                                "is_harvest_restriction" : true,
                                "official_text" : "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                                "short_description" : "12\" to 16\" no harvest."
                            }
                        } ],
                        "route_mi" : 6.9909999999999997,
                        "species" : [ { "id" : 3,
                            "isStocked" : true,
                            "name" : "Brown Trout"
                        },
                            { "id" : 2,
                                "isStocked" : true,
                                "name" : "Brook Trout"
                            }
                        ],
                        "trout_flag" : null
                    },
                    { "gid" : 4115,
                        "kittle_nam" : "Trout Valley Creek",
                        "kittle_nbr" : "M-031-001",
                        "length_mi" : 7.3289999999999997,
                        "objectid" : 25185,
                        "publicLand" : [ { "start" : 0.0,
                            "stop" : 0.159801869793851,
                            "type" : "TBD"
                        },
                            { "start" : 0.166225347500927,
                                "stop" : 0.210893508290967,
                                "type" : "TBD"
                            },
                            { "start" : 0.632095736295671,
                                "stop" : 0.726715215420862,
                                "type" : "TBD"
                            },
                            { "start" : 0.759635272140571,
                                "stop" : 0.762561072682167,
                                "type" : "TBD"
                            },
                            { "start" : 0.749030205696867,
                                "stop" : 0.75731650865805999,
                                "type" : "TBD"
                            },
                            { "start" : 0.270359433798468,
                                "stop" : 0.285201095897494,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 2.3829750647535648,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : true,
                            "isHarvestRestriction" : true,
                            "officialText" : "12 Inch Minimum for Brook Trout, Bag Limit of 1 (Artificial Lures or Flies Only)",
                            "summary" : "12\" minimum for Brook Trout. Bag Limit of one trout. No bait."
                        },
                            "start" : 0.0,
                            "stop" : 0.945642731165254
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 1,
                                "id" : 3,
                                "is_angling_restriction" : true,
                                "is_harvest_restriction" : true,
                                "official_text" : "12 Inch Minimum for Brook Trout, Bag Limit of 1 (Artificial Lures or Flies Only)",
                                "short_description" : "12\" minimum for Brook Trout. Bag Limit of one trout. No bait."
                            }
                        } ],
                        "route_mi" : 7.3289999999999997,
                        "species" : [ { "id" : 3,
                            "isStocked" : true,
                            "name" : "Brown Trout"
                        },
                            { "id" : 1,
                                "isStocked" : true,
                                "name" : "Rainbow Trout"
                            }
                        ],
                        "trout_flag" : null
                    },
                    { "gid" : 1206,
                        "kittle_nam" : "Whitewater River, M. Branch",
                        "kittle_nbr" : "M-031-019",
                        "length_mi" : 15.266999999999999,
                        "objectid" : 25276,
                        "publicLand" : [ { "start" : 0.920023782419502,
                            "stop" : 0.963052839538557,
                            "type" : "TBD"
                        },
                            { "start" : 0.806076516858105,
                                "stop" : 0.833568951123104,
                                "type" : "TBD"
                            },
                            { "start" : 0.76728693042136997,
                                "stop" : 0.804614655560693,
                                "type" : "TBD"
                            },
                            { "start" : 0.636575371032398,
                                "stop" : 0.765727895179351,
                                "type" : "TBD"
                            },
                            { "start" : 0.616902616732788,
                                "stop" : 0.619197954190447,
                                "type" : "TBD"
                            },
                            { "start" : 0.604358823247984,
                                "stop" : 0.612389220114193,
                                "type" : "TBD"
                            },
                            { "start" : 0.582592403166764,
                                "stop" : 0.598306931495141,
                                "type" : "TBD"
                            },
                            { "start" : 0.562436996894628,
                                "stop" : 0.565912486803188,
                                "type" : "TBD"
                            },
                            { "start" : 0.55058530025004004,
                                "stop" : 0.557271455881936,
                                "type" : "TBD"
                            },
                            { "start" : 0.549072931137105,
                                "stop" : 0.549867916017356,
                                "type" : "TBD"
                            },
                            { "start" : 0.48201042523575,
                                "stop" : 0.505728178850189,
                                "type" : "TBD"
                            },
                            { "start" : 0.514567064048554,
                                "stop" : 0.523078200415421,
                                "type" : "TBD"
                            },
                            { "start" : 0.0991098173964256,
                                "stop" : 0.476867059241967,
                                "type" : "TBD"
                            },
                            { "start" : 0.0442845490240932,
                                "stop" : 0.044621152830341,
                                "type" : "TBD"
                            },
                            { "start" : 0.0437567114514477,
                                "stop" : 0.0442149246521024,
                                "type" : "TBD"
                            },
                            { "start" : 0.027123452815154,
                                "stop" : 0.0423395635523543,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 10.686834249828381,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : true,
                            "isHarvestRestriction" : true,
                            "officialText" : "Catch & Release for All Trout (Artificial Lures or Flies Only)",
                            "summary" : "No harvest. No bait."
                        },
                            "start" : 0.360758756374338,
                            "stop" : 0.974718953097878
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 4,
                                "id" : 4,
                                "is_angling_restriction" : true,
                                "is_harvest_restriction" : true,
                                "official_text" : "Catch & Release for All Trout (Artificial Lures or Flies Only)",
                                "short_description" : "No harvest. No bait."
                            }
                        } ],
                        "route_mi" : 15.266999999999999,
                        "species" : [ { "id" : 1,
                            "isStocked" : true,
                            "name" : "Rainbow Trout"
                        } ],
                        "trout_flag" : null
                    },
                    { "gid" : 1207,
                        "kittle_nam" : "Whitewater River, N. Branch",
                        "kittle_nbr" : "M-031-018",
                        "length_mi" : 19.004000000000001,
                        "objectid" : 25387,
                        "publicLand" : [ { "start" : 0.794879032990206,
                            "stop" : 0.860789720747527,
                            "type" : "TBD"
                        },
                            { "start" : 0.65422659548871998,
                                "stop" : 0.693234492305478,
                                "type" : "TBD"
                            },
                            { "start" : 0.480719808966752,
                                "stop" : 0.516321493728119,
                                "type" : "TBD"
                            },
                            { "start" : 0.52801552181139,
                                "stop" : 0.578807346051271,
                                "type" : "TBD"
                            },
                            { "start" : 0.583998687264953,
                                "stop" : 0.589285363711707,
                                "type" : "TBD"
                            },
                            { "start" : 0.579569250219601,
                                "stop" : 0.581935314233952,
                                "type" : "TBD"
                            },
                            { "start" : 0.235873065657368,
                                "stop" : 0.472660191311724,
                                "type" : "TBD"
                            },
                            { "start" : 0.146052435235402,
                                "stop" : 0.23348595988456999,
                                "type" : "TBD"
                            },
                            { "start" : 0.119051769048682,
                                "stop" : 0.144028681061382,
                                "type" : "TBD"
                            },
                            { "start" : 0.0383473261254412,
                                "stop" : 0.10306392702069,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 11.647152463699182,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : true,
                            "isHarvestRestriction" : true,
                            "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                            "summary" : "12\" to 16\" no harvest. No bait."
                        },
                            "start" : 0.580463025003428,
                            "stop" : 0.791742540416828
                        },
                            { "restriction" : { "isAnglingRestriction" : true,
                                "isHarvestRestriction" : true,
                                "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "summary" : "12\" to 16\" no harvest. No bait."
                            },
                                "start" : 0.541768758916486,
                                "stop" : 0.580057981955063
                            },
                            { "restriction" : { "isAnglingRestriction" : true,
                                "isHarvestRestriction" : true,
                                "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "summary" : "12\" to 16\" no harvest. No bait."
                            },
                                "start" : 0.230726380466779,
                                "stop" : 0.536382985766739
                            },
                            { "restriction" : { "isAnglingRestriction" : true,
                                "isHarvestRestriction" : true,
                                "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "summary" : "12\" to 16\" no harvest. No bait."
                            },
                                "start" : 0.135455439418972,
                                "stop" : 0.228361509447575
                            }
                        ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 2,
                                "id" : 2,
                                "is_angling_restriction" : true,
                                "is_harvest_restriction" : true,
                                "official_text" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "short_description" : "12\" to 16\" no harvest. No bait."
                            }
                        } ],
                        "route_mi" : 19.004000000000001,
                        "species" : [ { "id" : 2,
                            "isStocked" : false,
                            "name" : "Brook Trout"
                        },
                            { "id" : 1,
                                "isStocked" : true,
                                "name" : "Rainbow Trout"
                            }
                        ],
                        "trout_flag" : null
                    },
                    { "gid" : 272,
                        "kittle_nam" : "Kedron Creek",
                        "kittle_nbr" : "M-009-033-008-004",
                        "length_mi" : 1.119,
                        "objectid" : 25239,
                        "publicLand" : [ { "start" : 0.231765049862647,
                            "stop" : 0.569621518837829,
                            "type" : "TBD"
                        } ],
                        "public_route_length" : 0.37806138878322859,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : true,
                            "isHarvestRestriction" : true,
                            "officialText" : "Catch & Release for All Trout (Artificial Lures or Flies Only)",
                            "summary" : "No harvest. No bait."
                        },
                            "start" : 0.0,
                            "stop" : 1.0
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 4,
                                "id" : 4,
                                "is_angling_restriction" : true,
                                "is_harvest_restriction" : true,
                                "official_text" : "Catch & Release for All Trout (Artificial Lures or Flies Only)",
                                "short_description" : "No harvest. No bait."
                            }
                        } ],
                        "route_mi" : 1.119,
                        "species" : [ { "id" : 2,
                            "isStocked" : true,
                            "name" : "Brook Trout"
                        } ],
                        "trout_flag" : null
                    },
                    { "gid" : 5642,
                        "kittle_nam" : "W. Indian Creek",
                        "kittle_nbr" : "M-034-017",
                        "length_mi" : 0.052999999999999999,
                        "objectid" : 25310,
                        "publicLand" : [ { "start" : 0.144474079155596,
                            "stop" : 0.249595150536868,
                            "type" : "TBD"
                        },
                            { "start" : 0.411843973434417,
                                "stop" : 0.741605855457837,
                                "type" : "TBD"
                            },
                            { "start" : 0.742173548578622,
                                "stop" : 0.969145062134694,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 0.035078286748920488,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : false,
                            "isHarvestRestriction" : true,
                            "officialText" : "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                            "summary" : "12\" to 16\" no harvest."
                        },
                            "start" : 0.483342075737928,
                            "stop" : 0.985970163861386
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 3,
                                "id" : 7,
                                "is_angling_restriction" : false,
                                "is_harvest_restriction" : true,
                                "official_text" : "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                                "short_description" : "12\" to 16\" no harvest."
                            }
                        } ],
                        "route_mi" : 0.052999999999999999,
                        "species" : [ { "id" : 3,
                            "isStocked" : false,
                            "name" : "Brown Trout"
                        } ],
                        "trout_flag" : null
                    },
                    { "gid" : 1153,
                        "kittle_nam" : "Forestville Creek",
                        "kittle_nbr" : "M-009-025-009",
                        "length_mi" : 0.877,
                        "objectid" : 25262,
                        "publicLand" : [ { "start" : 0.0,
                            "stop" : 0.743891945669883,
                            "type" : "TBD"
                        } ],
                        "public_route_length" : 0.65239323635248747,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : false,
                            "isHarvestRestriction" : true,
                            "officialText" : "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                            "summary" : "12\" to 16\" no harvest."
                        },
                            "start" : 0.0,
                            "stop" : 0.740912470206055
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 3,
                                "id" : 7,
                                "is_angling_restriction" : false,
                                "is_harvest_restriction" : true,
                                "official_text" : "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                                "short_description" : "12\" to 16\" no harvest."
                            }
                        } ],
                        "route_mi" : 0.877,
                        "species" : [ { "id" : 3,
                            "isStocked" : true,
                            "name" : "Brown Trout"
                        } ],
                        "trout_flag" : null
                    },
                    { "gid" : 4058,
                        "kittle_nam" : "Canfield Creek",
                        "kittle_nbr" : "M-009-025-010",
                        "length_mi" : 0.46000000000000002,
                        "objectid" : 25260,
                        "publicLand" : [ { "start" : 0.688542411275628,
                            "stop" : 1.0,
                            "type" : "TBD"
                        },
                            { "start" : 0.0,
                                "stop" : 0.684171709738285,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 0.45798947729282224,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : true,
                            "isHarvestRestriction" : true,
                            "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                            "summary" : "12\" to 16\" no harvest. No bait."
                        },
                            "start" : 0.0,
                            "stop" : 0.761162302368143
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 2,
                                "id" : 2,
                                "is_angling_restriction" : true,
                                "is_harvest_restriction" : true,
                                "official_text" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "short_description" : "12\" to 16\" no harvest. No bait."
                            }
                        } ],
                        "route_mi" : 0.46000000000000002,
                        "species" : [ { "id" : 3,
                            "isStocked" : false,
                            "name" : "Brown Trout"
                        },
                            { "id" : 1,
                                "isStocked" : true,
                                "name" : "Rainbow Trout"
                            }
                        ],
                        "trout_flag" : null
                    },
                    { "gid" : 1619,
                        "kittle_nam" : "Wisel Creek",
                        "kittle_nbr" : "M-009-010-010",
                        "length_mi" : 9.0009999999999994,
                        "objectid" : 25377,
                        "publicLand" : [ { "start" : 0.877826573620318,
                            "stop" : 0.956376644895166,
                            "type" : "TBD"
                        },
                            { "start" : 0.103234781248698,
                                "stop" : 0.139611548937737,
                                "type" : "TBD"
                            },
                            { "start" : 0.179282757041328,
                                "stop" : 0.288412408428748,
                                "type" : "TBD"
                            },
                            { "start" : 0.871931135429302,
                                "stop" : 0.875898294091253,
                                "type" : "TBD"
                            },
                            { "start" : 0.0,
                                "stop" : 0.0666527707715301,
                                "type" : "TBD"
                            },
                            { "start" : 0.0951443861640202,
                                "stop" : 0.0962097535335198,
                                "type" : "TBD"
                            },
                            { "start" : 0.0782076892462647,
                                "stop" : 0.078771324708787,
                                "type" : "TBD"
                            },
                            { "start" : 0.0728380554247354,
                                "stop" : 0.0765974647879229,
                                "type" : "TBD"
                            },
                            { "start" : 0.0823654167473327,
                                "stop" : 0.0850489429982269,
                                "type" : "TBD"
                            },
                            { "start" : 0.296440365996183,
                                "stop" : 0.40403269939204001,
                                "type" : "TBD"
                            },
                            { "start" : 0.461751213812183,
                                "stop" : 0.524855431893955,
                                "type" : "TBD"
                            },
                            { "start" : 0.52873371836931005,
                                "stop" : 0.699135890229504,
                                "type" : "TBD"
                            },
                            { "start" : 0.703990006472248,
                                "stop" : 0.706285242939954,
                                "type" : "TBD"
                            },
                            { "start" : 0.408721670397513,
                                "stop" : 0.413944340191509,
                                "type" : "TBD"
                            },
                            { "start" : 0.414265656025613,
                                "stop" : 0.415246086000277,
                                "type" : "TBD"
                            },
                            { "start" : 0.416936983037762,
                                "stop" : 0.417977749289304,
                                "type" : "TBD"
                            },
                            { "start" : 0.418357506063995,
                                "stop" : 0.422585654152812,
                                "type" : "TBD"
                            },
                            { "start" : 0.423401806155851,
                                "stop" : 0.423704263472261,
                                "type" : "TBD"
                            },
                            { "start" : 0.424815304703572,
                                "stop" : 0.42547186671594001,
                                "type" : "TBD"
                            },
                            { "start" : 0.427401476024848,
                                "stop" : 0.428623553416543,
                                "type" : "TBD"
                            },
                            { "start" : 0.428934032307183,
                                "stop" : 0.430539542865255,
                                "type" : "TBD"
                            },
                            { "start" : 0.44745311164691998,
                                "stop" : 0.448678936898378,
                                "type" : "TBD"
                            },
                            { "start" : 0.433366813397465,
                                "stop" : 0.434002899221959,
                                "type" : "TBD"
                            },
                            { "start" : 0.434295928271873,
                                "stop" : 0.436860591342623,
                                "type" : "TBD"
                            },
                            { "start" : 0.442979503293841,
                                "stop" : 0.445001987149229,
                                "type" : "TBD"
                            },
                            { "start" : 0.437275802810761,
                                "stop" : 0.439936104942508,
                                "type" : "TBD"
                            },
                            { "start" : 0.440100366222835,
                                "stop" : 0.441084618542702,
                                "type" : "TBD"
                            },
                            { "start" : 0.441630647552863,
                                "stop" : 0.442382917001972,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 6.0508936387625045,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : false,
                            "isHarvestRestriction" : true,
                            "officialText" : "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                            "summary" : "12\" to 16\" no harvest."
                        },
                            "start" : 0.0,
                            "stop" : 0.993736423623395
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 3,
                                "id" : 7,
                                "is_angling_restriction" : false,
                                "is_harvest_restriction" : true,
                                "official_text" : "12 to 16 Inch Protected Slot for All Trout (Bait Allowed)",
                                "short_description" : "12\" to 16\" no harvest."
                            }
                        } ],
                        "route_mi" : 9.0009999999999994,
                        "species" : [ { "id" : 3,
                            "isStocked" : true,
                            "name" : "Brown Trout"
                        },
                            { "id" : 1,
                                "isStocked" : true,
                                "name" : "Rainbow Trout"
                            }
                        ],
                        "trout_flag" : null
                    },
                    { "gid" : 1157,
                        "kittle_nam" : "Camp Creek",
                        "kittle_nbr" : "M-009-025-003",
                        "length_mi" : 0.56200000000000006,
                        "objectid" : 25272,
                        "publicLand" : [ { "start" : 0.00257341344518059,
                            "stop" : 0.0116629226921006,
                            "type" : "TBD"
                        },
                            { "start" : 0.0120447893012718,
                                "stop" : 0.203179704793355,
                                "type" : "TBD"
                            },
                            { "start" : 0.26121733802301,
                                "stop" : 0.291697015217451,
                                "type" : "TBD"
                            },
                            { "start" : 0.298741858078277,
                                "stop" : 0.301451411966826,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 0.13117847457196019,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : true,
                            "isHarvestRestriction" : true,
                            "officialText" : "Catch & Release for All Trout (Artificial Lures or Flies Only)",
                            "summary" : "No harvest. No bait."
                        },
                            "start" : 0.0996354092012657,
                            "stop" : 0.309563085478619
                        },
                            { "restriction" : { "isAnglingRestriction" : true,
                                "isHarvestRestriction" : true,
                                "officialText" : "Catch & Release for All Trout (Artificial Lures or Flies Only)",
                                "summary" : "No harvest. No bait."
                            },
                                "start" : 0.0694806533183947,
                                "stop" : 0.0994161719251231
                            }
                        ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 4,
                                "id" : 4,
                                "is_angling_restriction" : true,
                                "is_harvest_restriction" : true,
                                "official_text" : "Catch & Release for All Trout (Artificial Lures or Flies Only)",
                                "short_description" : "No harvest. No bait."
                            }
                        } ],
                        "route_mi" : 0.56200000000000006,
                        "species" : [ { "id" : 1,
                            "isStocked" : true,
                            "name" : "Rainbow Trout"
                        } ],
                        "trout_flag" : null
                    },
                    { "gid" : 5456,
                        "kittle_nam" : "Gribben Creek",
                        "kittle_nbr" : "M-009-024",
                        "length_mi" : 3.968,
                        "objectid" : 25286,
                        "publicLand" : [ { "start" : 0.0546254956569968,
                            "stop" : 0.347986360790397,
                            "type" : "TBD"
                        },
                            { "start" : 0.601975477465929,
                                "stop" : 0.913297791214329,
                                "type" : "TBD"
                            },
                            { "start" : 0.406757150146087,
                                "stop" : 0.593410969957511,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 3.1400252108147133,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : true,
                            "isHarvestRestriction" : true,
                            "officialText" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                            "summary" : "12\" to 16\" no harvest. No bait."
                        },
                            "start" : 0.0,
                            "stop" : 0.925759880415715
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 2,
                                "id" : 2,
                                "is_angling_restriction" : true,
                                "is_harvest_restriction" : true,
                                "official_text" : "12 to 16 Inch Protected Slot for All Trout (Artificial Lures or Flies Only)",
                                "short_description" : "12\" to 16\" no harvest. No bait."
                            }
                        } ],
                        "route_mi" : 3.968,
                        "species" : [ { "id" : 2,
                            "isStocked" : true,
                            "name" : "Brook Trout"
                        } ],
                        "trout_flag" : null
                    },
                    { "gid" : 1571,
                        "kittle_nam" : "Stoney Brook",
                        "kittle_nbr" : "M-096-001-006",
                        "length_mi" : 17.460999999999999,
                        "objectid" : 25988,
                        "publicLand" : [ { "start" : 0.761645749151497,
                            "stop" : 0.794305892059909,
                            "type" : "TBD"
                        },
                            { "start" : 0.343229290144422,
                                "stop" : 0.366210520098819,
                                "type" : "TBD"
                            },
                            { "start" : 0.0875788639903971,
                                "stop" : 0.146651263676639,
                                "type" : "TBD"
                            },
                            { "start" : 0.030789128440946,
                                "stop" : 0.0793383430430792,
                                "type" : "TBD"
                            },
                            { "start" : 0.0,
                                "stop" : 0.0067619237124303,
                                "type" : "TBD"
                            }
                        ],
                        "public_route_length" : 2.9688049685895708,
                        "restrictions" : [ { "RestrictionSections" : [ { "restriction" : { "isAnglingRestriction" : false,
                            "isHarvestRestriction" : true,
                            "officialText" : "Catch & Release for Brook Trout ",
                            "summary" : "No harvest for Brook Trout."
                        },
                            "start" : 0.00389456903960864,
                            "stop" : 0.146796094762935
                        } ],
                            "RestrictionType" : { "dnr_trout_map_new_reg" : 6,
                                "id" : 6,
                                "is_angling_restriction" : false,
                                "is_harvest_restriction" : true,
                                "official_text" : "Catch & Release for Brook Trout ",
                                "short_description" : "No harvest for Brook Trout."
                            }
                        } ],
                        "route_mi" : 17.460999999999999,
                        "species" : [ { "id" : 2,
                            "isStocked" : true,
                            "name" : "Brook Trout"
                        } ],
                        "trout_flag" : null
                    }
                ];

            var streamLines = streams.map(function(streamJson) {
                var streamLine = new StreamLine();
                streamLine.fromJSON(streamJson);
                return streamLine;
            });


            deferred.resolve(streamLines);

            return deferred.promise;
        };

        return new StreamCollectionService();
    });
});
/**
 * Created by MBP on 3/12/14.
 */

define('ViewModels/StreamRatio',['require'],function(require) {
    
    var StreamRatio = function() {
        this.init();
    };

    var proto = StreamRatio.prototype;

    proto.init = function(streamLength, publicAccessibleLength) {
        this.streamLength = 0.0;
        this.publicAccessibleLength = 0.0;

        if (typeof streamLength === 'number') {
            this.streamLength = streamLength;
        }

        if (typeof publicAccessibleLength === 'number') {
            this.publicAccessibleLength = publicAccessibleLength;
        }
    };

    proto.fromJSON = function(jsonString) {
        throw new Error('not implemented yet');
    };

    proto.destroy = function() {
        throw new Error('not implemented yet');
    };
    
    return StreamRatio;
});
define('modules/main/index',['require','./MainModule','./services/StreamCollectionService','ViewModels/LinearReferenceSegment','ViewModels/PublicLand','ViewModels/PublicLandSegment','ViewModels/Restriction','ViewModels/RestrictionSegment','ViewModels/Species/Species','ViewModels/Species/RainbowTrout','ViewModels/Species/BrookTrout','ViewModels/Species/BrownTrout','ViewModels/Species/SpeciesConfiguration','ViewModels/Species/SpeciesSummary','ViewModels/Stream','ViewModels/StreamLine','ViewModels/StreamRatio'],function(require) {
    
    require('./MainModule');
    require('./services/StreamCollectionService');
    require('ViewModels/LinearReferenceSegment');
    require('ViewModels/PublicLand');
    require('ViewModels/PublicLandSegment');
    require('ViewModels/Restriction');
    require('ViewModels/RestrictionSegment');
    require('ViewModels/Species/Species');
    require('ViewModels/Species/RainbowTrout');
    require('ViewModels/Species/BrookTrout');
    require('ViewModels/Species/BrownTrout');
    require('ViewModels/Species/SpeciesConfiguration');
    require('ViewModels/Species/SpeciesSummary');
    require('ViewModels/Stream');
    require('ViewModels/StreamLine');
    require('ViewModels/StreamRatio');
});

/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
require([
    'angular',
    'modules/main/index'
], function (ng) {
    

    ng.bootstrap(document, ['app']);
});

define("bootstrap", function(){});

