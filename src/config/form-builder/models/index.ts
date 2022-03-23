import { EElementType } from '@/components/form-builders/elements';

export interface IFormBuilder {
    label: string;
    icon: string;
    children?: IFormBuilderElement[];
}

export interface IFormBuilderElement extends IFormBuilder {
    type: EElementType;
    id?: string;
}
