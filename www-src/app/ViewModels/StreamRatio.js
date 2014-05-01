/**
 * Created by MBP on 3/12/14.
 */

define(function(require) {
    'use strict';
    var StreamRatio = function() {
        this.init();
    };

    var proto = StreamRatio.prototype;

    proto.init = function(streamLength, publicAccessibleLength) {
        this.streamLength = 0.0;
        this.publicAccessibleLength = 0.0;

        if (typeof streamLength === 'number') {
            this.streamLength = streamLength;
        }

        if (typeof publicAccessibleLength === 'number') {
            this.publicAccessibleLength = publicAccessibleLength;
        }
    };

    proto.fromJSON = function(jsonString) {
        throw new Error('not implemented yet');
    };

    proto.destroy = function() {
        throw new Error('not implemented yet');
    };
    
    return StreamRatio;
});