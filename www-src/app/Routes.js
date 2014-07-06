/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(function (require) {
    'use strict';

    // load the application class
    // 'modules/main/index'
    var Application = require('app/modules/main/MainModule');
    require('angular-route');
    // require('app/services/AnalysisApiService');
    // require('app/services/SearchApiService');

    // Make Routes available to the application module
    var AppRoutes = require('app/providers/AppRoutesProvider');
    AppRoutes.injectToModule(Application);

    // configure the application using the $routeProvider
    Application.config(['$routeProvider', 'AppRoutesProvider', function ($routeProvider, AppRoutesProvider) {

        var ROUTES = AppRoutesProvider.$get().ROUTES;

        $routeProvider
            .when(ROUTES.HOME.PATH, { // Login route
                template: ROUTES.HOME.TEMPLATE,
                controller: ROUTES.HOME.CONTROLLER
            })
            .when(ROUTES.WORKSPACE.PATH, { // Workspace route
                template: ROUTES.WORKSPACE.TEMPLATE,
                controller: ROUTES.WORKSPACE.CONTROLLER
            })
            .when(ROUTES.CREATE_ANALYSIS.PATH, { // Create Analysis route
                template: ROUTES.CREATE_ANALYSIS.TEMPLATE,
                controller: ROUTES.CREATE_ANALYSIS.CONTROLLER
            })
            .when(ROUTES.ANALYSIS.PATH, { // Analysis route
                template: ROUTES.ANALYSIS.TEMPLATE,
                controller: ROUTES.ANALYSIS.CONTROLLER
            })
            .when(ROUTES.ADMIN_CENTER.PATH, { // Admin route
                template: ROUTES.ADMIN_CENTER.TEMPLATE,
                controller: ROUTES.ADMIN_CENTER.CONTROLLER
            })
            .when(ROUTES.WORKSPACES.PATH, { // Workspaces route
                template: ROUTES.WORKSPACES.TEMPLATE,
                controller: ROUTES.WORKSPACES.CONTROLLER
            })
            .otherwise({ // Unknown / default route
                redirectTo: ROUTES.HOME.PATH
            });
    }])

    .run(
        [
            '$rootScope',
            '$location',
            '$route',
            'AppRoutes',
            'AuthApiService',
            'AnalysisApiService',
            'SearchApiService',
            function($rootScope, $location, $route, AppRoutes, AuthApiService, AnalysisApiService, SearchApiService) {
                // register listener to watch route changes
                $rootScope.$on('$routeChangeSuccess', function(event) {
                    var nextPath = $route.current.originalPath;
                    var nextRoute = $route.routes[nextPath];
                    if (!nextRoute) {
                        return;
                    }
                    var controller = nextRoute.controller;

                    // todo: this should really be provided via a service, not $rootScope
                    if (!AuthApiService.hasIdentity()) {
                        // no logged user, we should be going to #login
                        if (controller !== 'LoginController') {
                            event.preventDefault();
                            $location.path(AppRoutes.ROUTES.HOME.PATH);

                        }
                    } else {
                        if (routeSuccessCallbacks[controller]) {
                            routeSuccessCallbacks[controller](event);
                        }
                    }
                });

                var routeSuccessCallbacks = {
                    AnalysisController: function() {
                        var currentRoute = $route.current;
                        var params = currentRoute.params;
                        AnalysisApiService.getAnalyses()
                            .then(function(analysisCollection) {
                                $rootScope.currentAnalysis = analysisCollection.get(params.id);
                                // request search model, service appends to the analysis model
                                SearchApiService.getSearch($rootScope.currentAnalysis);
                                // request analysis summary, service appends to the analysis model
                                AnalysisApiService.getAnalysisSummary($rootScope.currentAnalysis);
                            });
                    },
                    AdminCenterController: function() {
                        var currentRoute = $route.current;
                        var params = currentRoute.params;
                        if (!params.page) {
                            params.page = 'attributes';
                        }
                    }
                };
            }
        ]
    );
});
