import { AfterViewInit, EventEmitter, OnInit, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CellClickEvent, ColumnBase, DataStateChangeEvent, GridDataResult, ScrollMode, SelectableSettings } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
export declare class EgGridComponent implements AfterViewInit, OnInit {
    private httpClient;
    /**
     * Adatok tömbje.
     */
    data: any[];
    /**
     * Backendes adatok elérése. Ha meg van adva, innen kerülnek lekérésre az adatok a data helyett.
     */
    dataUrl: string;
    /**
     * Rendezhetőség.
     */
    sortable: boolean;
    /**
     * Szűrhetőség.
     */
    filterable: boolean;
    /**
     * Csoportosítás.
     */
    groupable: boolean;
    /**
     * Lapozás.
     */
    pageable: boolean;
    /**
     * Lapméret.
     */
    pageSize: number;
    /**
     * Méretezhetőség.
     */
    resizable: boolean;
    /**
     * Újrarendezhetőség.
     */
    reorderable: boolean;
    /**
     * Kiválaszhatóság.
     */
    selectable: boolean | SelectableSettings;
    /**
     * Grid magassága.
     */
    height: number;
    /**
     * Billentyűzettel való irányítás.
     */
    navigable: boolean;
    /**
     * Görgetés.
     */
    scrollable: ScrollMode;
    /**
     * Sorra vonatkozó classt állt be a függvény alapján.
     */
    /**
     * Ki legyen-e jelölve egy adott sor.
     */
    cellClick: EventEmitter<CellClickEvent>;
    /**
     * Adatok objektumban.
     */
    gridView: GridDataResult;
    /**
     * Állapot.
     */
    state: State;
    /**
     * Grid elem.
     */
    grid: any;
    /**
     * Kijelölő oszlop.
     */
    checkboxColumn: any;
    /**
     * Megadott szlopok.
     */
    columns: QueryList<ColumnBase>;
    /**
     * Megadott toolbar template.
     */
    toolbarTemplate: any;
    /**
     * Megadott detail template.
     */
    detailTemplate: any;
    constructor(httpClient: HttpClient);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    /**
     * Adatok betöltése az állapot alapján.
     */
    dataStateChange(state: DataStateChangeEvent | State): void;
    /**
     * Adatok lekérése.
     */
    loadData(): Observable<any[]>;
    private event(eventType);
}
