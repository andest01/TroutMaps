define(function(require) {
    'use strict';
    require('./MainModule');
    require('modules/map/MapModule');
    
    require('modules/services/StreamService');
    require('modules/services/SpecialRegulationsService');
    require('modules/services/EasementService');
});
