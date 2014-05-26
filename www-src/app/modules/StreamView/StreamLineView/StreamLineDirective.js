define(function(require) {
    'use strict';

    var homeModule = require('../StreamSummaryModule');
    var template = require('text!./StreamLineTemplate.html');
    var ViewModel = require('ViewModels/StreamLineViewModel');
    var LinearReferenceViewModel = require('ViewModels/LinearReferenceSegment');
    var RestrictionSummaryViewModel = require('../../../ViewModels/RestrictionSummaryViewModel');
    var d3 = require('d3');

    homeModule.directive('streamLine', ['$q', function ($q) {
        var exports = {
            restrict: 'A',

            template: template,

            link: function(scope, element, attributes) {
                scope.stage = {
                    width: 292
                };

                var streamBase = new LinearReferenceViewModel();
                streamBase.init(1.0, 0.0);
                scope.streamBase = new ViewModel(streamBase);

                scope.publicSegments = scope.stream.publicAccessSegments.map(function(segment) {
                    return new ViewModel(segment);
                });

                

                

                scope.streamLine = d3.select(element[0])
                    .append('svg')
                    .attr('class', 'stream-line')
                    .attr('width', scope.stage.width)
                    .attr('height', 16)
                    .attr('xmlns', 'http://www.w3.org/2000/svg');

                scope.streamLine.publicLand = scope.streamLine.append('g')
                    .attr('class', 'stream-line_public-land');

                scope.streamLine.publicLand.selectAll('rect')
                    .data(scope.publicSegments).enter()
                    .append('rect')
                    .attr('x', function(d) {
                        return d.xOffset * scope.stage.width;
                    })
                    .attr('y', 0)
                    .attr('width', function(d) {
                        return d.width * scope.stage.width;
                    })
                    .attr('height', 11)
                    .attr('rx', 4)
                    .attr('ry', 4)
                    .attr('class', 'public-land');

                scope.streamLine.stream = scope.streamLine.append('g')
                    .attr('class', 'stream-line_stream')
                    .append('rect')
                    .attr('x', 0)
                    .attr('y', 3)
                    .attr('height', 5)
                    .attr('width', scope.stage.width);


                var restrictions = new RestrictionSummaryViewModel(scope.stream.restrictionSegments);
                
                scope.streamLine.restrictions = scope.streamLine.append('g')
                    .attr('class', 'stream-line_restriction')
                    .selectAll('g').data(restrictions.restrictions).enter()
                    .append('g')
                    .attr('class', function(d) { return d.cssClass;})
                    .selectAll('rect').data(function(d) {
                        return d.restrictionSections;
                    }).enter()
                    .append('rect')
                    .attr('x', function(d) { return d.xOffset * scope.stage.width;})
                    .attr('y', 3)
                    .attr('width', function(d) { return d.width * scope.stage.width;})
                    .attr('height', 5)
                    .attr('class', 'restriction');


                var createTickMarks = function(streamLength) {
                    var clampedLength = Math.floor(length);
                    var tickMarks = [];
                    if (clampedLength < 1) {
                        tickMarks.push({
                                xOffset: 0,
                                width: 1,
                                height: 3,
                                yOffset: 7
                            });

                        return tickMarks;
                    }

                    var tickWidth = scope.stage.width / streamLength;
                    for (var i = 0; i <= clampedLength; i++) {
                        tickMarks.push({
                                xOffset: i * tickWidth,
                                width: 1.5,   
                                height: 4,
                                yOffset: 8
                            }
                        );
                    }
                    
                    return tickMarks;
                };

                var length = parseFloat(scope.stream.streamLength);
                // boost the first tickmark!
                
                var tickMarks = createTickMarks(length);
                var firstMark = tickMarks[0];

                firstMark.width = 1;
                firstMark.height = 3;
                scope.streamLine.tickMarks = scope.streamLine
                    .append('g')
                    .attr('class', 'stream-line_grid-lines')
                    .selectAll('rect').data(tickMarks).enter()
                    .append('rect')
                    .attr('x', function(d) { return d.xOffset;})
                    .attr('y', function(d) { return d.yOffset;})
                    .attr('width', function(d) {return d.width;})
                    .attr('height', function(d) { return d.height;})
                    .attr('class', 'tick');
            }
        };

        return exports;
    }]);
});