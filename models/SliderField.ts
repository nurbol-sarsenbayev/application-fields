import { Field } from "./Field";

export interface SliderField extends Field {
    settings: SliderSettings;
    slides: any[];
    value: string;
}

export interface Slide {
    id: number;
    absolutePath: string;
    text: string;
}

export interface SliderSettings {
    dots?: boolean;
    focusOnSelect?: boolean;
    centerMode?: boolean;
    infinite?: boolean;
    slidesToShow?: number;
    swipe?: boolean;
    swipeToSlide?: boolean;
    speed?: number;
}