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

            <toggle-button
                v-model="config.content"
                v-if="showLabel"
                :disabled="isDisabled"
                :height='34'
                :width='config.width'
                :font-size='16'
                :labels="labels"
                :color="color"
                :sync='true'
                @input="updateContent"
            />

            <toggle-button
                v-model="config.content"
                v-else
                :disabled="isDisabled"
                :height='34'
                :width='config.width'
                :font-size='16'
                :color="color"
                :sync='true'
                @input="updateContent"
            />

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
import { IConfigPickSwitch } from '@/components/form-builders/elements/models';
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

//#region toggle-button
import { ToggleButton } from 'vue-js-toggle-button';
//#endregion
//#endregion

interface ISwitchOption {
    checked: string;
    unchecked: string;
}

@Component({
    components: { DeleteCopy, ToggleButton },
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
    private labels: ISwitchOption = {
        checked: '',
        unchecked: '',
    };

    private color: ISwitchOption = {
        checked: '',
        unchecked: '',
    };
    //#endregion

    //#region Computed
    private get config(): IConfigPickSwitch {
        let config = this.activedItemData['config'] as IConfigPickSwitch;

        this.labels.checked = config.trueText;
        this.labels.unchecked = config.falseText;
        this.color.checked = config.trueColor;
        this.color.unchecked = config.falseColor;

        return config;
    }

    private get contentCols(): number {
        return this.config.isShowLabel ? 10 : 12;
    }

    private get showLabel(): boolean {
        return !!this.config.trueText || !!this.config.falseText;
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
    private updateContent(): void {
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
::v-deep .vue-js-switch {
    margin: 0;
}
</style>
