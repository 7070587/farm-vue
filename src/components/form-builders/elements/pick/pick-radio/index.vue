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
                :key="'option-' + index"
                :class="[{'stacked__row': config.isStacked}, {'cursor-pointer' : !isDisabled }]"
                @click="clickContent(item, index)"
            >

                <i
                    v-if="item.unchecked"
                    class="far fa-circle radio"
                ></i>

                <i
                    v-if="item.checked"
                    class="fas fa-dot-circle radio"
                ></i>

                <span> {{ item.text }} </span>
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
import { IConfigPickRadio, IValueTextRadioCheckbox } from '@/components/form-builders/elements/models';
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
    private get config(): IConfigPickRadio {
        let config = this.activedItemData['config'] as IConfigPickRadio;

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
        if (this.isDisabled) return null;

        if (item.checked) {
            this.config.content.checked = false;
            this.config.content.unchecked = true;

            this.uncheckedContent(item, index);
        } else {
            this.config.content.checked = true;
            this.config.content.unchecked = false;

            this.checkedContent(item, index);
        }

        // 數據有更新，元件沒更新
        this.$forceUpdate();
    }

    private checkedContent(item: IValueTextRadioCheckbox, index: number): void {
        this.config.content = item;
        this.config.content.checked = true;
        this.config.content.unchecked = false;

        this.config.options.forEach((element, elImdex) => {
            element.checked = false;
            element.unchecked = true;

            if (index === elImdex) {
                element.checked = true;
                element.unchecked = false;
            }
        });
    }

    private uncheckedContent(item: IValueTextRadioCheckbox, index: number): void {
        this.config.content.checked = false;
        this.config.content.unchecked = true;

        this.config.options.forEach((element, elImdex) => {
            element.checked = false;
            element.unchecked = true;

            if (index === elImdex) {
                element.checked = false;
                element.unchecked = true;
            }
        });
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
::v-deep .form-control:disabled {
    background-color: #fff;
    opacity: 1;
}
</style>
