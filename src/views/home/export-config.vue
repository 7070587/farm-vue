<template>
    <div>
        <b-modal
            size="lg"
            title="匯出設定"
            v-model="modalShow"
            :hide-footer='true'
            :no-close-on-backdrop='true'
            @hide="hideModel"
            @close="hideModel"
        >
            <json-viewer
                :value="configs"
                :expand-depth=5
                :show-double-quotes="true"
                copyable
                boxed
                sort
            ></json-viewer>
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
export default class ExportConfig extends Vue {
    //#region Prop
    @Prop({
        type: Boolean, // Boolean, Number, String, Array, Object
        default: () => false,
    })
    private showConfig: boolean;

    @Prop({
        type: Array, // Boolean, Number, String, Array, Object
        default: () => [],
    })
    private configs: object[];
    //#endregion

    //#region Variables
    private modalShow: boolean = false;
    //#endregion

    //#region Computed
    //#endregion

    //#region Watch
    @Watch('showConfig', { immediate: true, deep: true })
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
