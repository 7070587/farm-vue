import { ElementType } from '@/components/form-builders/elements';

export interface IFormBuilderElement {
    label: string;
    icon: string;
    type?: ElementType;
    children?: IFormBuilderElement[];
}
