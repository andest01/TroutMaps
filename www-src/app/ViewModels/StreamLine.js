/**
 * @fileOverview Stream is a base class for a Stream View.
 */

define(function(require) {
    'use strict';
    var Base = require('ViewModels/Stream');
    var Species = require('ViewModels/Species/Species');
    var SpeciesSummary = require('ViewModels/Species/SpeciesSummary');
    var LinearReferenceSegment = require('ViewModels/LinearReferenceSegment');

    var RestrictionSegment = require('ViewModels/RestrictionSegment');
    var Restriction = require('ViewModels/Restriction');

    var PublicLandSegment = require('ViewModels/PublicLandSegment');
    var PublicLand = require('ViewModels/PublicLand');




    var StreamLine = function() {
        Base.prototype.constructor.call(this);
        this.init();
    };

    StreamLine.prototype = new Base();
    var proto = StreamLine.prototype;

    proto.init = function() {
        this.streamName = '';
        this.streamLength = 0;
        this.restrictionSegments = [];
        this.publicAccessSegments = [];
        this.speciesSummary = new SpeciesSummary();
        this.counties = [];
    };

    proto.getRestrictionSegment = function() {
        return this.restrictionSegments;
    };

    proto.setRestrictionSegments = function(segments) {
        this.restrictionSegments = segments;
    };

    proto.getPublicAccessSegments = function() {
        return this.publicAccessSegments;
    };

    proto.setPublicAccessSegments = function(segments) {
        this.publicAccessSegments = segments;
    };

    proto.getSpeciesSummary = function() {
        return this.speciesSummary;
    };

    proto.setSpeciesSummary = function(speciesSummary) {
        this.speciesSummary = speciesSummary;
    };

    var countriesToText = function(countriesArray) {
        if (countriesArray.length === 1) {
            return countriesArray[0].name;
        }

        var temp = '';
        var separator = ', ';

        for (var i = 0; i < countriesArray.length; i++) {
            temp += countriesArray[i].name + separator;
        }

        var result = temp.slice(0, -separator.length) + '';
        return result;
    };

    proto.fromJSON = function(json) {
        // how can i defer to the functionality of the base type Stream's fromJSON functionality?
        this.setStreamId(json.gid);
        this.setStreamName(json.kittle_nam);
        this.setStreamLength(json.length_mi);
        this.setPublicAccessibleLength(json.public_route_length)

        if (json.species != null) {
            var speciesJSON = json.species;
            this.speciesSummary.fromJSON(speciesJSON);
        }

        if (json.restrictions != null) {
            var restrictions = json.restrictions.map(function(restrictionLocationJson) {
                var restriction = new Restriction();
                restriction.fromJSON(restrictionLocationJson);
                return restriction;
            });
            this.setRestrictionSegments(restrictions);
        }

        if (json.publicLand != null) {
            var publicLandSegments = json.publicLand.map(function(publicLandSegmentJson) {
                var publicLand = new PublicLand();
                publicLand.fromJSON(publicLandSegmentJson.type);
                var start = publicLandSegmentJson.start;
                var stop = publicLandSegmentJson.stop;
                return new PublicLandSegment(start, stop, publicLand);
            });
            this.setPublicAccessSegments(publicLandSegments);
        }

        if (json.Counties != null && json.Counties.length > 0) {
            this.counties = json.Counties;
            this.countiesText = countriesToText(this.counties);
        }
    };

    return StreamLine;
});