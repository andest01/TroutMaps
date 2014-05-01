/**
 * Created by MBP on 3/12/14.
 */

define(function(require) {
    'use strict';

    var Base = require('ViewModels/LinearReferenceSegment');


    var RestrictionSegment = function(start, stop, restrictionType) {
        Base.prototype.constructor.call(this, start, stop);
        Base.prototype.init.call(this, start, stop);
        this.restrictionType = restrictionType;
    };

    RestrictionSegment.prototype = new Base();

    RestrictionSegment.prototype.getRestrictionType = function() {
        return this.restrictionType;
    };

    RestrictionSegment.prototype.setRestrictionType = function(restrictionType) {
        this.restrictionType = restrictionType;
    };

    RestrictionSegment.prototype.fromJSON = function(json) {

    };

    return RestrictionSegment;
});