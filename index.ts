import { AppGrid } from "./models/Application";

const grid: AppGrid = {
    columnCount: 3,
    items: [
        {
            colSpan: 3,
            fieldId: 1
        },
        {
            grid: {
                columnCount: 1,
                items: [
                    { fieldId: 2 },
                    { fieldId: 3 }
                ]
            }
        },
        {
            colSpan: 2,
            fieldId: 4
        },
        {
            colSpan: 3,
            fieldId: 4
        }
    ]
}