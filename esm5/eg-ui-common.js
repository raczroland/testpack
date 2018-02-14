import { Component, ElementRef, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@progress/kendo-ui';
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
            date: new Date("2018/2/13"),
            startTime: new Date("2018/2/13 07:00 AM"),
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
            // dataSource: {
            //   batch: true,
            //   transport: {
            //     read: {
            //       url: "https://demos.telerik.com/kendo-ui/service/tasks",
            //       dataType: "jsonp"
            //     },
            //     update: {
            //       url: "https://demos.telerik.com/kendo-ui/service/tasks/update",
            //       dataType: "jsonp"
            //     },
            //     create: {
            //       url: "https://demos.telerik.com/kendo-ui/service/tasks/create",
            //       dataType: "jsonp"
            //     },
            //     destroy: {
            //       url: "https://demos.telerik.com/kendo-ui/service/tasks/destroy",
            //       dataType: "jsonp"
            //     },
            //     parameterMap: function (options, operation) {
            //       if (operation !== "read" && options.models) {
            //         return {models: kendo.stringify(options.models)};
            //       }
            //     }
            //   },
            //   schema: {
            //     model: {
            //       id: "taskId",
            //       fields: {
            //         taskId: {from: "TaskID", type: "number"},
            //         title: {from: "Title", defaultValue: "No title", validation: {required: true}},
            //         start: {type: "date", from: "Start"},
            //         end: {type: "date", from: "End"},
            //         startTimezone: {from: "StartTimezone"},
            //         endTimezone: {from: "EndTimezone"},
            //         description: {from: "Description"},
            //         recurrenceId: {from: "RecurrenceID"},
            //         recurrenceRule: {from: "RecurrenceRule"},
            //         recurrenceException: {from: "RecurrenceException"},
            //         ownerId: {from: "OwnerID", defaultValue: 1},
            //         isAllDay: {type: "boolean", from: "IsAllDay"}
            //       }
            //     }
            //   },
            //   filter: {
            //     logic: "or",
            //     filters: [
            //       {field: "ownerId", operator: "eq", value: 1},
            //       {field: "ownerId", operator: "eq", value: 2}
            //     ]
            //   }
            // },
            dataSource: this.events,
            // [ // The kendo.data.SchedulerDataSource configuration
            //   // First scheduler event
            //   {
            //     id: 1, // Unique identifier. Needed for editing.
            //     start: new Date("2018/2/14 08:00 AM"), // Start of the event
            //     end: new Date("2018/2/14 09:00 AM"), // End of the event
            //     title: "Breakfast", // Title of the event
            //     ownerId: 1,
            //   },
            //   // Second scheduler event
            //   {
            //     id: 2,
            //     start: new Date("2018/2/15 10:15 AM"),
            //     end: new Date("2018/2/15 12:30 PM"),
            //     title: "Job Interview",
            //     ownerId: 2,
            //   },
            //   // Third scheduler event
            //   {
            //     id: 3, // Unique identifier. Needed for editing.
            //     start: new Date("2018/2/14 08:30 AM"), // Start of the event
            //     end: new Date("2018/2/14 10:30 AM"), // End of the event
            //     title: "Breakfast", // Title of the event
            //     ownerId: 3,
            //   },
            // ],
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
    { type: Component, args: [{
                selector: 'eg-ui-scheduler',
                template: "\n    <div #scheduler></div>\n  ",
                styles: [""]
            },] },
];
/** @nocollapse */
SchedulerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
SchedulerComponent.propDecorators = {
    "events": [{ type: Input },],
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
                    CommonModule
                ],
                declarations: [SchedulerComponent],
                exports: [
                    SchedulerComponent,
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
