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

            <div
                v-for="(item, index) in config.options"
                class=" cursor-pointer"
                :key="'option-' + index"
                :class="{'stacked__row': config.isStacked }"
                @click="clickContent(item, index)"
            >

                <i
                    v-if="item.unchecked"
                    class="far fa-square checkbox"
                ></i>

                <i
                    v-if="item.checked"
                    class="fas fa-check-square checkbox"
                ></i>

                <span class="mb-1"> {{ item.text }} </span>
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
import { Model } from '@/config/index';
import { IConfigPickCheckbox, IValueTextRadioCheckbox } from '@/components/form-builders/elements/models';
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
        default: () => undefined,
    })
    private activedItemData: Model.IFormBuilderElement;
    //#endregion

    //#region Variables
    //#endregion

    //#region Computed
    private get config(): IConfigPickCheckbox {
        let config = this.activedItemData['config'] as IConfigPickCheckbox;

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
    private clickContent(item: IValueTextRadioCheckbox, index: number): void {
        if (item.checked) {
            this.uncheckedContent(item, index);
        } else {
            this.checkedContent(item, index);
        }
    }

    private checkedContent(item: IValueTextRadioCheckbox, index: number): void {
        this.config.options[index].checked = true;
        this.config.options[index].unchecked = false;

        this.config.content[index].checked = true;
        this.config.content[index].unchecked = false;
    }

    private uncheckedContent(item: IValueTextRadioCheckbox, index: number): void {
        this.config.options[index].checked = false;
        this.config.options[index].unchecked = true;

        this.config.content[index].checked = false;
        this.config.content[index].unchecked = true;
    }

    private actionCopy(): void {
        this.$emit('actionCopy', this.activedItemData, this.index);
    }

    private actionDelete(): void {
        this.$emit('actionDelete', this.activedItemData, this.index);
    }
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
