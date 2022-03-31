<template>
    <div>
        <div class="setting--row">
            <span class="setting--row__title"> 分隔線屬性 </span>

            <hr />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 文字 </div>

            <b-form-input
                size="sm"
                placeholder="文字"
                v-model="config.content"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 文字位置 </div>

            <multiselect
                v-model="config.textPosition"
                :options="textPositionOptions"
                :allowEmpty="false"
                :selectLabel="''"
                :deselectLabel="''"
                placeholder="文字位置"
                track-by="value"
                label="text"
            >
            </multiselect>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 文字粗細 </div>

            <multiselect
                v-model="config.fontWeight"
                :options="fontWeightOptions"
                :allowEmpty="false"
                :selectLabel="''"
                :deselectLabel="''"
                placeholder="文字粗細"
                track-by="value"
                label="text"
            >
            </multiselect>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 文字大小 </div>

            <b-input-group
                size="sm"
                append="px"
            >
                <b-form-input
                    type="number"
                    min="12"
                    placeholder="文字大小"
                    v-model="config.fontSize"
                    @input="updateFontSize"
                ></b-form-input>
            </b-input-group>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 文字顏色 </div>

            <b-form-input
                type="color"
                size="sm"
                v-model="config.fontColor"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <hr />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 分割線樣式 </div>

            <multiselect
                v-model="config.dividerStyle"
                :options="dividerStyleOptions"
                :allowEmpty="false"
                :selectLabel="''"
                :deselectLabel="''"
                placeholder="分割線樣式"
                track-by="value"
                label="text"
            >
            </multiselect>

        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 分割線高度 </div>

            <b-input-group
                size="sm"
                append="px"
            >
                <b-form-input
                    type="number"
                    min="1"
                    placeholder="分割線高度"
                    v-model="config.dividerHeight"
                    @input="updateDividerHeight"
                ></b-form-input>
            </b-input-group>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 分割線顏色 </div>

            <b-form-input
                type="color"
                size="sm"
                v-model="config.dividerColor"
            ></b-form-input>
        </div>
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
import { Model } from '@/config/index';
import {
    IConfigLayoutDivider,
    ETextPosition,
    EFontWeight,
    EDividerStyle,
    ITextPosition,
    IFontWeight,
    IDividerStyle,
} from '@/components/form-builders/elements/models';
//#endregion

//#region Views
//#endregion

//#region Components
//#endregion

//#region Components Src
//#endregion

//#region Components Views
//#endregion

//#region vue-multiselect
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';
//#endregion

//#region DatePicker
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
//#endregion
//#endregion

@Component({
    components: { DatePicker, Multiselect },
})
export default class ComponentElementSetting extends Vue {
    //#region Prop
    @Prop({
        type: Object, // Boolean, Number, String, Array, Object
        default: () => undefined,
    })
    private activedItemData: Model.IFormBuilderElement;
    //#endregion

    //#region Variables
    private textPositionOptions: ITextPosition[] = [
        { value: ETextPosition.left, text: 'Left' },
        { value: ETextPosition.center, text: 'Center' },
        { value: ETextPosition.right, text: 'Right' },
    ];

    private fontWeightOptions: IFontWeight[] = [
        { value: EFontWeight.normal, text: 'Normal' },
        { value: EFontWeight.bold, text: 'Bold' },
    ];

    private dividerStyleOptions: IDividerStyle[] = [
        { value: EDividerStyle.solid, text: 'Solid' },
        { value: EDividerStyle.dotted, text: 'Dotted' },
        { value: EDividerStyle.dashed, text: 'Dashed' },
        { value: EDividerStyle.double, text: 'Double' },
    ];
    //#endregion

    //#region Computed
    private get config(): IConfigLayoutDivider {
        let config = this.activedItemData['config'] as IConfigLayoutDivider;

        return config;
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
    private updateFontSize(value: string): void {
        this.config.fontSize = +value;

        if (this.config.fontSize < 12) {
            this.config.fontSize = 12;
        }
    }

    private updateDividerHeight(value: string): void {
        this.config.dividerHeight = +value;
    }

    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
