define(function(require) {
    'use strict';

    var StreamLineLengthIconView = function() {
        this.totalLength = 0;
        this.stars = [];
        this.settings = {};
    };

    var proto = StreamLineLengthIconView.prototype;

    proto.init = function(totalLength, settings) {
        if (totalLength == null || totalLength < 0) {
            throw new Error('totalLength cannot be null or less than 0');
        }

        this.totalLength = totalLength;

        if (settings == null) {
            this.settings = this.getDefaultSettings();
        }

        else {
            this.settings = settings;
        }

        this.setStars(settings);
    };

    proto.setStars = function(settings) {
        this.stars = [];
        this.stars.push(this.totalLength > settings.smallest);
        this.stars.push(this.totalLength > settings.small);
        this.stars.push(this.totalLength > settings.medium);
        this.stars.push(this.totalLength > settings.large);




        //         this.stars.push(this.totalLength > settings.smallest && this.totalLength < settings.small);
        // this.stars.push(this.totalLength > settings.small && this.totalLength < settings.medium);
        // this.stars.push(this.totalLength > settings.medium && this.totalLength < settings.large);
        // this.stars.push(this.totalLength > settings.large && this.totalLength < settings.largest);

    };

    proto.getDefaultSettings = function() {
        var percentiles = {
                smallest: 1.5,
                small: 4.0,
                medium: 8.0,
                large: 15.0,
                largest: 10000.0
            };
        return percentiles;
    };

    return StreamLineLengthIconView;
});