require.config({
    baseUrl: 'app',
    // alias paths for library modules
    paths: {
        angular: '../vendor/angular/angular',
        'angular-route': '../vendor/angular-route/angular-route',
        'angular-bindonce': '../vendor/angular-bindonce/bindonce',
        text: '../vendor/requirejs-text/text',
        'd3': '../vendor/d3/d3.min',
        'topojson': '../vendor/topojson/topojson',
        'leaflet': '../vendor/leaflet/dist/leaflet'
    },

    // shim settings for files that are not AMD compliant
    // this tells require.js how to handle non-modular files
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-bindonce': {
            deps: ['angular']
        },
        'leaflet': {
            exports: 'L'
        }
    }
});
