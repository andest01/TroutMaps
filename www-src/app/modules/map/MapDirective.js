define(function(require) {
    'use strict';

    var mapModule = require('./MapModule');
    var template = require('text!./MapTemplate.html');

    mapModule.directive('mapView', ['$http', '$routeParams', '$route', function ($http, $routeParams, $route) {
        var exports = {
            restrict: 'A',

            template: template,

            link: function(scope, element, attributes) {
                scope.$on('$routeChangeStart', function(event, next, current) {
                    console.log('next: ', next);
                });
            }
        };

        return exports;
    }]);
});