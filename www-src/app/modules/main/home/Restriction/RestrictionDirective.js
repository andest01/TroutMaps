define(/** @lends SelectableGeometryDirective */function(require) {
    'use strict';
    var homeModule = require('../HomeModule');
//    require('./services/ProjectionService');
    var htmlTemplate = require('text!./RestrictionTemplate.html');

    homeModule.directive('restrictionLegend', function() {

        var exports = {
            restrict: "A",
            scope: {
                restriction: '='
            },
            template: htmlTemplate,
            link: function(scope, element, attrs) {
                console.log('hit the restriction directive');
                console.log(scope.restriction);
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