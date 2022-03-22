import { ElementType } from '@/components/form-builders/elements';

import * as Model from './models';

export { Model };

/**
 *
 */
export const FormBuilderElements: Model.IFormBuilder[] = [
    {
        label: '顯示型元件',
        icon: require('@/assets/icon/component.svg'),
        children: [
            {
                label: '文字',
                icon: require('@/assets/icon/text.svg'),
                type: ElementType.text,
            },
            {
                label: '圖片',
                icon: require('@/assets/icon/image.svg'),
                type: ElementType.image,
            },
        ],
    },
    {
        label: '輸入型元件',
        icon: require('@/assets/icon/component.svg'),
        children: [
            {
                label: '單行文字輸入',
                icon: require('@/assets/icon/input.svg'),
                type: ElementType.input,
            },
            {
                label: '多行文字輸入',
                icon: require('@/assets/icon/textarea.svg'),
                type: ElementType.textarea,
            },
            {
                label: '計數器',
                icon: require('@/assets/icon/number.svg'),
                type: ElementType.textarea,
            },
            {
                label: '編輯器',
                icon: require('@/assets/icon/rich-text.svg'),
                type: ElementType.textarea,
            },
        ],
    },
    {
        label: '選擇型元件',
        icon: require('@/assets/icon/component.svg'),
        children: [
            {
                label: '下拉選單',
                icon: require('@/assets/icon/select.svg'),
                type: ElementType.input,
            },
            {
                label: '單選框組',
                icon: require('@/assets/icon/radio.svg'),
                type: ElementType.textarea,
            },
            {
                label: '多選框組',
                icon: require('@/assets/icon/checkbox.svg'),
                type: ElementType.textarea,
            },
            {
                label: '開關',
                icon: require('@/assets/icon/switch.svg'),
                type: ElementType.textarea,
            },
            {
                label: '滑塊',
                icon: require('@/assets/icon/slider.svg'),
                type: ElementType.textarea,
            },
            {
                label: '時間選擇',
                icon: require('@/assets/icon/time.svg'),
                type: ElementType.textarea,
            },
            {
                label: '日期選擇',
                icon: require('@/assets/icon/date.svg'),
                type: ElementType.textarea,
            },
        ],
    },
    {
        label: '布局型元件',
        icon: require('@/assets/icon/component.svg'),
        children: [
            {
                label: '分隔線',
                icon: require('@/assets/icon/divider.svg'),
                type: ElementType.divider,
            },
        ],
    },
];
