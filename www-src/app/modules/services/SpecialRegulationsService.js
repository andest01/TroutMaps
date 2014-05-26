define(function(require) {
    'use strict';

    var servicesModule = require('./ServicesModule');
    require('./BaseService');

    servicesModule.factory('SpecialRegulationsService',
        ['$http',
            '$q',
            'BaseApiService',
            function($http, $q, BaseApiService) {
                function SpecialRegulationsService() {
                    BaseApiService.call(this);
                }

                var proto = SpecialRegulationsService.prototype = Object.create(BaseApiService.prototype);

                proto.getStreams = function() {
                    var key = 'specialRegulations';
                    if (this.cache.get(key)) {
                        return this.cache.get(key);
                    }

                    var getPromise = this.callApi({}, 'SpecialRegulations/SpecialRegulations.json', this.cache)
                        .then(function(response) {
                            if (!response) {
                                return $q.reject(response);
                            }

                            return response;
                        });

                    this.cache.put(key, getPromise);
                    return getPromise;
                };

                return new SpecialRegulationsService();
            }
        ]
    );
});