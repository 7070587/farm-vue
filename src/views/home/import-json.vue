<template>
    <b-modal
        size="lg"
        title="匯入JSON"
        v-model="modalShow"
        :hide-footer='true'
        :no-close-on-backdrop='true'
        @hide="hideModel"
        @close="hideModel"
    >
        <b-form-textarea :rows="10"></b-form-textarea>

        <div class="flex">
            <b-button variant="primary">確認</b-button>
        </div>
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
    components: {},
})
export default class ImportJson extends Vue {
    //#region Prop
    @Prop({
        type: Boolean, // Boolean, Number, String, Array, Object
        default: () => false,
    })
    private showImportJSON: boolean;
    //#endregion

    //#region Variables
    private modalShow: boolean = false;
    //#endregion

    //#region Computed
    //#endregion

    //#region Watch
    @Watch('showImportJSON', { immediate: true, deep: true })
    private showImportJSONChanged(newVal: boolean, oldVal: boolean): void {
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
.flex {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}
</style>
