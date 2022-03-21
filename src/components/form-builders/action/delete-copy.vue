<template>
    <div class="action-item">
        <span
            class="action-item-copy"
            @click="actionCopy"
        >
            <i class="far fa-clone"></i>
        </span>

        <span
            class="action-item-delete"
            @click="actionDelete"
        >
            <i class="far fa-trash-alt"></i>
        </span>
    </div>
</template>

<script lang="ts">
//#region Import
//#region Vue
import { Vue, Component, Prop } from 'vue-property-decorator';
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
export default class DeleteCopy extends Vue {
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
    private actionCopy(): void {
        this.$emit('copy');
    }

    private actionDelete(): void {
        this.$emit('delete');
    }
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
