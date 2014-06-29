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
    function HomeController($log, $scope, $rootScope, _StreamCollectionService_, _EasementService, _SpecialRegulationsService) {
        StreamCollectionService = _StreamCollectionService_;
        // $log.info('application is running!');
        this.setupScope($scope, $rootScope);

        _EasementService.getPublicLand()
            .then(function(data) {
                // console.log(data);
            });

        _SpecialRegulationsService.getSpecialRegulations()
            .then(function(data) {
                // console.log(data);
            });
    }

    HomeController.$inject = [
        '$log',
        '$scope',
        '$rootScope',
        'StreamCollectionService',
        'EasementService',
        'SpecialRegulationsService'
    ];

    HomeController.prototype.setupScope = function($scope, $rootScope) {
        var gettingStreams = StreamCollectionService.getStreams();

        gettingStreams.then(function (streams) {
                $scope.streams = streams;
            });

        $scope.filterStreamByName = function(stream) {
            // console.log(stream);
            var re = new RegExp($scope.search.name, 'i');
            return !$scope.search.name || re.test(stream.streamName);
            return true;
        };

        $rootScope.$watch('streamSelectionChanged', function(newStream, oldStream) {
            console.log('home controller noticed a new stream!', newStream);
        });

        $scope.search = {
            name: ''
        }
    };

    homeModule.controller(
        'HomeController',
        HomeController
    );

});
