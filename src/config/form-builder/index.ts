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
                config: {
                    label: '文字',
                    isShowLabel: true,
                    content: '文字內容',
                },
            },
            {
                label: '圖片',
                icon: require('@/assets/icon/image.svg'),
                type: EElementType.display_image,
                config: {},
            },
        ],
    },
    {
        label: '輸入型元件',
        icon: require('@/assets/icon/component.svg'),
        children: [
            {
                label: '單行文字',
                icon: require('@/assets/icon/input.svg'),
                type: EElementType.input_single_text,
                config: {},
            },
            {
                label: '多行文字',
                icon: require('@/assets/icon/textarea.svg'),
                type: EElementType.input_multiple_text,
                config: {},
            },
            {
                label: '數字',
                icon: require('@/assets/icon/number.svg'),
                type: EElementType.input_counter,
                config: {},
            },
            {
                label: '文字編輯器',
                icon: require('@/assets/icon/rich-text.svg'),
                type: EElementType.input_text_editor,
                config: {},
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
                config: {},
            },
            {
                label: '單選',
                icon: require('@/assets/icon/radio.svg'),
                type: EElementType.pick_radio,
                config: {},
            },
            {
                label: '多選',
                icon: require('@/assets/icon/checkbox.svg'),
                type: EElementType.pick_checkbox,
                config: {},
            },
            {
                label: '開關',
                icon: require('@/assets/icon/switch.svg'),
                type: EElementType.pick_switch,
                config: {},
            },
            {
                label: '範圍',
                icon: require('@/assets/icon/slider.svg'),
                type: EElementType.pick_slider,
                config: {},
            },
            {
                label: '時間',
                icon: require('@/assets/icon/time.svg'),
                type: EElementType.pick_time,
                config: {},
            },
            {
                label: '日期',
                icon: require('@/assets/icon/date.svg'),
                type: EElementType.pick_date,
                config: {},
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
                config: {},
            },
        ],
    },
];
