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

    proto.fromJSON = function(json) {
        // how can i defer to the functionality of the base type Stream's fromJSON functionality?
        this.setStreamId(json.gid);
        this.setStreamName(json.kittle_nam);
        this.setStreamLength(json.length_mi);
        this.setPublicAccessibleLength(json.public_route_length)

        if (json.species != null) {
//            var species = json.species.map(function(speciesJson) {
//                return new Species(speciesJson.id, speciesJson.name, speciesJson.isStocked);
//            });
            var speciesJSON = json.species;
            this.speciesSummary.fromJSON(speciesJSON);
//            this.setSpecies(species);
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
    };

    return StreamLine;
});