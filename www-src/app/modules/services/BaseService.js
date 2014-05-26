define(function(require) {
    'use strict';

    // var sessionStorage = window.sessionStorage;
    var ServiceModule = require('./servicesModule');

    ServiceModule.factory('BaseApiService', function($rootScope, $cacheFactory, $http) {
        var globalCache = $cacheFactory('trout');

        function BaseApiService() {
            this.cache = globalCache;
        }

        BaseApiService.prototype = {

            resetCache: function() {
                globalCache.removeAll();
            },

            callApi: function(data, endpoint, cache) {
                cache = false;

                var config = {
                    url: BaseApiService.API_BASE_PATH + endpoint,
                    params: data,
                    cache: cache,
                    method: 'GET'
                };

                return $http(config)
                    .then(function(response) {
                        if (response && response.exceptionType) {
                            console.log(
                                'SERVER EXCEPTION: ',
                                endpoint,
                                response.exceptionType,
                                response.exceptionMessage
                            );
                        }

                        return response.data;
                    });
            }
        };

        /**
         * URL prefix for API endpoints
         * @type {String}
         * @constant
         */
        BaseApiService.API_BASE_PATH = '/';

        return BaseApiService;
    });
});