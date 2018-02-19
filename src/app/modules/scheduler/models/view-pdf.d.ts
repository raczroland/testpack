export declare class Margin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
}
export declare class ViewPdf {
    author?: string;
    avoidLinks?: boolean | string;
    creator?: string;
    date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: Margin;
    paperSize?: string | string[];
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
}
