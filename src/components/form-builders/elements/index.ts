import FormBuilderDividerSetting from '@/components/form-builders/elements/divider/index-setting.vue';
import FormBuilderDivider from '@/components/form-builders/elements/divider/index.vue';
import FormBuilderImageSetting from '@/components/form-builders/elements/image/index-setting.vue';
import FormBuilderImage from '@/components/form-builders/elements/image/index.vue';
import FormBuilderInputSetting from '@/components/form-builders/elements/input/index-setting.vue';
import FormBuilderInput from '@/components/form-builders/elements/input/index.vue';
import FormBuilderTextSetting from '@/components/form-builders/elements/text/index-setting.vue';
import FormBuilderText from '@/components/form-builders/elements/text/index.vue';
import FormBuilderTextareaSetting from '@/components/form-builders/elements/textarea/index-setting.vue';
import FormBuilderTextarea from '@/components/form-builders/elements/textarea/index.vue';

export enum ElementType {
    divider = 'divider',
    image = 'image',
    input = 'input',
    text = 'text',
    textarea = 'textarea',
}

export default {
    FormBuilderDividerSetting,
    FormBuilderDivider,
    FormBuilderImageSetting,
    FormBuilderImage,
    FormBuilderInputSetting,
    FormBuilderInput,
    FormBuilderTextSetting,
    FormBuilderText,
    FormBuilderTextareaSetting,
    FormBuilderTextarea,
};
