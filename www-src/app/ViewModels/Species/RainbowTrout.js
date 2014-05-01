
define(function(require) {
    'use strict';
    var config = require('ViewModels/Species/SpeciesConfiguration');
    var Base = require('ViewModels/Species/Species');

    var RainbowTrout = function (isStocked) {
        if (isStocked)
        Base.prototype.constructor.call(this);
        this.init(config.rainbowTroutId, config.rainbowClassName, isStocked);
    };

    RainbowTrout.prototype = new Base();
    var proto = RainbowTrout.prototype;

    return RainbowTrout;
});