define(/** @lends SelectableGeometryDirective */function(require) {
    'use strict';
    var homeModule = require('../HomeModule');
//    require('./services/ProjectionService');
    var htmlTemplate = require('text!./RestrictionTemplate.html');
    var linearReferenceViewModel = require('ViewModels/LinearReferenceSegment');
    var restrictionSummaryViewModel = require('../StreamLine/RestrictionSummaryViewModel');

    homeModule.directive('restrictionLegend', function() {

        var exports = {
            restrict: "A",
            scope: {
                restriction: '='
            },
            template: htmlTemplate,
            link: function(scope, element, attrs) {
//                console.log('hit the restriction directive');
//                console.log(scope.restriction);
                scope.restrictionViewModel = new restrictionSummaryViewModel(scope.restriction);
            }
        };

        return exports;

    });

});