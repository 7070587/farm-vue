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
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 文字位置 </div>

            <multiselect
                v-model="textPositionSelected"
                :options="textPositionOptions"
                :allowEmpty="false"
                track-by="value"
                label="text"
                @input="updateTextPosition"
            >
            </multiselect>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 文字粗細 </div>

            <multiselect
                v-model="textWeightSelected"
                :options="textWeightOptions"
                :allowEmpty="false"
                track-by="value"
                label="text"
                @input="updateTextWeight"
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
                    min="1"
                ></b-form-input>
            </b-input-group>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 文字顏色 </div>

            <b-form-input
                type="color"
                size="sm"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <hr />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 分割線樣式 </div>

            <multiselect
                v-model="dividerStyleSelected"
                :options="dividerStyleOptions"
                :allowEmpty="false"
                track-by="value"
                label="text"
                @input="updateDividerStyle"
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
                ></b-form-input>
            </b-input-group>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 分割線顏色 </div>

            <b-form-input
                type="color"
                size="sm"
            ></b-form-input>
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
import { Model } from '@/config/index';
import { ETextPosition, ETextWeight, EDividerStyle } from '@/components/form-builders/elements';
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
    //#endregion

    //#region Variables
    private textPositionSelected: { value: ETextPosition; text: string } = null;
    private textPositionOptions: { value: ETextPosition; text: string }[] = [
        { value: ETextPosition.left, text: 'Left' },
        { value: ETextPosition.center, text: 'Center' },
        { value: ETextPosition.right, text: 'Right' },
    ];

    private textWeightSelected: { value: ETextWeight; text: string } = null;
    private textWeightOptions: { value: ETextWeight; text: string }[] = [
        { value: ETextWeight.normal, text: 'Normal' },
        { value: ETextWeight.bold, text: 'Bold' },
    ];

    private dividerStyleSelected: { value: EDividerStyle; text: string } = null;
    private dividerStyleOptions: { value: EDividerStyle; text: string }[] = [
        { value: EDividerStyle.solid, text: 'Solid' },
        { value: EDividerStyle.dotted, text: 'Dotted' },
        { value: EDividerStyle.dashed, text: 'Dashed' },
        { value: EDividerStyle.double, text: 'Double' },
    ];
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
    private updateTextPosition(): void {}
    private updateTextWeight(): void {}
    private updateDividerStyle(): void {}
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
