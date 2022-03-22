import { ElementType } from '@/components/form-builders/elements';

import * as Model from './models';

export { Model };

/**
 *
 */
export const FormBuilderElements: Model.IFormBuilder[] = [
    {
        label: '顯示元件',
        icon: 'fas fa-puzzle-piece ',
        children: [
            {
                label: 'text',
                icon: 'fas fa-font',
                type: ElementType.text,
                id: '',
            },
            {
                label: 'image',
                icon: 'fas fa-image',
                type: ElementType.image,
                id: '',
            },
        ],
    },
    {
        label: '輸入元件',
        icon: 'fas fa-puzzle-piece ',
        children: [
            {
                label: 'input',
                icon: 'fas fa-edit',
                type: ElementType.input,
                id: '',
            },
            {
                label: 'textarea',
                icon: 'fas fa-newspaper',
                type: ElementType.textarea,
                id: '',
            },
        ],
    },
    {
        label: '布局元件',
        icon: 'fas fa-puzzle-piece ',
        children: [
            {
                label: 'divider',
                icon: 'fas fa-grip-lines',
                type: ElementType.divider,
                id: '',
            },
        ],
    },
];
