define(function(require) {
    'use strict';

    var homeModule = require('./HomeModule');
    var template = require('text!./SpeciesTemplate');

    homeModule.directive('analysisMapBoard', function () {
        var exports = {
            restrict: 'A',

            template: template,

            scope: true,

            link: function(scope, element, attributes) {

            },

            compile: function () {

            }
        };

        return exports;
    });

    });