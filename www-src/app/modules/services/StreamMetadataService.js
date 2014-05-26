define(function(require) {
    'use strict';

    // load our services module.
    var mainModule = require('modules/main/MainModule');

    var StreamLine = require('ViewModels/StreamLine');
    var fakeStreamData = require('./Streams');


    mainModule.factory('StreamCollectionService', function($http, $q) {
        var StreamCollectionService = function() {

        };

        StreamCollectionService.prototype.getStreams = function() {
            var deferred = $q.defer();
            var streams = fakeStreamData;
            var streamLines = streams.map(function(streamJson) {
                var streamLine = new StreamLine();
                streamLine.fromJSON(streamJson);
                return streamLine;
            });


            deferred.resolve(streamLines);
            return deferred.promise;
        };

        return new StreamCollectionService();
    });
});