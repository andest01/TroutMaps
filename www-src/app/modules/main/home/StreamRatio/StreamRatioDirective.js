define(function(require) {
    'use strict';

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