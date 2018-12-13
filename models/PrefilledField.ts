import { Field } from "./Field";
import { CustomerDataField } from "./CustomerDataField";

export interface PrefilledField extends Field, CustomerDataField {
    value: string;
}
