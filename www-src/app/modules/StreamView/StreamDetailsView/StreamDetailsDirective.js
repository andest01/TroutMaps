define(function(require) {
    'use strict';

    var homeModule = require('../StreamSummaryModule');
    var template = require('text!./StreamDetailsTemplate.html');
    // var viewModel = require('./StreamRatioViewModel');

    homeModule.directive('streamDetails', function () {
        var exports = {
            restrict: 'A',

            template: template,

            link: function(scope, element, attributes) {
                // console.log('hit stream details directive');
                // var streamLength = parseFloat(scope.stream.streamLength);
                // var publicLandLength = parseFloat(scope.stream.publiclyAccessibleLength);
                // var vm = new viewModel();
                // vm.init(streamLength, publicLandLength);
                // scope.streamRatio = vm;
                console.log(scope);
            }
        };

        return exports;
    });
});