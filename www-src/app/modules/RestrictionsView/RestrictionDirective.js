define(/** @lends SelectableGeometryDirective */function(require) {
    'use strict';
    var restrictionModule = require('./RestrictionModule');
    var htmlTemplate = require('text!./RestrictionTemplate.html');
    var restrictionSummaryViewModel = require('../../ViewModels/RestrictionSummaryViewModel');

    restrictionModule.directive('restrictionLegend', function() {

        var exports = {
            restrict: "A",
            scope: {
                restriction: '='
            },
            template: htmlTemplate,
            link: function(scope, element, attrs) {
                scope.restrictionViewModel = new restrictionSummaryViewModel(scope.restriction);

            }
        };

        return exports;
    });

});