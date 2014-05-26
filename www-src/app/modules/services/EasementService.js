define(function(require) {
    'use strict';

    var servicesModule = require('./ServicesModule');
    require('./BaseService');

    servicesModule.factory('EasementService',
        ['$http',
            '$q',
            'BaseApiService',
            function($http, $q, BaseApiService) {
                function EasementService() {
                    BaseApiService.call(this);
                }

                var proto = EasementService.prototype = Object.create(BaseApiService.prototype);

                proto.getStreams = function() {
                    var key = 'getMnEasements';
                    if (this.cache.get(key)) {
                        return this.cache.get(key);
                    }

                    var getPromise = this.callApi({}, 'publicLand/MnEasements.json', this.cache)
                        .then(function(response) {
                            if (!response) {
                                return $q.reject(response);
                            }

                            return response;
                        });

                    this.cache.put(key, getPromise);
                    return getPromise;
                };

                return new EasementService();
            }
        ]
    );
});