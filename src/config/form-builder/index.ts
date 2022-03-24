import { EElementType } from '@/components/form-builders/elements';

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
                type: EElementType.display_text,
            },
            {
                label: '圖片',
                icon: require('@/assets/icon/image.svg'),
                type: EElementType.display_image,
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
                type: EElementType.input_single_text,
            },
            {
                label: '多行文字輸入',
                icon: require('@/assets/icon/textarea.svg'),
                type: EElementType.input_multiple_text,
            },
            {
                label: '計數器',
                icon: require('@/assets/icon/number.svg'),
                type: EElementType.input_counter,
            },
            {
                label: '文字編輯器',
                icon: require('@/assets/icon/rich-text.svg'),
                type: EElementType.input_text_editor,
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
                type: EElementType.pick_dropdown_list,
            },
            {
                label: '單選框組',
                icon: require('@/assets/icon/radio.svg'),
                type: EElementType.pick_single,
            },
            {
                label: '多選框組',
                icon: require('@/assets/icon/checkbox.svg'),
                type: EElementType.pick_multiple,
            },
            {
                label: '開關',
                icon: require('@/assets/icon/switch.svg'),
                type: EElementType.pick_switch,
            },
            {
                label: '滑塊',
                icon: require('@/assets/icon/slider.svg'),
                type: EElementType.pick_slider,
            },
            {
                label: '時間選擇器',
                icon: require('@/assets/icon/time.svg'),
                type: EElementType.pick_time,
            },
            {
                label: '日期選擇器',
                icon: require('@/assets/icon/date.svg'),
                type: EElementType.pick_date,
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
                type: EElementType.layout_divider,
            },
        ],
    },
];
