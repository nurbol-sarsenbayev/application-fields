import { Translation } from "./Translation";

export interface FieldConstraint extends Translation {
    id: number;    
    code: string;
    message?: string;
}

export interface ConstraintItem extends FieldConstraint {
    compatibleDataTypes?: string[];
}

export const constraints: ConstraintItem[] = [
    {
        id: 1,
        code: 'required',
        message: 'Обязательное поле'
    },
    {
        id: 2,
        code: 'max',
        message: 'Превышен максимальное допустимое число',
        compatibleDataTypes: ['input_number', 'date_picker']
    },
    {
        id: 3,
        code: 'min',
        compatibleDataTypes: ['input_number', 'date_picker']
    },
    {
        id: 4,
        code: 'maxLength',
        message: 'Превышен максимальное допустимое количество символов'
    },
    {
        id: 5,
        code: 'email',
        message: 'Не соответсвует email',
        compatibleDataTypes: ['input_email']
    },
    {
        id: 6,
        code: 'pattern'
    }
];
