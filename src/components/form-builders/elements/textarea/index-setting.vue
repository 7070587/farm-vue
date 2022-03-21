<template>
    <div>
        <div class="setting--row">
            <div class="setting--row__lable"> label </div>

            <b-form-input
                size="sm"
                placeholder="label"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> placeholder </div>

            <b-form-input
                size="sm"
                placeholder="placeholder"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> value </div>

            <b-form-textarea
                size="sm"
                placeholder="value"
            ></b-form-textarea>
        </div>
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
export default class ComponentTextareaSetting extends Vue {
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
