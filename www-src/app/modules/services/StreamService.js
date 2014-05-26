define(function(require) {
    'use strict';

    var servicesModule = require('./ServicesModule');
    require('./BaseService');

    var StreamLine = require('ViewModels/StreamLine');


    servicesModule.factory('StreamCollectionService',
        ['$http',
            '$q',
            'BaseApiService',
            function($http, $q, BaseApiService) {
                function StreamCollectionService() {
                    BaseApiService.call(this);
                }

                var proto = StreamCollectionService.prototype = Object.create(BaseApiService.prototype);

                proto.getStreams = function() {
                    var key = 'getStreams';
                    if (this.cache.get(key)) {
                        return this.cache.get(key);
                    }

                    var getPromise = this.callApi({}, 'streams/Streams.js', this.cache)
                        .then(function(response) {
                            if (!response) {
                                return $q.reject(response);
                            }

                            var streamLines = response.map(function(streamJson) {
                                var streamLine = new StreamLine();
                                streamLine.fromJSON(streamJson);
                                return streamLine;
                            });

                            return streamLines;
                        });

                    this.cache.put(key, getPromise);
                    return getPromise;
                };

                return new StreamCollectionService();
            }
        ]
    );
});