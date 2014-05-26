define(function(require) {
    'use strict';

    var mapModule = require('./MapModule');
    var template = require('text!./MapTemplate.html');

    mapModule.directive('speciesSummary', function () {
        var exports = {
            restrict: 'A',

            template: template,

            link: function(scope, element, attributes) {
                // scope.species = scope.stream.speciesSummary;
            }
        };

        return exports;
    });
});