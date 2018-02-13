import { Component, ElementRef, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@progress/kendo-ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SchedulerComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        kendo.destroy(this.elementRef.nativeElement);
    }
}
SchedulerComponent.decorators = [
    { type: Component, args: [{
                selector: 'eg-ui-scheduler',
                template: `
    <div>Ez a harmadik. :)))))))</div>
    <div #scheduler></div>
  `,
                styles: [``]
            },] },
];
/** @nocollapse */
SchedulerComponent.ctorParameters = () => [
    { type: ElementRef, },
];
SchedulerComponent.propDecorators = {
    "schedulerEl": [{ type: ViewChild, args: ['scheduler',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SchedulerModule {
}
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
SchedulerModule.ctorParameters = () => [];

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
