import { BaseField } from "./Field";

export interface HtmlField extends BaseField, HtmlTag {
}

export interface HtmlTag {
    tag?: string;
    style?: AppStyle;
    className?: string;
    children?: (HtmlTag | string)[];
}

export interface AppStyle {
    display?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    textAlign?: string;
}
