define(function(require) {
    'use strict';

    var homeModule = require('../StreamSummaryModule');
    var template = require('text!./StreamLineIconTemplate.html');
    var viewModel = require('ViewModels/StreamLineViewModel');
    var LinearReferenceViewModel = require('ViewModels/LinearReferenceSegment');
    var restrictionSummaryViewModel = require('../../../ViewModels/RestrictionSummaryViewModel');
    var LengthIcon = require('./StreamLineLengthIconViewModel');

    homeModule.directive('streamLineIcon', 
        function () {
        var exports = {
            restrict: 'A',

            template: template,

            scope: {
                stream: '&'
            },

            link: function(scope, element, attributes) {
                scope.stage = {
                    width: 20
                };

                scope.percentiles = {
                    smallest: 0.8,
                    small: 4.0,
                    medium: 8.0,
                    large: 15.0,
                    largest: 10000.0
                };



                var length = parseFloat(scope.stream.streamLength);
                var lengthIcon = new LengthIcon();
                lengthIcon.init(length, scope.percentiles);
                scope.lengthIcon = lengthIcon;

                scope.lengthIconClasses = scope.lengthIcon.stars.map(function(val) {
                    return val === true ? 'stream-ratio_stream' : 'stream-ratio_background';
                });

                scope.publicSegments = scope.stream.publicAccessSegments.map(function(segment) {
                    return new viewModel(segment);
                });
                
                
                scope.$on('$destroy', function(){console.log(arguments);});
            }
        };

        return exports;
    });
});
