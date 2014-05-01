/**
 * @fileOverview Stream is a base class for a Stream View.
 */

define(function(require) {
    'use strict';

    var Stream = function() {
        this.streamName = '';
        this.streamLength = 0;
        this.publiclyAccessibleLength = 0;
        this.streamId = -1;
    };

    var proto = Stream.prototype;

    proto.init = function() {

    };

    proto.getStreamId = function() {
        return this.streamId;
    };

    proto.setStreamId = function(id) {
        this.streamId = id;
    };

    proto.getStreamName = function() {
        return this.streamName;
    };

    proto.setStreamName = function(name) {
        this.streamName = name;
    };

    proto.getStreamLength = function() {
        return this.streamLength;
    };

    proto.setStreamLength = function(length) {
        this.streamLength = length.toFixed(1);
    };

    proto.getPublicAccessibleLength = function() {
        return this.publiclyAccessibleLength;
    };

    proto.setPublicAccessibleLength = function(length) {
        this.publiclyAccessibleLength = length.toFixed(1);
    };

    proto.clone = function() {
        throw new Error('not implemented yet');
    };

    proto.copy = function() {
        throw new Error('not implemented yet');
    };

    proto.toJSON = function() {
        throw new Error('not implemented yet');
    };

    proto.fromJSON = function() {
        throw new Error('not implemented yet');
    };

    proto.destroy = function() {
        throw new Error('not implemented yet');
    };

    return Stream;
});