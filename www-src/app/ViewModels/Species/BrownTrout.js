
define(function(require) {
    'use strict';
    var config = require('ViewModels/Species/SpeciesConfiguration');
    var Base = require('ViewModels/Species/Species');

    var BrownTrout = function (isStocked) {
        Base.prototype.constructor.call(this);
        this.init(config.brownTroutId, config.brownClassName, isStocked);
    };

    BrownTrout.prototype = new Base();
    var proto = BrownTrout.prototype;

    return BrownTrout;
});