
define(function(require) {
    'use strict';
    var config = require('ViewModels/Species/SpeciesConfiguration');
    var Base = require('ViewModels/Species/Species');

    var BrookTrout = function (isStocked) {
        Base.prototype.constructor.call(this);
        this.init(config.brookTroutId, config.brookClassName, isStocked);
    };

    BrookTrout.prototype = new Base();
    var proto = BrookTrout.prototype;

    return BrookTrout;
});