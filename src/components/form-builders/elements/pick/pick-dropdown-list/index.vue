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

            <multiselect
                v-model="config.content"
                :placeholder="config.placeholder"
                :options="config.options"
                :searchable="config.isSearchable"
                :multiple="config.isMultiple"
                :selectLabel="''"
                :deselectLabel="'X'"
                track-by="value"
                label="text"
                :disabled="false"
                @input="updateContent"
            >
            </multiselect>
        </b-col>
    </b-row>
</template>

<script lang="ts">
//#region Import
//#region Vue
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IConfigPickDropdownList, IValueTextRadioCheckbox } from '@/components/form-builders/elements/models';
//#endregion

//#region Module
//#endregion

//#region Framework
//#endregion

//#region Src
import { Model } from '@/config/index';
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

//#region vue-multiselect
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';
//#endregion
//#endregion

@Component({
    components: { DeleteCopy, Multiselect },
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
    private get config(): IConfigPickDropdownList {
        let config = this.activedItemData['config'] as IConfigPickDropdownList;

        return config;
    }

    private get contentCols(): number {
        return this.config.isShowLabel ? 10 : 12;
    }
    //#endregion
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
    private updateContent(item: IValueTextRadioCheckbox | IValueTextRadioCheckbox[]): void {
        item = item as IValueTextRadioCheckbox[];
        if (this.config.isMultiple) {
            this.config.options.forEach((option) => {
                item = item as IValueTextRadioCheckbox[];
                item.forEach((_item) => {
                    option.checked = false;
                    option.unchecked = true;

                    if (option.value === _item.value) {
                        _item.checked = true;
                        _item.unchecked = false;

                        option = _item;
                    }
                });
            });

            if (item.length === 0) {
                this.config.options.forEach((option) => {
                    option.checked = false;
                    option.unchecked = true;
                });
            }
        } else {
            if (!!item) {
                this.config.options.forEach((element) => {
                    element.checked = false;
                    element.unchecked = true;

                    item = item as IValueTextRadioCheckbox;

                    if (element.value === item.value) {
                        if (item.checked) {
                            element.checked = false;
                            element.unchecked = true;
                        } else {
                            element.checked = true;
                            element.unchecked = false;
                        }

                        this.config.content = element;
                    }
                });
            } else {
                this.config.options.forEach((element) => {
                    element.checked = false;
                    element.unchecked = true;
                });

                this.config.content = null;
            }
        }

        // 數據有更新，元件沒更新
        this.$forceUpdate();
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
::v-deep .multiselect--disabled {
    background: #fff;
    pointer-events: none;
}

::v-deep .multiselect--disabled .multiselect__select {
    background: #fff;
    color: #a6a6a6;
}
</style>
