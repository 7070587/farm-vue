<template>
    <b-modal
        size="lg"
        title="匯出JSON"
        v-model="modalShow"
        :hide-footer='true'
        :no-close-on-backdrop='true'
        @hide="hideModel"
        @close="hideModel"
    >
        <json-viewer
            :value="generateList"
            :expand-depth=5
            :show-double-quotes="true"
            copyable
            boxed
            sort
        ></json-viewer>
    </b-modal>

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
import { Model as FormBuilderModel } from '@/config';
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

import JsonViewer from 'vue-json-viewer';

@Component({
    components: { JsonViewer },
})
export default class ExportJson extends Vue {
    //#region Prop
    @Prop({
        type: Boolean, // Boolean, Number, String, Array, Object
        default: () => false,
    })
    private showExportJSON: boolean;

    @Prop({
        type: Array, // Boolean, Number, String, Array, Object
        default: () => [],
    })
    private generateList: FormBuilderModel.IFormBuilderElement[];
    //#endregion

    //#region Variables
    private modalShow: boolean = false;
    //#endregion

    //#region Computed
    //#endregion

    //#region Watch
    @Watch('showExportJSON', { immediate: true, deep: true })
    private showExportJSONChanged(newVal: boolean, oldVal: boolean): void {
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
