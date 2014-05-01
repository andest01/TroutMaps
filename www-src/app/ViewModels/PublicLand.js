/**
 * Created by MBP on 3/12/14.
 */

define(function(require) {
    'use strict';

    var PublicLand = function() {
        this.shortText = '';
        this.longText = '';
        this.additionalInfo = '';
    };

    PublicLand.prototype.getShortText = function() {
        return this.shortText;
    };

    PublicLand.prototype.setShortText = function(shortText) {
        this.shortText = shortText;
    };

    PublicLand.prototype.getLongText = function() {
        return this.longText;
    };

    PublicLand.prototype.setLongText = function(longText) {
        this.longText = longText;
    };

    PublicLand.prototype.getAdditionalInfo = function() {
        return this.additionalInfo;
    };

    PublicLand.prototype.setAdditionalInfo = function(additionalInfo) {
        this.additionalInfo = additionalInfo;
    };

    PublicLand.prototype.fromJSON = function(json) {
        this.setShortText(json);
    };

    return PublicLand;
});