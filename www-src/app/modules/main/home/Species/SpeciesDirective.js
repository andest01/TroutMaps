define(/** @lends SelectableGeometryDirective */function(require) {
    'use strict';
    var homeModule = require('../HomeModule');
//    require('./services/ProjectionService');
    var htmlTemplate = require('text!./SpeciesTemplate.html');

    homeModule.directive('speciesSummary', function() {

        var exports = {
            restrict: "A",
            scope: {
                species: '='
            },
            template: htmlTemplate,
            link: function(scope, element, attrs) {
                console.log('hit the species directive');
                console.log(scope.species);
//                function onMouseDown(event) {
//
//                };

//                element
//                    .on('mousedown', onMouseDown)
//                    .on('click', onClick);

//                scope
//                    .$on('$destroy', function() {
//                        element.off();
//                    });
            }
        };

        return exports;

    });

});