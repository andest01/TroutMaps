define(function(require) {
    'use strict';

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