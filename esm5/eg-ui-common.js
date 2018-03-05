import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@progress/kendo-ui';
import '@progress/kendo-ui/js/cultures/kendo.culture.hu-HU.js';
import '@progress/kendo-ui/js/messages/kendo.messages.hu-HU.js';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Barrel for models.
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SchedulerComponent = /** @class */ (function () {
    /**
     * Constructor.
     * @param {?} elementRef
     */
    function SchedulerComponent(elementRef) {
        this.elementRef = elementRef;
        /**
         * If set to true the scheduler will display a slot for "all day" events.
         */
        this.allDaySlot = true;
        /**
         * If set to false the widget will not bind to the data source during initialization.
         */
        this.autoBind = true;
        /**
         * If set to false the "current time" marker of the scheduler would not be displayed.
         */
        this.currentTimeMarker = true;
        /**
         * The data source of the widget which contains the scheduler events.
         */
        this.dataSource = [];
        /**
         * If set to true the user would be able to create new scheduler events and modify or delete existing ones.
         */
        this.editable = true;
        /**
         * The end time of the week and day views. The scheduler will display events ending before the endTime.
         */
        this.endTime = undefined;
        /**
         * If set to false the footer of the scheduler would not be displayed.
         */
        this.footer = true;
        /**
         * The number of minutes represented by a major tick.
         */
        this.majorTick = 60;
        /**
         * The number of time slots to display per major tick.
         */
        this.minorTickCount = 2;
        /**
         * If set to true and the scheduler is viewed on mobile browser it will use adaptive rendering.
         * Can be set to a string phone or tablet which will force the widget to use adaptive rendering regardless of browser type.
         */
        this.mobile = false;
        /**
         * The configuration of the scheduler resource(s).
         * A scheduler resource is optional metadata that can be associated with a scheduler event.
         */
        this.resources = [];
        /**
         * If set to true the user would be able to select scheduler cells and events. By default selection is disabled.
         */
        this.selectable = false;
        /**
         * If set to true the view will be initially shown in business hours mode. By default view is displayed in full day mode.
         */
        this.showWorkHours = false;
        /**
         * If set to true the scheduler will snap events to the nearest slot during dragging (resizing or moving).
         * Set it to false to allow free moving and resizing of events.
         */
        this.snap = true;
        /**
         * The timezone which the scheduler will use to display the scheduler appointment dates.
         */
        this.timezone = 'Etc/UTC';
        /**
         * The views displayed by the scheduler and their configuration.
         */
        this.views = ['day', 'week'];
        /**
         * The start of working week (index based)
         */
        this.workWeekStart = 1;
        /**
         * The end of working week (index based).
         */
        this.workWeekEnd = 5;
        /**
         * Culture.
         */
        this.culture = 'hu-HU';
        /**
         * Fired when a new event is about to be added.
         */
        this.add = new EventEmitter();
        /**
         * Fired when the user cancels editing by clicking the "cancel" button.
         */
        this.cancel = new EventEmitter();
        /**
         * Fired when the user selects a cell or event in the scheduler.
         */
        this.change = new EventEmitter();
        /**
         * Fired before the widget binds to its data source.
         */
        this.dataBinding = new EventEmitter();
        /**
         * Fired when the widget is bound to data from its data source.
         */
        this.dataBound = new EventEmitter();
        /**
         * Fired when the user opens a scheduler event in edit mode by or creates a new event.
         */
        this.edit = new EventEmitter();
        /**
         * Fired when the user starts to drag an event.
         */
        this.moveStart = new EventEmitter();
        /**
         * Fired when the user is moving an event.
         */
        this.move = new EventEmitter();
        /**
         * Fired when the user stops moving an event.
         */
        this.moveEnd = new EventEmitter();
        /**
         * Fired when the user changes the selected date, or view of the scheduler.
         */
        this.navigate = new EventEmitter();
        /**
         * Fired when the user clicks the "Export to PDF" toolbar button.
         */
        this.pdfExport = new EventEmitter();
        /**
         * Fired when the user performs "destroy" action.
         */
        this.remove = new EventEmitter();
        /**
         * Fired when the user starts to resize an event.
         */
        this.resizeStart = new EventEmitter();
        /**
         * Fired when the user is resizing an event.
         */
        this.resize = new EventEmitter();
        /**
         * Fired when the user releases the mouse after resizing an event.
         */
        this.resizeEnd = new EventEmitter();
        /**
         * Fired when the user saves a scheduler event by clicking the "save" button.
         */
        this.save = new EventEmitter();
        /**
         * Is the component initialized.
         */
        this.initialized = false;
    }
    /**
     * Changes happened.
     * @param {?} changes
     * @return {?}
     */
    SchedulerComponent.prototype.ngOnChanges = function (changes) {
        if (this.initialized && Object.keys(changes).some(function (key) { return key !== 'dataSource'; })) {
            this.destroyScheduler();
            this.createScheduler();
        }
        else if (this.initialized && changes.dataSource && (changes.dataSource.previousValue !== changes.dataSource.currentValue)) {
            this.setEvents(changes.dataSource.currentValue);
        }
    };
    /**
     * Initialization of the widget.
     * @return {?}
     */
    SchedulerComponent.prototype.ngAfterViewInit = function () {
        kendo.culture(this.culture);
        this.createScheduler();
        this.initialized = true;
    };
    /**
     * Destroy the widget.
     * @return {?}
     */
    SchedulerComponent.prototype.ngOnDestroy = function () {
        this.destroyScheduler();
    };
    /**
     * Creates the scheduler widget.
     * @return {?}
     */
    SchedulerComponent.prototype.createScheduler = function () {
        kendo.jQuery(this.schedulerEl.nativeElement).kendoScheduler({
            // Options:
            allDayEventTemplate: this.allDayEventTemplate,
            allDaySlot: this.allDaySlot,
            autoBind: this.autoBind,
            currentTimeMarker: this.currentTimeMarker,
            dataSource: this.dataSource,
            date: this.date,
            dateHeaderTemplate: this.dateHeaderTemplate,
            editable: this.editable,
            endTime: this.endTime,
            eventTemplate: this.eventTemplate,
            footer: this.footer,
            group: this.group,
            groupHeaderTemplate: this.groupHeaderTemplate,
            height: this.height,
            majorTick: this.majorTick,
            majorTimeHeaderTemplate: this.majorTimeHeaderTemplate,
            max: this.max,
            messages: this.messages,
            min: this.min,
            minorTickCount: this.minorTickCount,
            minorTimeHeaderTemplate: this.minorTimeHeaderTemplate,
            mobile: this.mobile,
            pdf: this.pdf,
            resources: this.resources,
            selectable: this.selectable,
            showWorkHours: this.showWorkHours,
            snap: this.snap,
            startTime: this.startTime,
            timezone: this.timezone,
            toolbar: this.toolbar,
            views: this.views,
            width: this.width,
            workDayStart: this.workDayStart,
            workDayEnd: this.workDayEnd,
            workWeekStart: this.workWeekStart,
            workWeekEnd: this.workWeekEnd,
            // Events:
            add: this.handleEvent('add'),
            cancel: this.handleEvent('cancel'),
            change: this.handleEvent('change'),
            dataBinding: this.handleEvent('dataBinding'),
            dataBound: this.handleEvent('dataBound'),
            edit: this.handleEvent('edit'),
            moveStart: this.handleEvent('moveStart'),
            move: this.handleEvent('move'),
            moveEnd: this.handleEvent('moveEnd'),
            navigate: this.handleEvent('navigate'),
            pdfExport: this.handleEvent('pdfExport'),
            remove: this.handleEvent('remove'),
            resizeStart: this.handleEvent('resizeStart'),
            resize: this.handleEvent('resize'),
            resizeEnd: this.handleEvent('resizeEnd'),
            save: this.handleEvent('save'),
        });
        this.scheduler = kendo.jQuery(this.schedulerEl.nativeElement).data('kendoScheduler');
    };
    /**
     * Destroys the scheduler widget.
     * @return {?}
     */
    SchedulerComponent.prototype.destroyScheduler = function () {
        kendo.jQuery(this.schedulerEl.nativeElement).empty();
        kendo.destroy(this.elementRef.nativeElement);
    };
    /**
     * Handling the events.
     * @param {?} eventType
     * @return {?}
     */
    SchedulerComponent.prototype.handleEvent = function (eventType) {
        var _this = this;
        return function (event) {
            if (_this[eventType] instanceof EventEmitter) {
                _this[eventType].emit(event);
            }
        };
    };
    /**
     * Adds a new scheduler event and opens the edit form.
     * @param {?} event
     * @return {?}
     */
    SchedulerComponent.prototype.addEvent = function (event) {
        this.scheduler.addEvent(event);
    };
    /**
     * Cancels the scheduler event editing. Closes the edit form.
     * @return {?}
     */
    SchedulerComponent.prototype.cancelEvent = function () {
        this.scheduler.cancelEvent();
    };
    /**
     * Gets currently expanded scheduler events.
     * @return {?}
     */
    SchedulerComponent.prototype.data = function () {
        return this.scheduler.data();
    };
    /**
     * Sets the current scheduler date.
     * @param {?} date
     * @return {?}
     */
    SchedulerComponent.prototype.setDate = function (date) {
        this.scheduler.date(date);
    };
    /**
     * Gets the current scheduler date.
     * @return {?}
     */
    SchedulerComponent.prototype.getDate = function () {
        return this.scheduler.date();
    };
    /**
     * Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks.
     * Calls destroy method of any child Kendo widgets.
     * @return {?}
     */
    SchedulerComponent.prototype.destroy = function () {
        return this.scheduler.destroy();
    };
    /**
     * Opens the specified scheduler event in the edit form.
     * @param {?} event
     * @return {?}
     */
    SchedulerComponent.prototype.editEvent = function (event) {
        this.scheduler.editEvent(event);
    };
    /**
     * Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view.
     * @return {?}
     */
    SchedulerComponent.prototype.items = function () {
        return this.scheduler.items();
    };
    /**
     * Gets the event occurrence with the specified uid.
     * @param {?} uid
     * @return {?}
     */
    SchedulerComponent.prototype.occurrenceByUid = function (uid) {
        return this.scheduler.occurrenceByUid(uid);
    };
    /**
     * The result is scoped to the current displayed view. Therefore, the specified range should be within the view's time range.
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    SchedulerComponent.prototype.occurrencesInRange = function (start, end) {
        return this.scheduler.occurrencesInRange(start, end);
    };
    /**
     * Refreshes the Scheduler rendering using the current data items.
     * @return {?}
     */
    SchedulerComponent.prototype.refresh = function () {
        this.scheduler.refresh();
    };
    /**
     * Removes the specified scheduler event.
     * @param {?} event
     * @return {?}
     */
    SchedulerComponent.prototype.removeEvent = function (event) {
        this.scheduler.removeEvent(event);
    };
    /**
     * Get the relevant resources for a given slot.
     * @param {?} slot
     * @return {?}
     */
    SchedulerComponent.prototype.resourcesBySlot = function (slot) {
        return this.scheduler.resourcesBySlot(slot);
    };
    /**
     * Initiates the PDF export and returns a promise. Also triggers the pdfExport event.
     * @return {?}
     */
    SchedulerComponent.prototype.saveAsPDF = function () {
        this.scheduler.saveAsPDF();
    };
    /**
     * Saves the scheduler event which is open in the edit form and closes it.
     * @return {?}
     */
    SchedulerComponent.prototype.saveEvent = function () {
        this.scheduler.saveEvent();
    };
    /**
     * @param {?} events
     * @param {?} options
     * @return {?}
     */
    SchedulerComponent.prototype.select = function (events, options) {
        this.scheduler.select(events, options);
    };
    /**
     * Sets the data source of the widget.
     * @param {?} dataSource
     * @return {?}
     */
    SchedulerComponent.prototype.setDataSource = function (dataSource) {
        this.scheduler.setDataSource(dataSource);
    };
    /**
     * Get the time slot from given horizontal (x) and vertical (y) position.
     * @param {?} xPosition
     * @param {?} yPosition
     * @return {?}
     */
    SchedulerComponent.prototype.slotByPosition = function (xPosition, yPosition) {
        return this.scheduler.slotByPosition(xPosition, yPosition);
    };
    /**
     * Get the time slot from given element.
     * @param {?} element
     * @return {?}
     */
    SchedulerComponent.prototype.slotByElement = function (element) {
        return this.scheduler.slotByElement(element);
    };
    /**
     * Sets the current Scheduler view.
     * @param {?} type
     * @return {?}
     */
    SchedulerComponent.prototype.setView = function (type) {
        this.scheduler.view(type);
    };
    /**
     * Gets the current Scheduler view.
     * @return {?}
     */
    SchedulerComponent.prototype.getView = function () {
        return this.scheduler.view();
    };
    /**
     * The name of the current view. Can be used for refreshing the current view data.
     * @return {?}
     */
    SchedulerComponent.prototype.viewName = function () {
        return this.scheduler.viewName();
    };
    /**
     * Set events via dataSource.
     * @param {?} events
     * @return {?}
     */
    SchedulerComponent.prototype.setEvents = function (events) {
        this.setDataSource(new kendo.data.SchedulerDataSource({ data: events }));
    };
    return SchedulerComponent;
}());
SchedulerComponent.decorators = [
    { type: Component, args: [{
                selector: 'eg-ui-scheduler',
                template: "<div #scheduler></div>",
                styles: [""]
            },] },
];
/** @nocollapse */
SchedulerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
SchedulerComponent.propDecorators = {
    "allDayEventTemplate": [{ type: Input },],
    "allDaySlot": [{ type: Input },],
    "autoBind": [{ type: Input },],
    "currentTimeMarker": [{ type: Input },],
    "dataSource": [{ type: Input },],
    "date": [{ type: Input },],
    "dateHeaderTemplate": [{ type: Input },],
    "editable": [{ type: Input },],
    "endTime": [{ type: Input },],
    "eventTemplate": [{ type: Input },],
    "footer": [{ type: Input },],
    "group": [{ type: Input },],
    "groupHeaderTemplate": [{ type: Input },],
    "height": [{ type: Input },],
    "majorTick": [{ type: Input },],
    "majorTimeHeaderTemplate": [{ type: Input },],
    "max": [{ type: Input },],
    "messages": [{ type: Input },],
    "min": [{ type: Input },],
    "minorTickCount": [{ type: Input },],
    "minorTimeHeaderTemplate": [{ type: Input },],
    "mobile": [{ type: Input },],
    "pdf": [{ type: Input },],
    "resources": [{ type: Input },],
    "selectable": [{ type: Input },],
    "showWorkHours": [{ type: Input },],
    "snap": [{ type: Input },],
    "startTime": [{ type: Input },],
    "timezone": [{ type: Input },],
    "toolbar": [{ type: Input },],
    "views": [{ type: Input },],
    "width": [{ type: Input },],
    "workDayStart": [{ type: Input },],
    "workDayEnd": [{ type: Input },],
    "workWeekStart": [{ type: Input },],
    "workWeekEnd": [{ type: Input },],
    "culture": [{ type: Input },],
    "add": [{ type: Output },],
    "cancel": [{ type: Output },],
    "change": [{ type: Output },],
    "dataBinding": [{ type: Output },],
    "dataBound": [{ type: Output },],
    "edit": [{ type: Output },],
    "moveStart": [{ type: Output },],
    "move": [{ type: Output },],
    "moveEnd": [{ type: Output },],
    "navigate": [{ type: Output },],
    "pdfExport": [{ type: Output },],
    "remove": [{ type: Output },],
    "resizeStart": [{ type: Output },],
    "resize": [{ type: Output },],
    "resizeEnd": [{ type: Output },],
    "save": [{ type: Output },],
    "schedulerEl": [{ type: ViewChild, args: ['scheduler',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SchedulerModule = /** @class */ (function () {
    function SchedulerModule() {
    }
    return SchedulerModule;
}());
SchedulerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    SchedulerComponent,
                ],
                exports: [
                    SchedulerComponent,
                ],
                providers: [
                    {
                        provide: LOCALE_ID, useValue: 'hu-HU'
                    },
                ]
            },] },
];
/** @nocollapse */
SchedulerModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { SchedulerModule, SchedulerComponent as ɵa };
//# sourceMappingURL=eg-ui-common.js.map
