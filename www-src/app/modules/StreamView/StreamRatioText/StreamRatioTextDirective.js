define(function(require) {
    'use strict';

    var homeModule = require('../StreamSummaryModule');
    var template = require('text!./StreamRatioTextTemplate.html');

    homeModule.directive('streamRatioText', function () {
        var exports = {
            restrict: 'A',

            template: template,
            link: function(scope, element, attributes) {
                // console.log('hit ratio text directive');
                var streamLength = parseFloat(scope.stream.streamLength);
                var publicLandLength = parseFloat(scope.stream.publiclyAccessibleLength);
                
                scope.streamLength = streamLength;
                scope.publicLandLength = publicLandLength;
            }
        };

        return exports;
    });
});