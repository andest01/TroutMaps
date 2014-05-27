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
    function HomeController($log, $scope, _StreamCollectionService_, _EasementService, _SpecialRegulationsService) {
        StreamCollectionService = _StreamCollectionService_;
        // $log.info('application is running!');
        this.setupScope($scope);

        _EasementService.getPublicLand()
            .then(function(data) {
                console.log(data);
            });

        _SpecialRegulationsService.getSpecialRegulations()
            .then(function(data) {
                console.log(data);
            });
    }

    HomeController.$inject = [
        '$log',
        '$scope',
        'StreamCollectionService',
        'EasementService',
        'SpecialRegulationsService'
    ];

    HomeController.prototype.setupScope = function($scope) {
        console.log('enter');
        var gettingStreams = StreamCollectionService.getStreams();
        var gettingPublicData = 

        console.log(gettingStreams);

        gettingStreams.then(function (streams) {
                $scope.streams = streams;
            });

        $scope.selectStream = function(stream) {
            console.log(stream);
            $scope.emit('streamSelectionChanged', stream);
        };

        $scope.filterStreamByName = function(stream) {
            // console.log(stream);
            var re = new RegExp($scope.search.name, 'i');
            return !$scope.search.name || re.test(stream.streamName);
            return true;
        };

        $scope.search = {
            name: ''
        }
    };

    homeModule.controller(
        'HomeController',
        HomeController
    );

});
