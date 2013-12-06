/**
 * @fileOverview Util module definition
 */
 
define(function(require) {
    'use strict';
    
    var $ = require('jquery');
    
    /**
     * Static class containing commonly-used utility functions
     *
     * @class Util
     * @static
     * @constructor
     */
    var Util = {};
    
    /**
    * Logs information to the browser console (if console is available)
    *
    * @method log
    * @static
    * @param {dynamic} Dynamic number of arguments to log
    */
    Util.log = function() {
        if (!SETTINGS.LOG_CONSOLE) {
            return;
        }
        
        if (typeof console !== 'undefined') {
            if (arguments.length === 1) { // Handle trivial case for just one argument
                console.log(arguments[0]);
            } else {
                if (console.log.apply) {  // Multi-argument logging
                    console.log.apply(console, arguments);
                } else { // Multi-argument logging not supported in IE, so we log an array instead
                    var argsArray = Array.prototype.slice.call(arguments, 0);
                    console.log(argsArray);
                }
            }
        }
    };
    
    /**
    * Converts an object to its string representation
    * Useful for logging in browsers that don't automatically make this conversion (eg, IE)
    *
    * @method objectToString
    * @static
    * @param object {object} The object to convert
    * @param sep {string} The separator character to use between each field (optional)
    * @returns {string} The string representation of object
    */
    Util.objectToString = function(object, sep) {
        if (sep == null) {
            sep = ', ';
        }
        
        var str = '';
        for (var i in object) {
            if (object.hasOwnProperty(i) && typeof(object[i]) !== 'function') {
                if (str !== '') {
                    str += sep;
                }
                str += i + ': ' + object[i];
            }
        }
        
        return str;
    };
    
    return Util;
});