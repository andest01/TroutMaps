/**
 * Created by MBP on 3/12/14.
 */

define(function(require) {
    'use strict';
    var LinearReferenceSegment = function(start, stop) {
        //this.initialize(start, stop);
    };

    var proto = LinearReferenceSegment.prototype;

    proto.init = function(start, stop) {
        if (typeof start !== 'number' || start < 0 || start > 1) {
            throw new Error('start must be a number between 0 and 1');
        }

        if (typeof stop !== 'number' || stop < 0 || stop > 1) {
            throw new Error('start must be a number between 0 and 1');
        }

        this.start = start;
        this.stop = stop;
    };

    return LinearReferenceSegment;
});