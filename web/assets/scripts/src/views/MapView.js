/**
 * @fileOverview SampleView module definition
 */

define(function(require) {
    'use strict';
    
    var Util = require('lib/Util');
    var $ = require('jquery');
    require('jquery-ui');
    
    /**
     * Duration of the flip animation, in milliseconds
     *
     * @property FLIP_DURATION
     * @type {int}
     * @final
     * @private
     */
    var FLIP_DURATION = 1000;
    
    /**
     * A sample view script. Reveals a message using a card-flip animation.
     *
     * @class SampleView
     * @param {jQuery} $element A reference to the containing DOM element.
     * @constructor
     */
    var SampleView = function($element) {
        /**
         * A reference to the containing DOM element.
         *
         * @default null
         * @property $element
         * @type {jQuery}
         * @public
         */
        this.$element = $element;
        
        /**
         * A reference to the card element.
         *
         * @default null
         * @property $card
         * @type {jQuery}
         * @private
         */
        this.$card = null;
        
        /**
         * Tracks whether component is enabled.
         *
         * @default false
         * @property isEnabled
         * @type {bool}
         * @public
         */
        this.isEnabled = false;
                
        this.init();
    };

    /**
     * Initializes the UI Component View.
     * Runs a single setupHandlers call, followed by createChildren and layout.
     * Exits early if it is already initialized.
     *
     * @method init
     * @returns {SampleView}
     * @private
     */
    SampleView.prototype.init = function() {
        this.setupHandlers()
           .createChildren()
           .layout()
           .enable();
           
        return this;
    };
    
    /**
     * Binds the scope of any handler functions.
     * Should only be run on initialization of the view.
     *
     * @method setupHandlers
     * @returns {SampleView}
     * @private
     */
    SampleView.prototype.setupHandlers = function() {
        // Bind event handlers scope here
        this.onClickHandler = this.onClick.bind(this);
        this.onMouseEnterHandler = this.onMouseEnter.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeave.bind(this);
        this.onAfterFlipHandler = this.onAfterFlip.bind(this);

        return this;
    };
    
    /**
     * Create any child objects or references to DOM elements.
     * Should only be run on initialization of the view.
     *
     * @method createChildren
     * @returns {SampleView}
     * @private
     */
    SampleView.prototype.createChildren = function() {
        this.$card = this.$element.find('.js-card');
        
        return this;
    };
    
    /**
     * Remove any child objects or references to DOM elements.
     *
     * @method removeChildren
     * @returns {SampleView}
     * @public
     */
    SampleView.prototype.removeChildren = function() {
        this.$card = null;
        
        return this;
    };
    
    /**
     * Performs measurements and applys any positioning style logic.
     * Should be run anytime the parent layout changes.
     *
     * @method layout
     * @returns {SampleView}
     * @public
     */
    SampleView.prototype.layout = function() {
        return this;
    };
    
    /**
     * Enables the component.
     * Performs any event binding to handlers.
     * Exits early if it is already enabled.
     *
     * @method enable
     * @returns {SampleView}
     * @public
     */
    SampleView.prototype.enable = function() {
        if (this.isEnabled) {
            return this;
        }
        this.isEnabled = true;
        
        this.$card
            .on('click', this.onClickHandler)
            .on('mouseenter', this.onMouseEnterHandler)
            .on('mouseleave', this.onMouseLeaveHandler);
        
        this.$card
            .addClass('transition')
            .addClass('flipped');
        
        // Perform an action after the flip animation has completed
        window.setTimeout(this.onAfterFlipHandler, FLIP_DURATION);
        
        return this;
    };
    
    /**
     * Disables the component.
     * Tears down any event binding to handlers.
     * Exits early if it is already disabled.
     *
     * @method disable
     * @returns {SampleView}
     * @public
     */
    SampleView.prototype.disable = function() {
        if (!this.isEnabled) {
            return this;
        }
        this.isEnabled = false;
        
        this.$card
            .off('click', this.onClickHandler)
            .off('mouseenter', this.onMouseEnterHandler)
            .off('mouseleave', this.onMouseLeaveHandler);
            
        this.$card
            .removeClass('initialized')
            .removeClass('flipped');
        
        return this;
    };
    
    /**
     * Destroys the component.
     * Tears down any events, handlers, elements.
     * Should be called when the object should be left unused.
     *
     * @method destroy
     * @returns {SampleView}
     * @public
     */
    SampleView.prototype.destroy = function() {
        this.disable()
            .removeChildren();

        return this;
    };
    
    //////////////////////////////////////////////////////////////////////////////////
    // EVENT HANDLERS
    //////////////////////////////////////////////////////////////////////////////////
    
    /**
     * onClick handler.
     * Alters color upon click of the element.
     *
     * @method onClick
     * @param e {Event} JavaScript event object.
     * @private
     */
    SampleView.prototype.onClick = function(e) {
        this.$card.toggleClass('flipped');
    };
    
    /**
     * onMouseEnter handler.
     * Alters background color upon mouse enter of the element.
     *
     * @method onMouseEnter
     * @param e {Event} JavaScript event object.
     * @private
     */
    SampleView.prototype.onMouseEnter = function(e) {
        this.$card.addClass('active');
    };
    
    /**
     * onMouseLeave handler.
     * Alters background color upon mouse leave of the element.
     *
     * @method onMouseLeave
     * @param e {Event} JavaScript event object.
     * @private
     */
    SampleView.prototype.onMouseLeave = function(e) {
        this.$card.removeClass('active');
    };
    
    /**
     * onAfterFlip handler.
     * Fires after flip animation has completed.
     *
     * @method onAfterFlip
     * @param e {Event} JavaScript event object.
     * @private
     */
    SampleView.prototype.onAfterFlip = function() {
        this.$card.effect('shake', { direction:'up' });
    };
    
    return SampleView;
});