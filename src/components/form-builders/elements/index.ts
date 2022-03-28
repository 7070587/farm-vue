//#region
import FormBuilderDisplayTextSetting from '@/components/form-builders/elements/display/display-text/index-setting.vue';
import FormBuilderDisplayText from '@/components/form-builders/elements/display/display-text/index.vue';

import FormBuilderDisplayImageSetting from '@/components/form-builders/elements/display/display-image/index-setting.vue';
import FormBuilderDisplayImage from '@/components/form-builders/elements/display/display-image/index.vue';
//#endregion

//#region
import FormBuilderInputSingleTextSetting from '@/components/form-builders/elements/input/input-single-text/index-setting.vue';
import FormBuilderInputSingleText from '@/components/form-builders/elements/input/input-single-text/index.vue';

import FormBuilderInputMultipleTextSetting from '@/components/form-builders/elements/input/input-multiple-text/index-setting.vue';
import FormBuilderInputMultipleText from '@/components/form-builders/elements/input/input-multiple-text/index.vue';

import FormBuilderInputNumberSetting from '@/components/form-builders/elements/input/input-number/index-setting.vue';
import FormBuilderInputNumber from '@/components/form-builders/elements/input/input-number/index.vue';

import FormBuilderInputTextEditorSetting from '@/components/form-builders/elements/input/input-text-editor/index-setting.vue';
import FormBuilderInputTextEditor from '@/components/form-builders/elements/input/input-text-editor/index.vue';
//#endregion

//#region
import FormBuilderPickDropdownListSetting from '@/components/form-builders/elements/pick/pick-dropdown-list/index-setting.vue';
import FormBuilderPickDropdownList from '@/components/form-builders/elements/pick/pick-dropdown-list/index.vue';

import FormBuilderPickRadioSetting from '@/components/form-builders/elements/pick/pick-radio/index-setting.vue';
import FormBuilderPickRadio from '@/components/form-builders/elements/pick/pick-radio/index.vue';

import FormBuilderPickCheckboxSetting from '@/components/form-builders/elements/pick/pick-checkbox/index-setting.vue';
import FormBuilderPickCheckbox from '@/components/form-builders/elements/pick/pick-checkbox/index.vue';

import FormBuilderPickSwitchSetting from '@/components/form-builders/elements/pick/pick-switch/index-setting.vue';
import FormBuilderPickSwitch from '@/components/form-builders/elements/pick/pick-switch/index.vue';

import FormBuilderPickSliderSetting from '@/components/form-builders/elements/pick/pick-slider/index-setting.vue';
import FormBuilderPickSlider from '@/components/form-builders/elements/pick/pick-slider/index.vue';

import FormBuilderPickDateSetting from '@/components/form-builders/elements/pick/pick-date/index-setting.vue';
import FormBuilderPickDate from '@/components/form-builders/elements/pick/pick-date/index.vue';
//#endregion

//#region
import FormBuilderLayoutDividerSetting from '@/components/form-builders/elements/layout/layout-divider/index-setting.vue';
import FormBuilderLayoutDivider from '@/components/form-builders/elements/layout/layout-divider/index.vue';
//#endregion

export enum EElementType {
    /**
     * 顯示型元件
     */
    display_text = 'display_text',
    display_image = 'display_image',

    /**
     * 輸入型元件
     */
    input_single_text = 'input_single_text',
    input_multiple_text = 'input_multiple_text',
    input_number = 'input_number',
    input_text_editor = 'input_text_editor',

    /**
     * 選擇型元件
     */
    pick_dropdown_list = 'pick_dropdown_list',
    pick_radio = 'pick_radio',
    pick_checkbox = 'pick_checkbox',
    pick_switch = 'pick_switch',
    pick_slider = 'pick_slider',
    pick_time = 'pick_time',
    pick_date = 'pick_date',

    /**
     * 布局型元件
     */
    layout_divider = 'layout_divider',
}

export default {
    /**
     * 顯示型元件
     */
    FormBuilderDisplayTextSetting,
    FormBuilderDisplayText,
    FormBuilderDisplayImageSetting,
    FormBuilderDisplayImage,

    /**
     * 輸入型元件
     */
    FormBuilderInputSingleTextSetting,
    FormBuilderInputSingleText,

    FormBuilderInputMultipleTextSetting,
    FormBuilderInputMultipleText,

    FormBuilderInputNumberSetting,
    FormBuilderInputNumber,

    FormBuilderInputTextEditorSetting,
    FormBuilderInputTextEditor,

    /**
     * 選擇型元件
     */
    FormBuilderPickDropdownListSetting,
    FormBuilderPickDropdownList,

    FormBuilderPickRadioSetting,
    FormBuilderPickRadio,

    FormBuilderPickCheckboxSetting,
    FormBuilderPickCheckbox,

    FormBuilderPickSwitchSetting,
    FormBuilderPickSwitch,

    FormBuilderPickSliderSetting,
    FormBuilderPickSlider,

    FormBuilderPickDateSetting,
    FormBuilderPickDate,

    /**
     * 布局型元件
     */
    FormBuilderLayoutDividerSetting,
    FormBuilderLayoutDivider,
};
