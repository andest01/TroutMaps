define(function(require) {
    'use strict';

    var homeModule = require('../StreamSummaryModule');
    var template = require('text!./StreamDetailsShortTemplate.html');
    // var viewModel = require('./StreamRatioViewModel');

    homeModule.directive('streamDetailsShort', function () {
        var exports = {
            restrict: 'A',

            template: template,

            scope: {
                stream: '='
            },

            link: function(scope, element, attributes) {
                
            }
        };

        return exports;
    });
});