export interface Translation {
    translationId?: number;
    locales: Locale [];
}

export interface Locale {
    language: string,
    value: string
}

