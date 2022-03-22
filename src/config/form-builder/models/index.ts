import { ElementType } from '@/components/form-builders/elements';

export interface IFormBuilderElement {
    label: string;
    icon: string;
    children?: IFormBuilderElementChildren[];
}
export interface IFormBuilderElementChildren extends IFormBuilderElement {
    type: ElementType;
    id: string;
}
