<template>
    <b-row>

        <b-col cols="12">
            <DeleteCopy
                v-if="isActived"
                @actionCopy="actionCopy"
                @actionDelete="actionDelete"
            />
            <div class="divider">
                <div class="divider-text">
                    divider
                </div>
            </div>
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
export default class ComponentDivider extends Vue {
    //#region Prop
    @Prop({
        type: Boolean, // Boolean, Number, String, Array, Object
        default: () => false,
    })
    private isActived: boolean;

    @Prop({
        type: Object, // Boolean, Number, String, Array, Object
        default: () => {},
    })
    private data: object;
    //#endregion

    //#region Variables
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
        this.$emit('actionCopy', this.data);
    }

    private actionDelete(): void {
        this.$emit('actionDelete', this.data);
    }
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
.divider {
    background-color: transparent;
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    margin: 24px 0;
    border: 0;
    border-bottom: 1px;
    border-style: solid;
    border-color: #dcdfe6;
}

.divider-text {
    position: absolute;
    background-color: #fff;
    padding: 0 20px;
    font-weight: 500;
    color: #303133;
    font-size: 14px;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
</style>
