define(/** @lends SelectableGeometryDirective */function(require) {
    'use strict';
    var streamSummaryModule = require('../StreamSummaryModule');
    var htmlTemplate = require('text!./RestrictionTemplate.html');
    var RestrictionSummaryViewModel = require('../../../ViewModels/RestrictionSummaryViewModel');

    streamSummaryModule.directive('restrictionLegend', function() {

        var exports = {
            restrict: 'A',
            template: htmlTemplate,
            link: function(scope, element, attrs) {
                scope.restriction = scope.stream.restrictionSegments;
                scope.restrictionViewModel = new RestrictionSummaryViewModel(scope.restriction);

            }
        };

        return exports;
    });
});