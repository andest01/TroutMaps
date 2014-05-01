/**
 * @fileOverview Stream is a base class for a Stream View.
 */

define(function(require) {
    'use strict';
    var Base = require('ViewModels/Stream');
    var Species = require('ViewModels/Species');
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
        this.publiclAccessibleLength = 0;
        this.restrictionSegments = [];
        this.publicAccessSegments = [];
        this.species = [];
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

    proto.getSpecies = function() {
        return this.species;
    };

    proto.setSpecies = function(species) {
        this.species = species;
    };

    proto.fromJSON = function(json) {
        // how can i defer to the functionality of the base type Stream's fromJSON functionality?
        this.setStreamId(json.gid);
        this.setStreamName(json.kittle_nam);
        this.setStreamLength(json.length_mi);

        if (json.species != null) {
            var species = json.species.map(function(speciesJson) {
                return new Species(speciesJson.id, speciesJson.name, speciesJson.isStocked);
            });
            this.setSpecies(species);
        }

        if (json.restrictions != null) {
            var restrictions = json.restrictions.map(function(restrictionLocationJson) {
                var restriction = new Restriction();
                restriction.fromJSON(restrictionLocationJson);
//                var start = restrictionLocationJson.start;
//                var stop = restrictionLocationJson.stop;
//                var restrictionSegment = new RestrictionSegment(start, stop, restriction);

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
                var publicLandSegment = new PublicLandSegment(start, stop, publicLand);
                return publicLandSegment;
            });
            this.setPublicAccessSegments(publicLandSegments);
        }
    };

    return StreamLine;
});