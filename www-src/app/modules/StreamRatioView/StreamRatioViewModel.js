define(function(require) {
    'use strict';

    var StreamRatioViewModel = function() {
        this.totalLength = 0;
        this.publicLandLength = 0;
    };

    var proto = StreamRatioViewModel.prototype;

    proto.init = function(totalLength, publicLandLength) {
        if (totalLength == null || publicLandLength < 0) {
            throw new Error('totalLength cannot be null or less than 0');
        }

        if (publicLandLength == null || publicLandLength < 0) {
            throw new Error('publicLength cannot be null or less than 0');
        }

        if (publicLandLength > totalLength) {
            throw new Error('publicLength cannot be longer than total length');
        }

        this.totalLength = totalLength;
        this.publicLandLength = publicLandLength;

        var computeRadiusFromLength = function(length) {
            var area = Math.sqrt(length / Math.PI);
            return area;
        }

        this.waterRadius = computeRadiusFromLength(this.totalLength);
        this.publicLandRadius = computeRadiusFromLength(this.publicLandLength);
    };

    return StreamRatioViewModel;
});