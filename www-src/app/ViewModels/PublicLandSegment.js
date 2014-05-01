/**
 * Created by MBP on 3/12/14.
 */

define(function(require) {
    'use strict';

    var Base = require('ViewModels/LinearReferenceSegment');

    var PublicLandSegment = function(start, stop, landType) {
        Base.prototype.constructor.call(this, start, stop);
        Base.prototype.init.call(this, start, stop);
        this.landType = landType;
    };

    PublicLandSegment.prototype = new Base();

    PublicLandSegment.prototype.getLandType = function() {
        return this.landType;
    };
    
    PublicLandSegment.prototype.setLandType = function(landType) {
        this.landType = landType;
    };

    return PublicLandSegment;
});