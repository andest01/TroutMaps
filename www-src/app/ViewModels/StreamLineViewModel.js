define(function(require) {
    'use strict';

//    var Base = require('ViewModels/LinearReferenceSegment');

    var StreamLineViewModel = function (lineSegment) {
        this.lineSegment = null;
        this.xOffset = 0.0;
        this.width = 0.0;
        this.init(lineSegment);
    };

    StreamLineViewModel.prototype.init = function(lineSegment) {
        this.lineSegment = lineSegment;
        this.xOffset = 1.0 - this.lineSegment.stop;
        this.width = Math.abs(this.lineSegment.stop - this.lineSegment.start);
    };

    return StreamLineViewModel;
});