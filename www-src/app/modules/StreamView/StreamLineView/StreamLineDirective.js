define(function(require) {
    'use strict';

    var homeModule = require('../StreamSummaryModule');
    var template = require('text!./StreamLineTemplate.html');
    var viewModel = require('ViewModels/StreamLineViewModel');
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