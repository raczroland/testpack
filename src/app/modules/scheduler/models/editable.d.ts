export declare class Editable {
    /**
     * If set to true the scheduler will display a confirmation dialog when the user clicks the "destroy" button.
     * Can be set to a string which will be used as the confirmation text.
     */
    confirmation?: boolean | string;
    /**
     * If set to true the user can create new events. Creating is enabled by default.
     */
    create?: boolean;
    /**
     * If set to true the user can delete events from the view by clicking the "destroy" button. Deleting is enabled by default.
     */
    destroy?: boolean;
    /**
     * Recurring events edit mode. The available modes are: "dialog" (default), "series" and "occurrence".
     */
    editRecurringMode?: 'dialog' | 'series' | 'occurrence';
    /**
     * If set to true the scheduler allows event moving. Dragging the event changes the start and end time.
     */
    move?: boolean;
    /**
     * If set to true the scheduler allows event resizing. Dragging the resize handles changes the start or end time of the event.
     */
    resize?: boolean;
    /**
     * The template which renders the editor.
     */
    template?: string;
    /**
     * If set to true the user can update events. Updating is enabled by default.
     */
    update?: boolean;
    /**
     * Configures the Kendo UI Window instance, which is used when the Grid edit mode is "popup". The configuration is optional.
     */
    window?: object;
}
