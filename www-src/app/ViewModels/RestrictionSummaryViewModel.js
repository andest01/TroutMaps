define(function(require) {
    'use strict';

//    var Base = require('ViewModels/LinearReferenceSegment');
    var streamLineViewModel = require('./StreamLineViewModel');

    var RestrictionSummaryViewModel = function (restrictionSegments) {
        this.init(restrictionSegments);
    };

    RestrictionSummaryViewModel.prototype.init = function(restrictionSegments) {
        this.restrictions = [];
        for (var i = 0; i < restrictionSegments.length; i++) {
            var r = restrictionSegments[i];
            var restrictionViewModel = {
                restrictionSections: r.restrictionSections.map(function(t) {
                    return this.mapRestrictionSegment(t);
                }.bind(this)),
                cssClass: i == 0 ? 'stream-line_restriction' : 'stream-line_restriction_secondary',
                text: r.officialText
            };

            this.restrictions.push(restrictionViewModel);
        }
    };

    RestrictionSummaryViewModel.prototype.mapRestrictionSegment = function(section) {
        return new streamLineViewModel(section);
    };

    return RestrictionSummaryViewModel;
});