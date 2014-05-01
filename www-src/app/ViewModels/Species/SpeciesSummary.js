define(function(require) {
    'use strict';
    var config = require('ViewModels/Species/SpeciesConfiguration');
    var brookTrout = require('ViewModels/Species/BrookTrout');
    var brownTrout = require('ViewModels/Species/BrownTrout');
    var rainbowTrout = require('ViewModels/Species/RainbowTrout');

    var SpeciesSummary = function() {
        this.init();
    };

    var proto = SpeciesSummary.prototype;

    proto.init = function() {
        this.rainbowTrout = new rainbowTrout(false);
        this.brownTrout = new brownTrout(false);
        this.brookTrout = new brookTrout(false);
    };

    proto.fromJSON = function(json) {
        if (json == null || json.length === 0) {
            return;
        }
        for (var i = 0; i < json.length; i++) {
            var s = json[i];
            debugger;
            if (s.id === config.rainbowTroutId) {
                this.rainbowTrout = new rainbowTrout(s.isStocked);
                this.rainbowTrout.isPresent = true;
            }

            else if (s.id === config.brookTroutId) {
                this.brookTrout = new brookTrout(s.isStocked);
                this.brookTrout.isPresent = true;
            }

            else if (s.id === config.brownTroutId) {
                this.brownTrout = new brownTrout(s.isStocked);
                this.brownTrout.isPresent = true;
            }

        }
//        var species = json.species.map(function(speciesJson) {
//            return new Species(speciesJson.id, speciesJson.name, speciesJson.isStocked);
//        });
    };

    return SpeciesSummary;
});