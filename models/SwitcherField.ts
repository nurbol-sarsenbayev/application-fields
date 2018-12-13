import { BaseField } from "./Field";

export interface SwitcherField extends BaseField {
    values: SwitcherValue[];
}

export interface SwitcherValue {
    conditions: SwitcherCondition[];
    fieldId: number;
}

export interface SwitcherCondition {
    /** select, multi_select, input_number, checkbox, radio */
    sourceFieldId: number;
    value: string | string[] | SwitcherNumberValue;
}

export interface SwitcherNumberValue {
    gt?: number;
    gte?: number;
    lt?: number;
    lte?: number;
    eq?: number;
    neq?: number;
}
