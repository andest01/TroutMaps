define(function(require) {
    'use strict';

    require('./HomeController');
    require('./HomeModule');
    require('./Restriction/RestrictionDirective');
    require('./Species/SpeciesDirective');
    require('./StreamLine/StreamLineDirective');
    require('./StreamLine/StreamLineViewModel');
    require('../../../ViewModels/LinearReferenceSegment');
    require('./StreamLine/RestrictionSummaryViewModel');
});
