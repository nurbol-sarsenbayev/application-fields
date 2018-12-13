import { Field } from "./Field";
import { ListField } from "./SelectField";

export interface CheckboxField extends Field {
    value: string;
}

export interface MultipleCheckboxField extends ListField {
    value: string[];
}