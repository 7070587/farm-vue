import FormBuilderDisplayImageSetting from '@/components/form-builders/elements/display-image/index-setting.vue';
import FormBuilderDisplayImage from '@/components/form-builders/elements/display-image/index.vue';
import FormBuilderDisplayTextSetting from '@/components/form-builders/elements/display-text/index-setting.vue';
import FormBuilderDisplayText from '@/components/form-builders/elements/display-text/index.vue';
import FormBuilderInputMultipleTextSetting from '@/components/form-builders/elements/input-multiple-text/index-setting.vue';
import FormBuilderInputMultipleText from '@/components/form-builders/elements/input-multiple-text/index.vue';
import FormBuilderInputSingleTextSetting from '@/components/form-builders/elements/input-single-text/index-setting.vue';
import FormBuilderInputSingleText from '@/components/form-builders/elements/input-single-text/index.vue';
import FormBuilderLayoutDividerSetting from '@/components/form-builders/elements/layout-divider/index-setting.vue';
import FormBuilderLayoutDivider from '@/components/form-builders/elements/layout-divider/index.vue';

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
    input_counter = 'input_counter',
    input_text_editor = 'input_text_editor',

    /**
     * 選擇型元件
     */
    pick_dropdown_list = 'pick_dropdown_list',
    pick_single = 'pick_single',
    pick_multiple = 'pick_multiple',
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

    /**
     * 選擇型元件
     */

    /**
     * 布局型元件
     */
    FormBuilderLayoutDividerSetting,
    FormBuilderLayoutDivider,
};
