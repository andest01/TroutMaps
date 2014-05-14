define(function(require) {
    'use strict';

    var speciesModule = require('./SpeciesModule');
    var template = require('text!./SpeciesTemplate.html');

    speciesModule.directive('speciesSummary', function () {
        var exports = {
            restrict: 'A',

            template: template,

            scope: {
                species: '='
            },

            link: function(scope, element, attributes) {
//                console.log('hit the species summary directive');
//                console.log(scope.speciesSummary);
            }
        };

        return exports;
    });
});