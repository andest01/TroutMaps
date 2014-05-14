define(function(require) {
    'use strict';

    var ng = require('angular');

    // don't include your own index. this is only reserving a space for the
    // species module
//    require('./index');

    return ng.module('species', []);
});