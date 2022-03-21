<template>
    <div>
        <b-row class="setting--row">
            <b-col cols="2">
                <div class="d-flex flex-column justify-content-start align-items-end w-100 h-100"> upload </div>
            </b-col>

            <b-col cols="10">
                <b-form-file placeholder="upload image"></b-form-file>
            </b-col>
        </b-row>

        <b-row class="setting--row">
            <b-col cols="2">
                <div class="d-flex flex-column justify-content-start align-items-end w-100 h-100"> width </div>
            </b-col>

            <b-col cols="10">
                <b-form-input
                    placeholder="width"
                    type="number"
                    min="1"
                ></b-form-input>
            </b-col>
        </b-row>

        <b-row class="setting--row">
            <b-col cols="2">
                <div class="d-flex flex-column justify-content-start align-items-end w-100 h-100"> height </div>
            </b-col>

            <b-col cols="10">
                <b-form-input
                    placeholder="height"
                    type="number"
                    min="1"
                ></b-form-input>
            </b-col>
        </b-row>
    </div>

</template>

<script lang="ts">
//#region Import
//#region Vue
import { Vue, Component } from 'vue-property-decorator';
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
import DeleteCopy from '@/components/form-builders/action/delete-copy.vue';
//#endregion

//#region Components Views
//#endregion
//#endregion

@Component({
    components: { DeleteCopy },
})
export default class ComponentImageSetting extends Vue {
    //#region Prop
    //#endregion

    //#region Variables

    //#endregion

    //#region Computed
    //#endregion

    //#region Watch
    //#endregion

    //#region Vue Life
    private async beforeCreate(): Promise<void> {}
    private async created(): Promise<void> {}
    private async beforeMount(): Promise<void> {}
    private async mounted(): Promise<void> {}
    private async beforeDestroy(): Promise<void> {}
    private async destroyed(): Promise<void> {}
    //#endregion

    //#region Init
    //#endregion

    //#region View Event
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
