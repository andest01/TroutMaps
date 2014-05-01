/**
 * Created by MBP on 3/12/14.
 */

define(function(require) {
    'use strict';
    var Species = function(id, name, isStocked) {
        if (typeof name !== 'string' || name == null || name.length === 0) {
            throw new Error('name cannot be null');
        }

        this.init(id, name, isStocked);
    };

    var proto = Species.prototype;

    proto.init = function(id, name, isStocked) {
        this.id = id;
        this.name = name;
        this.isStocked = isStocked;
    };

    proto.getId = function() {
        return this.id;
    };

    proto.setId = function(id) {
        this.id = id;
    };

    proto.getName = function() {
        return this.name;
    };

    proto.setName = function(name) {
        if (typeof name !== 'string' || name == null || name.length === 0) {
            throw new Error('name cannot be null');
        }

        this.name = name;
    };

    proto.getIsStocked = function() {
        return this.isStocked;
    };

    proto.setIsStocked = function(isStocked) {
        this.isStocked = isStocked;
    };

    proto.fromJSON = function(json) {
        this.setIsStocked(json.isStocked);
        this.setName(json.name);
        this.setId(json.id);
    };

    proto.destroy = function() {
        throw new Error('not implemented yet');
    };

    return Species;
});