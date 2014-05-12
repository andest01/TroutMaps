define(function(require) {
    'use strict';

    var homeModule = require('../HomeModule');
    var template = require('text!./StreamLineTemplate.html');

    homeModule.directive('streamLine', function () {
        var exports = {
            restrict: 'A',

            template: template,

            scope: {
                stream: '='
            },

            link: function(scope, element, attributes) {

            }
        };

        return exports;
    });
});