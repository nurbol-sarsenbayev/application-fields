import { Field } from "./Field";
import { CustomerDataField } from "./CustomerDataField";

export interface Dependency {
    fieldId: number;
    /** Table column name */
    columnName: string;
}

export interface ListItem {
    value: string;
    label: string;
}

export interface ListField extends Field {
    dependencies?: Dependency[];
    sourceId: number;
    isUserTable: boolean;
}

export interface BaseSelectField extends ListField, CustomerDataField {
}

export interface SelectField extends BaseSelectField {
    value: string;
}

export interface MultipleSelectField extends BaseSelectField {
    value: string[];
}
