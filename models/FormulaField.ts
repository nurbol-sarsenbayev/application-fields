import { BaseField } from "./Field";

export interface FormulaField extends BaseField {
    expression: Expression;
    valueDataType: 'number' | 'date';
}

export interface Expression {
    bracketsOnFront: number;
    operand: string;
    percentaged: boolean;
    bracketsOnBack: number;
    operator: string;
    expression: Expression;
}