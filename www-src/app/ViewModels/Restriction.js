/**
 * Created by MBP on 3/12/14.
 */

define(function(require) {
    'use strict';
    var RestrictionSection = require('ViewModels/RestrictionSegment');

    var Restriction = function() {
        this.summary = '';
        this.officialText = '';
        this.isAnglingRestriction = false;
        this.isHarvestRestriction = false;
        this.restrictionSections = [];
    };

    var proto = Restriction.prototype;

    Restriction.prototype.getIsHarvestingRestriction = function() {
        return this.isHarvestRestriction;
    };
    
    Restriction.prototype.setIsHarvestingRestriction = function(isHarvestingRestriction) {
        this.isHarvestRestriction = isHarvestingRestriction;
    };
    
    Restriction.prototype.getIsAnglingRestriction = function() {
        return this.isAnglingRestriction;
    };
    
    Restriction.prototype.setIsAnglingRestriction = function(isAnglingRestriction) {
        this.isAnglingRestriction = isAnglingRestriction;
    };
    
    Restriction.prototype.getSummary = function() {
        return this.summary;
    };
    
    Restriction.prototype.setSummary = function(summary) {
        this.summary = summary;
    };

    Restriction.prototype.getOfficialText = function() {
        return this.officialText;
    };
    
    Restriction.prototype.setOfficialText = function(officialText) {
        this.officialText = officialText;
    };

    Restriction.prototype.setRestrictionSections = function(restrictionSections) {
        this.restrictionSections = restrictionSections;
    };

    Restriction.prototype.getRestrictionSections = function() {
        return this.restrictionSections;
    };

    Restriction.prototype.fromJSON = function(json) {
        var restrictionType = json.RestrictionType;
        this.setSummary(restrictionType.short_description);
        this.setIsAnglingRestriction(restrictionType.is_angling_restriction);
        this.setIsHarvestingRestriction(restrictionType.is_harvest_restriction);
        this.setOfficialText(restrictionType.official_text);

        var sections = json.RestrictionSections;
        if (sections == null || sections.length === 0) {
            this.setRestrictionSections([]);
            return;
        }

        var restrictionSections = sections.map(function(s) {
            var restrictionSection = new RestrictionSection(s.start, s.stop, restrictionType);
            return restrictionSection;
        });

        this.setRestrictionSections(restrictionSections);
    };

    return Restriction;
});