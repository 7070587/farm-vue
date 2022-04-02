<template>
    <b-row>
        <b-col
            cols="2"
            v-if="config.isShowLabel"
        >
            <div class="label">
                <span
                    v-if="config.isRequired"
                    class="label--required"
                >
                    *
                    <span class="label--required__content"> {{ config.label }}</span>
                </span>

                <span v-else>
                    {{ config.label }}
                </span>

            </div>
        </b-col>

        <b-col :cols="contentCols">
            <DeleteCopy
                v-if="isActived"
                @actionCopy="actionCopy"
                @actionDelete="actionDelete"
            />

            <input
                type="number"
                v-model="config.content"
                class="form-control"
                :placeholder="config.placeholder"
                :max="config.max"
                :min="config.min"
                :step="config.step"
                :disabled="isDisabled"
                @input="updateContent"
            >
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
import { Model } from '@/config/index';
import { IConfigInputNumber } from '@/components/form-builders/elements/models';
import { delay } from '@/components/form-builders/elements/models/function';
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
        type: Boolean, // Boolean, Number, String, Array, Object
        default: () => true,
    })
    private isDisabled: boolean;

    @Prop({
        type: Number, // Boolean, Number, String, Array, Object
        default: () => undefined,
    })
    private index: number;

    @Prop({
        type: Object, // Boolean, Number, String, Array, Object
        default: () => undefined,
    })
    private activedItemData: Model.IFormBuilderElement;
    //#endregion

    //#region Variables
    //#endregion

    //#region Computed
    private get config(): IConfigInputNumber {
        let config = this.activedItemData['config'] as IConfigInputNumber;

        return config;
    }

    private get contentCols(): number {
        return this.config.isShowLabel ? 10 : 12;
    }
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

    private async updateContent(): Promise<void> {
        this.config.content = +this.config.content;
        let isMax: boolean = this.config.max !== null && this.config.max !== undefined;
        let isMin: boolean = this.config.min !== null && this.config.min !== undefined;
        let isContent: boolean = this.config.content !== null && this.config.content !== undefined;

        await delay();

        if (isMin && isContent) {
            if (this.config.content < this.config.min) {
                this.config.content = this.config.min;
            }
        }

        if (isMax && isContent) {
            if (this.config.content > this.config.max) {
                this.config.content = this.config.max;
            }
        }
    }

    private actionCopy(): void {
        this.$emit('actionCopy', this.activedItemData, this.index);
    }

    private actionDelete(): void {
        this.$emit('actionDelete', this.activedItemData, this.index);
    }
    //#endregion

    //#region Other Function

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
::v-deep .form-control:disabled {
    background-color: #fff;
    opacity: 1;
}
</style>
