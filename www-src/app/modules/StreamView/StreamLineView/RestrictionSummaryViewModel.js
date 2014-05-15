define(function(require) {
    'use strict';

    var Base = require('ViewModels/LinearReferenceSegment');
    var streamLineViewModel = require('ViewModels/StreamLineViewModel');

    var RestrictionSummaryViewModel = function (restrictionSegments) {
        this.init(restrictionSegments);
    };

    RestrictionSummaryViewModel.prototype.init = function(restrictionSegments) {
        this.restrictions = [];
        for (var i = 0; i < restrictionSegments.length; i++) {
            var r = restrictionSegments[i];
            var restrictionViewModel = {
                restrictionSections: r.restrictionSections.map(function(t) {
                    return new streamLineViewModel(t);
                }),
                cssClass: i == 0 ? 'stream-line_restriction' : 'stream-line_restriction_secondary',
                text: r.officialText
            };

            this.restrictions.push(restrictionViewModel);
        }
    };

    return RestrictionSummaryViewModel;
});