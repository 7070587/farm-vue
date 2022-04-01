import { EElementType } from '@/components/form-builders/elements';
import { EDateType, ETextPosition, EFontWeight, EDividerStyle, EDateFormat } from '@/components/form-builders/elements/models';

import * as Model from './models';

export { Model };

const DefaultImage = require('@/assets/image-default.svg');

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
                config: {
                    label: '圖片',
                    isShowLabel: true,

                    content: DefaultImage,
                    width: null,
                    height: null,
                    widthOriginal: null,
                    heightOriginal: null,
                },
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
                config: {
                    label: '單行文字',
                    isShowLabel: true,
                    isRequired: false,

                    placeholder: '請輸入單行文字',
                    content: '',
                    wordLimit: null,
                    isShowWordLimit: false,
                },
            },
            {
                label: '多行文字',
                icon: require('@/assets/icon/textarea.svg'),
                type: EElementType.input_multiple_text,
                config: {
                    label: '多行文字',
                    isShowLabel: true,
                    isRequired: false,

                    placeholder: '請輸入多行文字',
                    content: '',
                    wordLimit: null,
                    isShowWordLimit: false,
                },
            },
            {
                label: '數字',
                icon: require('@/assets/icon/number.svg'),
                type: EElementType.input_number,
                config: {
                    label: '數字',
                    isShowLabel: true,
                    isRequired: false,

                    placeholder: '請輸入數字',
                    content: null,
                    max: null,
                    min: null,
                    step: null,
                },
            },
            // {
            //     label: '文字編輯器',
            //     icon: require('@/assets/icon/rich-text.svg'),
            //     type: EElementType.input_text_editor,
            //     config: {
            //         label: '文字編輯器',
            //         isShowLabel: true,
            //         isRequired: false,

            //         placeholder: '請輸入內容',
            //         content: '文字編輯器',
            //     },
            // },
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
                config: {
                    label: '下拉選單',
                    isShowLabel: true,
                    isRequired: false,

                    placeholder: '請選擇',
                    content: null,
                    isSearchable: true,
                    isMultiple: false,
                    options: '',
                },
            },
            {
                label: '單選',
                icon: require('@/assets/icon/radio.svg'),
                type: EElementType.pick_radio,
                config: {
                    label: '單選',
                    isShowLabel: true,
                    isRequired: false,

                    content: { value: '', text: '', checked: false, unchecked: true },
                    isStacked: false,
                    options: [
                        { value: 'option1', text: 'option 1', checked: false, unchecked: true },
                        { value: 'option2', text: 'option 2', checked: false, unchecked: true },
                        { value: 'option3', text: 'option 3', checked: false, unchecked: true },
                    ],
                },
            },
            {
                label: '多選',
                icon: require('@/assets/icon/checkbox.svg'),
                type: EElementType.pick_checkbox,
                config: {
                    label: '多選',
                    isShowLabel: true,
                    isRequired: false,

                    content: [
                        { value: 'option1', text: 'option 1', checked: false, unchecked: true },
                        { value: 'option2', text: 'option 2', checked: false, unchecked: true },
                        { value: 'option3', text: 'option 3', checked: false, unchecked: true },
                    ],
                    isStacked: false,
                    options: [
                        { value: 'option1', text: 'option 1', checked: false, unchecked: true },
                        { value: 'option2', text: 'option 2', checked: false, unchecked: true },
                        { value: 'option3', text: 'option 3', checked: false, unchecked: true },
                    ],
                },
            },
            {
                label: '開關',
                icon: require('@/assets/icon/switch.svg'),
                type: EElementType.pick_switch,
                config: {
                    label: '開關',
                    isShowLabel: true,
                    isRequired: false,

                    content: false,
                    trueText: '',
                    trueColor: '#82C7EB',
                    falseText: '',
                    falseColor: '#BFCBD9',
                    width: 100,
                },
            },
            {
                label: '範圍',
                icon: require('@/assets/icon/slider.svg'),
                type: EElementType.pick_slider,
                config: {
                    label: '範圍',
                    isShowLabel: true,
                    isRequired: false,

                    content: '0',
                    max: null,
                    min: null,
                    step: null,
                },
            },
            {
                label: '日期',
                icon: require('@/assets/icon/date.svg'),
                type: EElementType.pick_date,
                config: {
                    label: '日期',
                    isShowLabel: true,
                    isRequired: false,

                    placeholder: '請選擇日期',
                    type: { value: EDateType.date, text: 'Date' },
                    format: EDateFormat.date_slash_YYYYMMDD,
                    content: new Date(),
                },
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
                config: {
                    content: 'divider',

                    textPosition: { value: ETextPosition.center, text: 'Center' },
                    fontWeight: { value: EFontWeight.normal, text: 'Normal' },
                    fontSize: 14,
                    fontColor: '#303133',
                    dividerStyle: { value: EDividerStyle.solid, text: 'Solid' },
                    dividerHeight: 1,
                    dividerColor: '#dcdfe6',
                },
            },
        ],
    },
];
