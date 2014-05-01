define(function(require) {
    'use strict';
    require('./MainModule');
    require('./services/StreamCollectionService');
    require('ViewModels/LinearReferenceSegment');
    require('ViewModels/PublicLand');
    require('ViewModels/PublicLandSegment');
    require('ViewModels/Restriction');
    require('ViewModels/RestrictionSegment');
    require('ViewModels/Species');
    require('ViewModels/Stream');
    require('ViewModels/StreamLine');
    require('ViewModels/StreamRatio');
});
