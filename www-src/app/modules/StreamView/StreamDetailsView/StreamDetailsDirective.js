define(function(require) {
    'use strict';

    var homeModule = require('../StreamSummaryModule');
    var template = require('text!./StreamDetailsTemplate.html');
    // var viewModel = require('./StreamRatioViewModel');

    homeModule.directive('streamDetails', ['$rootScope', '$location', function ($rootScope, $location) {
        var exports = {
            restrict: 'A',

            template: template,

            link: function(scope, element, attributes) {
                scope.selectStream = function(stream) {
                    $rootScope.$broadcast('streamSelectionChanged', stream);
                };
            }
        };

        return exports;
    }]);
});