define(function(require) {
    'use strict';

    var streamSummaryModule = require('../StreamSummaryModule');
    var template = require('text!./SpeciesTemplate.html');

    streamSummaryModule.directive('speciesSummary', function () {
        var exports = {
            restrict: 'A',

            template: template,

            scope: {
                species: '='
            },

            link: function(scope, element, attributes) {

            }
        };

        return exports;
    });
});