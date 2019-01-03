import { Translation } from "./Translation";

export interface FieldConstraint extends Translation {
    id: number;    
    code: string;
    message?: string;
}

export interface ConstraintItem extends FieldConstraint {
    compatibleFieldTypes?: string[];
}

export const constraints: ConstraintItem[] = [
    {
        id: 1,
        code: 'required',
        message: 'Обязательное поле',
        locales: [
            {
                language: 'kk',
                value: ''
            },
            {
                language: 'kk',
                value: ''
            },
            {
                language: 'kk',
                value: ''
            }
        ]
    },
    {
        id: 2,
        code: 'max',
        message: 'Превышен максимальное допустимое число',
        compatibleFieldTypes: ['input_number', 'date_picker']
    },
    {
        id: 3,
        code: 'min',
        compatibleFieldTypes: ['input_number', 'date_picker']
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
        compatibleFieldTypes: ['input_email']
    },
    {
        id: 6,
        code: 'pattern'
    }
];
