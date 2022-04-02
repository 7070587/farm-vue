<template>
    <div>
        <b-modal
            size="xl"
            title="預覽表單"
            v-model="modalShow"
            :hide-footer='true'
            :no-close-on-backdrop='true'
            @hide="hideModel"
            @close="hideModel"
        >

            <div class="generate">

                <div
                    v-for="(element, index) in configs"
                    class="generate--view"
                >
                    <template v-if="element.type === eElementType.display_text">
                        <FormBuilderDisplayText
                            :index="index"
                            :activedItemData="element"
                            :isDisabled='false'
                        />
                    </template>

                    <template v-else-if="element.type === eElementType.display_image">
                        <FormBuilderDisplayImage
                            :index="index"
                            :activedItemData="element"
                            :isDisabled='false'
                        />
                    </template>

                    <template v-else-if="element.type === eElementType.input_single_text">
                        <FormBuilderInputSingleText
                            :index="index"
                            :activedItemData="element"
                            :isDisabled='false'
                        />
                    </template>

                    <template v-else-if="element.type === eElementType.input_multiple_text">
                        <FormBuilderInputMultipleText
                            :index="index"
                            :activedItemData="element"
                            :isDisabled='false'
                        />
                    </template>

                    <template v-else-if="element.type === eElementType.input_number">
                        <FormBuilderInputNumber
                            :index="index"
                            :activedItemData="element"
                            :isDisabled='false'
                        />
                    </template>

                    <template v-else-if="element.type === eElementType.input_text_editor">
                        <FormBuilderInputTextEditor
                            :index="index"
                            :activedItemData="element"
                            :isDisabled='false'
                        />
                    </template>

                    <template v-else-if="element.type === eElementType.pick_dropdown_list">
                        <FormBuilderPickDropdownList
                            :index="index"
                            :activedItemData="element"
                            :isDisabled='false'
                        />
                    </template>

                    <template v-else-if="element.type === eElementType.pick_radio">
                        <FormBuilderPickRadio
                            :index="index"
                            :activedItemData="element"
                            :isDisabled='false'
                        />
                    </template>

                    <template v-else-if="element.type === eElementType.pick_checkbox">
                        <FormBuilderPickCheckbox
                            :index="index"
                            :activedItemData="element"
                            :isDisabled='false'
                        />
                    </template>

                    <template v-else-if="element.type === eElementType.pick_switch">
                        <FormBuilderPickSwitch
                            :index="index"
                            :activedItemData="element"
                            :isDisabled='false'
                        />
                    </template>

                    <template v-else-if="element.type === eElementType.pick_slider">
                        <FormBuilderPickSlider
                            :index="index"
                            :activedItemData="element"
                            :isDisabled='false'
                        />
                    </template>

                    <template v-else-if="element.type === eElementType.pick_date">
                        <FormBuilderPickDate
                            :index="index"
                            :activedItemData="element"
                            :isDisabled='false'
                        />
                    </template>

                    <template v-else-if="element.type === eElementType.layout_divider">
                        <FormBuilderLayoutDivider
                            :index="index"
                            :activedItemData="element"
                            :isDisabled='false'
                        />
                    </template>
                </div>

            </div>

        </b-modal>
    </div>
</template>

<script lang="ts">
//#region Import
//#region Vue
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
//#endregion

//#region Module
//#endregion

//#region Framework
//#endregion

//#region Src
import FormBuilderElement from '@/components/form-builders/elements';
import { EElementType } from '@/components/form-builders/elements';
//#endregion

//#region Views
//#endregion

//#region Components
//#endregion

//#region Components Src
//#endregion

//#region Components Views
//#endregion
//#endregion

@Component({
    components: { ...FormBuilderElement },
})
export default class Preview extends Vue {
    //#region Prop
    @Prop({
        type: Boolean, // Boolean, Number, String, Array, Object
        default: () => false,
    })
    private showPreview: boolean;

    @Prop({
        type: Array, // Boolean, Number, String, Array, Object
        default: () => [],
    })
    private configs: object[];
    //#endregion

    //#region Variables
    private modalShow: boolean = false;

    private eElementType = EElementType;
    //#endregion

    //#region Computed
    //#endregion

    //#region Watch
    @Watch('showPreview', { immediate: true, deep: true })
    private showConfigChanged(newVal: boolean, oldVal: boolean): void {
        this.modalShow = newVal;
    }
    //#endregion

    //#region Vue Life
    private async beforeCreate(): Promise<void> {}
    private async created(): Promise<void> {}
    private async beforeMount(): Promise<void> {}
    private async mounted(): Promise<void> {}
    private async beforeDestroy(): Promise<void> {}
    private async destroyed(): Promise<void> {}
    //#endregion

    //#region View Event
    private hideModel(): void {
        this.modalShow = false;
        this.$emit('hideModel', this.modalShow);
    }
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
