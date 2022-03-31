<template>
    <div>
        <b-modal
            size="lg"
            title="匯入設定"
            v-model="modalShow"
            :hide-footer='true'
            :no-close-on-backdrop='true'
            @hide="hideModel"
            @close="hideModel"
        >
            <b-form-textarea
                :rows="10"
                v-model="configs"
            ></b-form-textarea>

            <div class="flex">
                <b-button
                    variant="primary"
                    @click="importConfigs"
                >
                    確認
                </b-button>
            </div>
        </b-modal>

        <b-modal
            size="md"
            title="設定格式錯誤!"
            v-model="showJsonParseModal"
            :hide-footer='true'
            :no-close-on-backdrop='true'
            @hide="closeJsonParseModal"
            @close="closeJsonParseModal"
        >
            <div class="flex">
                <b-button
                    variant="danger"
                    class="mr-3"
                    @click="closeJsonParseModal"
                >
                    確認
                </b-button>
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
export default class ImportConfig extends Vue {
    //#region Prop
    @Prop({
        type: Boolean, // Boolean, Number, String, Array, Object
        default: () => false,
    })
    private showConfig: boolean;
    //#endregion

    //#region Variables
    private configs: string = '';

    private modalShow: boolean = false;

    private showJsonParseModal: boolean = false;
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
    private async beforeDestroy(): Promise<void> {
        this.configs = '';
    }
    private async destroyed(): Promise<void> {}
    //#endregion

    //#region View Event
    private hideModel(): void {
        this.configs = '';
        this.modalShow = false;
        this.$emit('hideModel', this.modalShow);
    }

    private importConfigs(): void {
        try {
            let configs: object[] = JSON.parse(this.configs);
            this.$emit('importConfigs', configs);

            this.hideModel();
        } catch (e) {
            this.showJsonParseModal = true;
        }
    }

    private closeJsonParseModal(): void {
        this.showJsonParseModal = false;
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
