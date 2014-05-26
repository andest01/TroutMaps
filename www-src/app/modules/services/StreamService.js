define(/** @lends Zoom */function(require) {
    'use strict';

    // load our main module.
    var mainModule = require('./ServicesModule');
    require('./BaseApiService');

    var StreamLine = require('ViewModels/StreamLine');


    mainModule.factory('StreamCollectionService',
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

                    var getPromise = this.callApi({}, 'GetAnalyses/', this.cache)
                        .then(function(response) {
                            if (!response || !response.list) {
                                return $q.reject(response);
                            }

                            // return new AnalysisCollection(response.list);
                            debugger;
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