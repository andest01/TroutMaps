define(/** @lends SelectableGeometryDirective */function(require) {
    'use strict';
    var homeModule = require('../HomeModule');
//    require('./services/ProjectionService');
    var htmlTemplate = require('text!./StreamLineTemplate.html');

    homeModule.directive('streamLine', function() {

        var exports = {
            restrict: "A",
            scope: {
                stream: '='
            },
            template: htmlTemplate,
            link: function(scope, element, attrs) {
//                console.log('hit the stream line directive');
//                console.log(scope);
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
