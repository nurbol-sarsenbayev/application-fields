import { FieldConstraint } from "./FieldConstraint";

export interface Field extends BaseField {
    value: string | string[];
    constraints: FieldConstraint[];
}

export interface BaseField {
    id: number;
    label: string;
    fieldType: string;
    isHidden: boolean;
}
