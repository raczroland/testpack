(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@progress/kendo-ui'), require('@progress/kendo-ui/js/cultures/kendo.culture.hu-HU.js'), require('@progress/kendo-ui/js/messages/kendo.messages.hu-HU.js'), require('@angular/common/http'), require('@progress/kendo-angular-grid'), require('@progress/kendo-data-query'), require('rxjs/Observable'), require('rxjs/add/observable/of'), require('@angular/platform-browser/animations')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@progress/kendo-ui', '@progress/kendo-ui/js/cultures/kendo.culture.hu-HU.js', '@progress/kendo-ui/js/messages/kendo.messages.hu-HU.js', '@angular/common/http', '@progress/kendo-angular-grid', '@progress/kendo-data-query', 'rxjs/Observable', 'rxjs/add/observable/of', '@angular/platform-browser/animations'], factory) :
	(factory((global['eg-ui-common'] = {}),global.ng.core,global.ng.common,null,null,null,global.ng.common.http,global.kendoAngularGrid,global.kendoDataQuery,global.Rx,global.Rx.Observable,global.ng.platformBrowser.animations));
}(this, (function (exports,core,common,kendoUi,kendo_culture_huHU_js,kendo_messages_huHU_js,http,kendoAngularGrid,kendoDataQuery,Observable,of,animations) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */










function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

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
        this.add = new core.EventEmitter();
        /**
         * Fired when the user cancels editing by clicking the "cancel" button.
         */
        this.cancel = new core.EventEmitter();
        /**
         * Fired when the user selects a cell or event in the scheduler.
         */
        this.change = new core.EventEmitter();
        /**
         * Fired before the widget binds to its data source.
         */
        this.dataBinding = new core.EventEmitter();
        /**
         * Fired when the widget is bound to data from its data source.
         */
        this.dataBound = new core.EventEmitter();
        /**
         * Fired when the user opens a scheduler event in edit mode by or creates a new event.
         */
        this.edit = new core.EventEmitter();
        /**
         * Fired when the user starts to drag an event.
         */
        this.moveStart = new core.EventEmitter();
        /**
         * Fired when the user is moving an event.
         */
        this.move = new core.EventEmitter();
        /**
         * Fired when the user stops moving an event.
         */
        this.moveEnd = new core.EventEmitter();
        /**
         * Fired when the user changes the selected date, or view of the scheduler.
         */
        this.navigate = new core.EventEmitter();
        /**
         * Fired when the user clicks the "Export to PDF" toolbar button.
         */
        this.pdfExport = new core.EventEmitter();
        /**
         * Fired when the user performs "destroy" action.
         */
        this.remove = new core.EventEmitter();
        /**
         * Fired when the user starts to resize an event.
         */
        this.resizeStart = new core.EventEmitter();
        /**
         * Fired when the user is resizing an event.
         */
        this.resize = new core.EventEmitter();
        /**
         * Fired when the user releases the mouse after resizing an event.
         */
        this.resizeEnd = new core.EventEmitter();
        /**
         * Fired when the user saves a scheduler event by clicking the "save" button.
         */
        this.save = new core.EventEmitter();
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
            if (_this[eventType] instanceof core.EventEmitter) {
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
    { type: core.Component, args: [{
                selector: 'eg-ui-scheduler',
                template: "<div #scheduler></div>",
                styles: [""]
            },] },
];
/** @nocollapse */
SchedulerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
SchedulerComponent.propDecorators = {
    "allDayEventTemplate": [{ type: core.Input },],
    "allDaySlot": [{ type: core.Input },],
    "autoBind": [{ type: core.Input },],
    "currentTimeMarker": [{ type: core.Input },],
    "dataSource": [{ type: core.Input },],
    "date": [{ type: core.Input },],
    "dateHeaderTemplate": [{ type: core.Input },],
    "editable": [{ type: core.Input },],
    "endTime": [{ type: core.Input },],
    "eventTemplate": [{ type: core.Input },],
    "footer": [{ type: core.Input },],
    "group": [{ type: core.Input },],
    "groupHeaderTemplate": [{ type: core.Input },],
    "height": [{ type: core.Input },],
    "majorTick": [{ type: core.Input },],
    "majorTimeHeaderTemplate": [{ type: core.Input },],
    "max": [{ type: core.Input },],
    "messages": [{ type: core.Input },],
    "min": [{ type: core.Input },],
    "minorTickCount": [{ type: core.Input },],
    "minorTimeHeaderTemplate": [{ type: core.Input },],
    "mobile": [{ type: core.Input },],
    "pdf": [{ type: core.Input },],
    "resources": [{ type: core.Input },],
    "selectable": [{ type: core.Input },],
    "showWorkHours": [{ type: core.Input },],
    "snap": [{ type: core.Input },],
    "startTime": [{ type: core.Input },],
    "timezone": [{ type: core.Input },],
    "toolbar": [{ type: core.Input },],
    "views": [{ type: core.Input },],
    "width": [{ type: core.Input },],
    "workDayStart": [{ type: core.Input },],
    "workDayEnd": [{ type: core.Input },],
    "workWeekStart": [{ type: core.Input },],
    "workWeekEnd": [{ type: core.Input },],
    "culture": [{ type: core.Input },],
    "add": [{ type: core.Output },],
    "cancel": [{ type: core.Output },],
    "change": [{ type: core.Output },],
    "dataBinding": [{ type: core.Output },],
    "dataBound": [{ type: core.Output },],
    "edit": [{ type: core.Output },],
    "moveStart": [{ type: core.Output },],
    "move": [{ type: core.Output },],
    "moveEnd": [{ type: core.Output },],
    "navigate": [{ type: core.Output },],
    "pdfExport": [{ type: core.Output },],
    "remove": [{ type: core.Output },],
    "resizeStart": [{ type: core.Output },],
    "resize": [{ type: core.Output },],
    "resizeEnd": [{ type: core.Output },],
    "save": [{ type: core.Output },],
    "schedulerEl": [{ type: core.ViewChild, args: ['scheduler',] },],
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                ],
                declarations: [
                    SchedulerComponent,
                ],
                exports: [
                    SchedulerComponent,
                ],
                providers: [
                    {
                        provide: core.LOCALE_ID, useValue: 'hu-HU'
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
var EgGridComponent = /** @class */ (function () {
    /**
     * @param {?} httpClient
     */
    function EgGridComponent(httpClient) {
        this.httpClient = httpClient;
        /**
         * Adatok tömbje.
         */
        this.data = [];
        /**
         * Rendezhetőség.
         */
        this.sortable = true;
        /**
         * Szűrhetőség.
         */
        this.filterable = true;
        /**
         * Csoportosítás.
         */
        this.groupable = true;
        /**
         * Lapozás.
         */
        this.pageable = true;
        /**
         * Lapméret.
         */
        this.pageSize = 10;
        /**
         * Méretezhetőség.
         */
        this.resizable = false;
        /**
         * Újrarendezhetőség.
         */
        this.reorderable = false;
        /**
         * Kiválaszhatóság.
         */
        this.selectable = false;
        /**
         * Billentyűzettel való irányítás.
         */
        this.navigable = false;
        /**
         * Ki legyen-e jelölve egy adott sor.
         */
        this.cellClick = new core.EventEmitter();
        /**
         * Állapot.
         */
        this.state = {
            skip: 0,
        };
    }
    /**
     * @return {?}
     */
    EgGridComponent.prototype.ngOnInit = function () {
        // Első adatbetöltés:
        this.dataStateChange(this.state);
    };
    /**
     * @return {?}
     */
    EgGridComponent.prototype.ngAfterViewInit = function () {
        // Ha meg vannak adva oszlopok, beállítjuk őket:
        if (this.columns && this.columns.length > 0) {
            // columns:
            var /** @type {?} */ columnsToRender = __spread(this.columns.toArray());
            // selectable:
            if (this.selectable && this.checkboxColumn) {
                columnsToRender.unshift(this.checkboxColumn);
            }
            this.columns.reset(columnsToRender);
            this.grid.columns = this.columns;
        }
        // Ha van detail template, beállítjuk:
        if (this.detailTemplate) {
            this.grid.detailTemplate = this.detailTemplate;
        }
        // Ha van toolbar template, beállítjuk:
        if (this.toolbarTemplate) {
            this.grid.toolbarTemplate = this.toolbarTemplate;
        }
        // "Újratöltjük" a gridet:
        this.grid.ngAfterContentInit();
    };
    /**
     * Adatok betöltése az állapot alapján.
     * @param {?} state
     * @return {?}
     */
    EgGridComponent.prototype.dataStateChange = function (state) {
        var _this = this;
        this.loadData().subscribe(function (data) {
            var /** @type {?} */ newState = Object.assign({}, state, { take: _this.pageSize });
            _this.gridView = kendoDataQuery.process(data, newState);
            _this.state = newState;
            console.log(_this.state);
        });
    };
    /**
     * Adatok lekérése.
     * @return {?}
     */
    EgGridComponent.prototype.loadData = function () {
        // Ha van dataUrl megadva, lekérjük a szervertől az adatokat. Ellenkező esetben a data propertyt használjuk.
        if (this.dataUrl) {
            return this.httpClient.get(this.dataUrl, {
                params: new http.HttpParams().append('state', JSON.stringify(this.state))
            });
        }
        else {
            return Observable.Observable.of(this.data);
        }
    };
    /**
     * @param {?} eventType
     * @return {?}
     */
    EgGridComponent.prototype.event = function (eventType) {
        var _this = this;
        return function (event) {
            if (_this[eventType] instanceof core.EventEmitter) {
                _this[eventType].emit(event);
            }
        };
    };
    return EgGridComponent;
}());
EgGridComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'eg-grid',
                template: "<kendo-grid\n  [data]=\"gridView\"\n  [skip]=\"state.skip\"\n  [pageSize]=\"pageSize\"\n  [group]=\"state.group\"\n  [filter]=\"state.filter\"\n  [sort]=\"state.sort\"\n  [sortable]=\"sortable\"\n  [filterable]=\"filterable\"\n  [groupable]=\"groupable\"\n  [pageable]=\"pageable\"\n  [resizable]=\"resizable\"\n  [reorderable]=\"reorderable\"\n  [selectable]=\"selectable\"\n  [height]=\"height\"\n  [navigable]=\"navigable\"\n  [scrollable]=\"scrollable\"\n  (dataStateChange)=\"dataStateChange($event)\"\n  (cellClick)=\"event('cellClick')($event)\"\n>\n  <kendo-grid-checkbox-column *ngIf=\"selectable && columns && columns.length > 0\" #checkboxColumn showSelectAll=\"true\"></kendo-grid-checkbox-column>\n  <!--<ng-content select=\"[kendoGridToolbarTemplate]\" ngProjectAs=\"[kendoGridToolbarTemplate]\"></ng-content>-->\n  <!--<ng-content select=\"kendo-grid-column\" ngProjectAs=\"kendo-grid-column\"></ng-content>-->\n</kendo-grid>\n"
            },] },
];
/** @nocollapse */
EgGridComponent.ctorParameters = function () { return [
    { type: http.HttpClient, },
]; };
EgGridComponent.propDecorators = {
    "data": [{ type: core.Input },],
    "dataUrl": [{ type: core.Input },],
    "sortable": [{ type: core.Input },],
    "filterable": [{ type: core.Input },],
    "groupable": [{ type: core.Input },],
    "pageable": [{ type: core.Input },],
    "pageSize": [{ type: core.Input },],
    "resizable": [{ type: core.Input },],
    "reorderable": [{ type: core.Input },],
    "selectable": [{ type: core.Input },],
    "height": [{ type: core.Input },],
    "navigable": [{ type: core.Input },],
    "scrollable": [{ type: core.Input },],
    "cellClick": [{ type: core.Output },],
    "grid": [{ type: core.ViewChild, args: [kendoAngularGrid.GridComponent,] },],
    "checkboxColumn": [{ type: core.ViewChild, args: ['checkboxColumn',] },],
    "columns": [{ type: core.ContentChildren, args: [kendoAngularGrid.ColumnBase,] },],
    "toolbarTemplate": [{ type: core.ContentChild, args: [kendoAngularGrid.ToolbarTemplateDirective,] },],
    "detailTemplate": [{ type: core.ContentChild, args: [kendoAngularGrid.DetailTemplateDirective,] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EgGridModule = /** @class */ (function () {
    function EgGridModule() {
    }
    return EgGridModule;
}());
EgGridModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    kendoAngularGrid.GridModule,
                    http.HttpClientModule,
                    animations.BrowserAnimationsModule,
                ],
                declarations: [
                    EgGridComponent,
                ],
                exports: [
                    EgGridComponent,
                ]
            },] },
];
/** @nocollapse */
EgGridModule.ctorParameters = function () { return []; };

exports.SchedulerModule = SchedulerModule;
exports.EgGridModule = EgGridModule;
exports.ɵb = EgGridComponent;
exports.ɵa = SchedulerComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=eg-ui-common.umd.js.map
