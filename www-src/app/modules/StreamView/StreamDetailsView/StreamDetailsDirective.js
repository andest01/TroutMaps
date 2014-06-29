define(function(require) {
    'use strict';

    var homeModule = require('../StreamSummaryModule');
    var template = require('text!./StreamDetailsTemplate.html');
    // var viewModel = require('./StreamRatioViewModel');

    homeModule.directive('streamDetails', ['$rootScope', function ($rootScope) {
        var exports = {
            restrict: 'A',

            template: template,

            link: function(scope, element, attributes) {
                scope.selectStream = function(stream) {
                    console.log(stream);
                    $rootScope.$emit('streamSelectionChanged', stream);
                };
            }
        };

        return exports;
    }]);
});