/**
 * @fileOverview App module definition
 */

define(function(require) {
    'use strict';
    
    // List all scripts that need to be loaded before everything else. Suitable for browser polyfills, etc.
    require('polyfills/requestAnimationFrame');
    require('polyfills/function.bind');
    
    var $ = require('jquery');
    var Util = require('lib/Util');
    var SampleView = require('views/SampleView');

    /**
     * Initial application setup. Runs once upon every page load.
     *
     * @class App
     * @constructor
     */
    var App = function() {

    };
    
    /**
     * Initializes the application and kicks off loading of prerequisites.
     *
     * @method init
     * @private
     */
    App.prototype.init = function() {
        // Create your views here
        // Pass in a jQuery reference to DOM elements that need functionality attached to them
        var sampleView = new SampleView($('.js-sample'));
        
        Util.log('Success! The JavaScript boilerplate has been initialized!');
    };

    return App;
});