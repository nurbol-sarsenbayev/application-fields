import { Translation } from './Translation';
import { BaseField } from './Field';

export interface Application {
    id: number;
    name: string;
    description: string;
    categoryId: number;
    categoryName: string;
    grid: AppGrid;
    // fields: { [id: number]: BaseField };
    fields: BaseField[];
    // fieldIds: number[];
    published: boolean;
    created: Date;
    /** нижние поля я пока не понял для чего используется */
    actions: any;
    code: any;
    status: any;
    relatedOperationId: any;
    number: any;
    notification: any;
    endpointId: any;
    demandEndpointCode: any;
}

export interface AppGrid {
    // gap?: number | [number, number];
    columnCount: number;
    items: AppGridItem[];
}

export interface AppGridItem {
    // top?: number;
    // left?: number;
    colSpan?: number;
    rowSpan?: number;
    fieldId?: number;
    grid?: AppGrid;
}
