define(function(require) {
    'use strict';

    var homeModule = require('./HomeModule');
    var StreamCollectionService;
    /**
     * Home Module Controller
     *
     * ### Index Page
     *
     * The HomeController is responsible for responding to the '/' route, as defined in HomeModule.
     */

    /**
     * @constructor
     * @param {$log} Angular's wrapper for window.console.log
     */
    function HomeController($log, $scope, _StreamCollectionService_) {
        debugger;
        StreamCollectionService = _StreamCollectionService_;
        $log.info('application is running!');
        this.setupScope($scope);
    }

    HomeController.$inject = [
        '$log',
        '$scope',
        'StreamCollectionService'
    ];

    HomeController.prototype.setupScope = function($scope) {
        StreamCollectionService.getStreams()
            .then(function (streams) {
                $scope.streams = streams;
            });
    };

    homeModule.controller(
        'HomeController', HomeController


    );

});
