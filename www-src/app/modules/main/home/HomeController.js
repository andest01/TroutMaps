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
//                console.log($scope.streams);
            });

        $scope.selectStream = function(stream) {
            console.log(stream);
            // emit?
            $scope.emit('streamSelectionChanged', stream);
        };
    };

    homeModule.controller(
        'HomeController',
        HomeController
    );

});
