export declare class Group {
    /**
     * If set to true and the group.resources has some resources set the view is grouped by date.
     */
    date: boolean;
    /**
     * An array of resource names by which the scheduler events will be grouped.
     */
    resources?: string[];
    /**
     * The orientation of the group headers. Supported values are horizontal or vertical.
     * Note that the agenda view is always in vertical orientation.
     */
    orientation: 'horizontal' | 'vertical';
}
