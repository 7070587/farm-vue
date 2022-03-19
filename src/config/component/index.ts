import { ModelsConfigComponent } from './models';

export * from './models';

/**
 *
 */
export const ComponentList: ModelsConfigComponent.IComponentList[] = [
    {
        label: '顯示元件',
        tag: 'label',
        icon: 'fas fa-puzzle-piece ',
        children: [
            {
                label: 'text',
                tag: 'div',
                type: 'text',
                icon: 'fas fa-font',
            },
            {
                label: 'image',
                tag: 'img',
                type: 'image',
                icon: 'fas fa-image',
            },
        ],
    },
    {
        label: '輸入元件',
        tag: 'label',
        icon: 'fas fa-puzzle-piece ',
        children: [
            {
                label: 'input',
                tag: 'b-input',
                type: 'text',
                icon: 'fas fa-edit',
            },
            {
                label: 'textarea',
                tag: 'b-textarea',
                type: 'textarea',
                icon: 'fas fa-newspaper',
            },
        ],
    },
    {
        label: '布局元件',
        tag: 'div',
        icon: 'fas fa-puzzle-piece ',
        children: [
            {
                label: 'divider',
                tag: 'div',
                type: 'divider',
                icon: 'fas fa-grip-lines',
            },
        ],
    },
];
