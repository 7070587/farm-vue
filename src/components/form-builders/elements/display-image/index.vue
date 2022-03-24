<template>
    <b-row>

        <b-col cols="2">
            <div class="d-flex flex-column justify-content-center align-items-end w-100 h-100"> image </div>
        </b-col>

        <b-col cols="10">
            <DeleteCopy
                v-if="isActived"
                @actionCopy="actionCopy"
                @actionDelete="actionDelete"
            />
            <img :src="DefaultImage"></img>
        </b-col>
    </b-row>
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
import { Model as FormBuilderModel } from '@/config';
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
export default class ComponentElement extends Vue {
    //#region Prop
    @Prop({
        type: Boolean, // Boolean, Number, String, Array, Object
        default: () => false,
    })
    private isActived: boolean;

    @Prop({
        type: Number, // Boolean, Number, String, Array, Object
        default: () => undefined,
    })
    private index: number;

    @Prop({
        type: Object, // Boolean, Number, String, Array, Object
        default: () => {},
    })
    private data: object;
    //#endregion

    //#region Variables
    private DefaultImage = require('@/assets/image-default.svg');
    //#endregion

    //#region Computed
    //#endregion

    //#region Watch
    private dataChanged(newVal: FormBuilderModel.IFormBuilderElement, oldVal: FormBuilderModel.IFormBuilderElement): void {}
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
        this.$emit('actionCopy', this.data, this.index);
    }

    private actionDelete(): void {
        this.$emit('actionDelete', this.data, this.index);
    }
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
