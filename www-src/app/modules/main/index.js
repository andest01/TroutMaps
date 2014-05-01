define(function(require) {
    'use strict';
    require('./MainModule');
    require('./services/StreamCollectionService');
    require('ViewModels/LinearReferenceSegment');
    require('ViewModels/PublicLand');
    require('ViewModels/PublicLandSegment');
    require('ViewModels/Restriction');
    require('ViewModels/RestrictionSegment');
    require('ViewModels/Species/Species');
    require('ViewModels/Species/RainbowTrout');
    require('ViewModels/Species/BrookTrout');
    require('ViewModels/Species/BrownTrout');
    require('ViewModels/Species/SpeciesConfiguration');
    require('ViewModels/Species/SpeciesSummary');
    require('ViewModels/Stream');
    require('ViewModels/StreamLine');
    require('ViewModels/StreamRatio');
});
