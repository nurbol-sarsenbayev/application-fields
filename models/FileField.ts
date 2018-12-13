import { BaseField } from "./Field";

export interface FileField extends BaseField {
    acceptedExtensions: string[];
    files: AppFile[];
}

export interface AppFile {
    url: string;
    name: string;
}