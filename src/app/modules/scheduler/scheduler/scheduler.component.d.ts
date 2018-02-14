import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
export declare class SchedulerComponent implements AfterViewInit, OnDestroy {
    private elementRef;
    events: any;
    schedulerEl: ElementRef;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
