import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { CurrentTimeMarker, Editable, Footer, Group, View, Resource, ViewOptions, ViewPdf } from '../models';
import SchedulerMessages = kendo.ui.SchedulerMessages;
export declare class SchedulerComponent implements AfterViewInit, OnDestroy, OnChanges {
    private elementRef;
    /**
     * The template used to render the "all day" scheduler events.
     */
    allDayEventTemplate: string;
    /**
     * If set to true the scheduler will display a slot for "all day" events.
     */
    allDaySlot: boolean;
    /**
     * If set to false the widget will not bind to the data source during initialization.
     */
    autoBind: boolean;
    /**
     * If set to false the "current time" marker of the scheduler would not be displayed.
     */
    currentTimeMarker: boolean | CurrentTimeMarker;
    /**
     * The data source of the widget which contains the scheduler events.
     */
    dataSource: object | any[] | kendo.data.SchedulerDataSource;
    /**
     * The current date of the scheduler. Used to determine the period which is displayed by the widget.
     */
    date: any;
    /**
     * The template used to render the date header cells.
     */
    dateHeaderTemplate: string;
    /**
     * If set to true the user would be able to create new scheduler events and modify or delete existing ones.
     */
    editable: boolean | Editable;
    /**
     * The end time of the week and day views. The scheduler will display events ending before the endTime.
     */
    endTime: Date;
    /**
     * The template used to render the scheduler events.
     */
    eventTemplate: string;
    /**
     * If set to false the footer of the scheduler would not be displayed.
     */
    footer: boolean | Footer;
    /**
     * The configuration of the scheduler resource(s) grouping.
     */
    group: Group;
    /**
     * The template used to render the group headers of scheduler day, week, workWeek and timeline views.
     */
    groupHeaderTemplate: string;
    /**
     * The height of the widget. Numeric values are treated as pixels.
     */
    height: number | string;
    /**
     * The number of minutes represented by a major tick.
     */
    majorTick: number;
    /**
     * The template used to render the major ticks.
     */
    majorTimeHeaderTemplate: string;
    /**
     * Constraints the maximum date which can be selected via the scheduler navigation.
     */
    max: Date;
    /**
     * The configuration of the scheduler messages. Use this option to customize or localize the scheduler messages.
     */
    messages: SchedulerMessages;
    /**
     * Constraints the minimum date which can be selected via the scheduler navigation.
     */
    min: Date;
    /**
     * The number of time slots to display per major tick.
     */
    minorTickCount: number;
    /**
     * The template used to render the minor ticks.
     */
    minorTimeHeaderTemplate: string;
    /**
     * If set to true and the scheduler is viewed on mobile browser it will use adaptive rendering.
     * Can be set to a string phone or tablet which will force the widget to use adaptive rendering regardless of browser type.
  
     */
    mobile: boolean | 'phone' | 'tablet';
    /**
     * Configures the Kendo UI Scheduler PDF export settings.
     */
    pdf: ViewPdf;
    /**
     * The configuration of the scheduler resource(s).
     * A scheduler resource is optional metadata that can be associated with a scheduler event.
     */
    resources: Resource[];
    /**
     * If set to true the user would be able to select scheduler cells and events. By default selection is disabled.
     */
    selectable: boolean;
    /**
     * If set to true the view will be initially shown in business hours mode. By default view is displayed in full day mode.
     */
    showWorkHours: boolean;
    /**
     * If set to true the scheduler will snap events to the nearest slot during dragging (resizing or moving).
     * Set it to false to allow free moving and resizing of events.
     */
    snap: boolean;
    /**
     * The start time of the week and day views. The scheduler will display events starting after the startTime.
     */
    startTime: Date;
    /**
     * The timezone which the scheduler will use to display the scheduler appointment dates.
     */
    timezone: string;
    /**
     * List of commands that the scheduler will display in its toolbar as buttons. Currently supports only the "pdf" command.
     */
    toolbar: string[];
    /**
     * The views displayed by the scheduler and their configuration.
     */
    views: (string | View)[];
    /**
     * The width of the widget. Numeric values are treated as pixels.
     */
    width: number | string;
    /**
     * Sets the start of the work day when the "Show business hours" button is clicked.
     */
    workDayStart: Date;
    /**
     * Sets the end of the work day when the "Show business hours" button is clicked.
     */
    workDayEnd: Date;
    /**
     * The start of working week (index based)
     */
    workWeekStart: number;
    /**
     * The end of working week (index based).
     */
    workWeekEnd: number;
    /**
     * Culture.
     */
    culture: string;
    /**
     * Fired when a new event is about to be added.
     */
    add: EventEmitter<any>;
    /**
     * Fired when the user cancels editing by clicking the "cancel" button.
     */
    cancel: EventEmitter<any>;
    /**
     * Fired when the user selects a cell or event in the scheduler.
     */
    change: EventEmitter<any>;
    /**
     * Fired before the widget binds to its data source.
     */
    dataBinding: EventEmitter<any>;
    /**
     * Fired when the widget is bound to data from its data source.
     */
    dataBound: EventEmitter<any>;
    /**
     * Fired when the user opens a scheduler event in edit mode by or creates a new event.
     */
    edit: EventEmitter<any>;
    /**
     * Fired when the user starts to drag an event.
     */
    moveStart: EventEmitter<any>;
    /**
     * Fired when the user is moving an event.
     */
    move: EventEmitter<any>;
    /**
     * Fired when the user stops moving an event.
     */
    moveEnd: EventEmitter<any>;
    /**
     * Fired when the user changes the selected date, or view of the scheduler.
     */
    navigate: EventEmitter<any>;
    /**
     * Fired when the user clicks the "Export to PDF" toolbar button.
     */
    pdfExport: EventEmitter<any>;
    /**
     * Fired when the user performs "destroy" action.
     */
    remove: EventEmitter<any>;
    /**
     * Fired when the user starts to resize an event.
     */
    resizeStart: EventEmitter<any>;
    /**
     * Fired when the user is resizing an event.
     */
    resize: EventEmitter<any>;
    /**
     * Fired when the user releases the mouse after resizing an event.
     */
    resizeEnd: EventEmitter<any>;
    /**
     * Fired when the user saves a scheduler event by clicking the "save" button.
     */
    save: EventEmitter<any>;
    /**
     * Scheduler element in HTML.
     */
    private schedulerEl;
    /**
     * The scheduler.
     */
    private scheduler;
    /**
     * Is the component initialized.
     */
    private initialized;
    /**
     * Constructor.
     */
    constructor(elementRef: ElementRef);
    /**
     * Changes happened.
     */
    ngOnChanges(changes: any): void;
    /**
     * Initialization of the widget.
     */
    ngAfterViewInit(): void;
    /**
     * Destroy the widget.
     */
    ngOnDestroy(): void;
    /**
     * Creates the scheduler widget.
     */
    private createScheduler();
    /**
     * Destroys the scheduler widget.
     */
    private destroyScheduler();
    /**
     * Handling the events.
     */
    private handleEvent(eventType);
    /**
     * Adds a new scheduler event and opens the edit form.
     */
    addEvent(event: object): void;
    /**
     * Cancels the scheduler event editing. Closes the edit form.
     */
    cancelEvent(): void;
    /**
     * Gets currently expanded scheduler events.
     */
    data(): any;
    /**
     * Sets the current scheduler date.
     */
    setDate(date: any): void;
    /**
     * Gets the current scheduler date.
     */
    getDate(): any;
    /**
     * Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks.
     * Calls destroy method of any child Kendo widgets.
     */
    destroy(): any;
    /**
     * Opens the specified scheduler event in the edit form.
     */
    editEvent(event: string | kendo.data.SchedulerEvent): void;
    /**
     * Obtains an Array of the DOM elements, which correspond to the data items from the Kendo UI DataSource view.
     */
    items(): any;
    /**
     * Gets the event occurrence with the specified uid.
     */
    occurrenceByUid(uid: string): any;
    /**
     * The result is scoped to the current displayed view. Therefore, the specified range should be within the view's time range.
     */
    occurrencesInRange(start: Date, end: Date): any;
    /**
     * Refreshes the Scheduler rendering using the current data items.
     */
    refresh(): void;
    /**
     * Removes the specified scheduler event.
     */
    removeEvent(event: string | kendo.data.SchedulerEvent): void;
    /**
     * Get the relevant resources for a given slot.
     */
    resourcesBySlot(slot: object): any;
    /**
     * Initiates the PDF export and returns a promise. Also triggers the pdfExport event.
     */
    saveAsPDF(): void;
    /**
     * Saves the scheduler event which is open in the edit form and closes it.
     */
    saveEvent(): void;
    select(events: any[], options: ViewOptions): void;
    /**
     * Sets the data source of the widget.
     */
    setDataSource(dataSource: kendo.data.SchedulerDataSource): void;
    /**
     * Get the time slot from given horizontal (x) and vertical (y) position.
     */
    slotByPosition(xPosition: number, yPosition: number): any;
    /**
     * Get the time slot from given element.
     */
    slotByElement(element: any): any;
    /**
     * Sets the current Scheduler view.
     */
    setView(type: string): void;
    /**
     * Gets the current Scheduler view.
     */
    getView(): any;
    /**
     * The name of the current view. Can be used for refreshing the current view data.
     */
    viewName(): any;
    /**
     * Set events via dataSource.
     */
    setEvents(events: any[]): void;
}
