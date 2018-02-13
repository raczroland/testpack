(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@progress/kendo-ui')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@progress/kendo-ui'], factory) :
	(factory((global['eg-ui-common'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SchedulerComponent = /** @class */ (function () {
    /**
     * @param {?} elementRef
     */
    function SchedulerComponent(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    SchedulerComponent.prototype.ngAfterViewInit = function () {
        kendo.jQuery(this.schedulerEl.nativeElement).kendoScheduler({
            date: new Date("2013/6/13"),
            startTime: new Date("2013/6/13 07:00 AM"),
            height: 600,
            views: [
                "day",
                { type: "workWeek", selected: true },
                "week",
                "month",
                "agenda",
                { type: "timeline", eventHeight: 50 }
            ],
            timezone: "Etc/UTC",
            dataSource: {
                batch: true,
                transport: {
                    read: {
                        url: "https://demos.telerik.com/kendo-ui/service/tasks",
                        dataType: "jsonp"
                    },
                    update: {
                        url: "https://demos.telerik.com/kendo-ui/service/tasks/update",
                        dataType: "jsonp"
                    },
                    create: {
                        url: "https://demos.telerik.com/kendo-ui/service/tasks/create",
                        dataType: "jsonp"
                    },
                    destroy: {
                        url: "https://demos.telerik.com/kendo-ui/service/tasks/destroy",
                        dataType: "jsonp"
                    },
                    parameterMap: function (options, operation) {
                        if (operation !== "read" && options.models) {
                            return { models: kendo.stringify(options.models) };
                        }
                    }
                },
                schema: {
                    model: {
                        id: "taskId",
                        fields: {
                            taskId: { from: "TaskID", type: "number" },
                            title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                            start: { type: "date", from: "Start" },
                            end: { type: "date", from: "End" },
                            startTimezone: { from: "StartTimezone" },
                            endTimezone: { from: "EndTimezone" },
                            description: { from: "Description" },
                            recurrenceId: { from: "RecurrenceID" },
                            recurrenceRule: { from: "RecurrenceRule" },
                            recurrenceException: { from: "RecurrenceException" },
                            ownerId: { from: "OwnerID", defaultValue: 1 },
                            isAllDay: { type: "boolean", from: "IsAllDay" }
                        }
                    }
                },
                filter: {
                    logic: "or",
                    filters: [
                        { field: "ownerId", operator: "eq", value: 1 },
                        { field: "ownerId", operator: "eq", value: 2 }
                    ]
                }
            },
            resources: [
                {
                    field: "ownerId",
                    title: "Owner",
                    dataSource: [
                        { text: "Alex", value: 1, color: "#f8a398" },
                        { text: "Bob", value: 2, color: "#51a0ed" },
                        { text: "Charlie", value: 3, color: "#56ca85" }
                    ]
                }
            ]
        });
    };
    /**
     * @return {?}
     */
    SchedulerComponent.prototype.ngOnDestroy = function () {
        kendo.destroy(this.elementRef.nativeElement);
    };
    return SchedulerComponent;
}());
SchedulerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'eg-ui-scheduler',
                template: "\n    <div>Ez az m\u00E1sodik</div>\n    <div #scheduler></div>\n  ",
                styles: [""]
            },] },
];
/** @nocollapse */
SchedulerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
SchedulerComponent.propDecorators = {
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
                    common.CommonModule
                ],
                declarations: [SchedulerComponent],
                exports: [
                    SchedulerComponent,
                ]
            },] },
];
/** @nocollapse */
SchedulerModule.ctorParameters = function () { return []; };

exports.SchedulerModule = SchedulerModule;
exports.ɵa = SchedulerComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=eg-ui-common.umd.js.map
