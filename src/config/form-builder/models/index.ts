import { TFormBuilderElement } from '@/components/form-builders/elements';

export interface IFormBuilderElement extends IFormBuilder {
    id?: string;
}

export interface IFormBuilder {
    label: string;
    icon: string;
    children?: (IFormBuilderElement & TFormBuilderElement)[];
}
