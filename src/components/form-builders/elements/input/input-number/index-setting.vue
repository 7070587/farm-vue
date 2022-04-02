<template>
    <div>
        <div class="setting--row">
            <span class="setting--row__title"> 數字屬性 </span>

            <hr />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 標題 </div>

            <b-form-input
                size="sm"
                placeholder="標題"
                v-model="config.label"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 顯示標題 </div>

            <toggle-button
                v-model="config.isShowLabel"
                :height='34'
                :width='318'
                :font-size='16'
                :labels="{checked: '顯示', unchecked: '隱藏'}"
                :color=" {checked: '#82C7EB', unchecked: '#BFCBD9'}"
                :sync='true'
            />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 是否必填 </div>

            <toggle-button
                v-model="config.isRequired"
                :height='34'
                :width='318'
                :font-size='16'
                :labels="{checked: '必填', unchecked: '非必填'}"
                :color=" {checked: '#82C7EB', unchecked: '#BFCBD9'}"
                :sync='true'
            />
        </div>

        <div class="setting--row">
            <hr />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 輸入提示 </div>

            <b-form-input
                size="sm"
                placeholder="請輸入文字"
                trim
                v-model="config.placeholder"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 預設值 </div>

            <!-- <b-form-input
                size="sm"
                trim
                placeholder="預設值"
                v-model="config.content"
                :max="config.max"
                :min="config.min"
                :step="config.step"
                @input="updateContent"
            ></b-form-input> -->

            <input
                type="number"
                v-model="config.content"
                class="form-control form-control-sm"
                placeholder="預設值"
                :max="config.max"
                :min="config.min"
                :step="config.step"
                :disabled="false"
                @input="updateContent"
            >

        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 最小值 </div>

            <b-form-input
                type="number"
                size="sm"
                placeholder="最小值"
                v-model="config.min"
                @input="updateMin"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 最大值 </div>

            <b-form-input
                type="number"
                size="sm"
                placeholder="最大值"
                v-model="config.max"
                @input="updateMax"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 增減幅度 </div>

            <b-form-input
                type="number"
                size="sm"
                min="1"
                placeholder="最大值"
                v-model="config.step"
                @input="updateStep"
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
import { IConfigInputNumber } from '@/components/form-builders/elements/models';
import { delay } from '@/components/form-builders/elements/models/function';
//#endregion

//#region Views
//#endregion

//#region Components
//#endregion

//#region Components Src
//#endregion

//#region Components Views
//#endregion

//#region toggle-button
import { ToggleButton } from 'vue-js-toggle-button';
//#endregion
//#endregion

@Component({
    components: { ToggleButton },
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

    //#endregion

    //#region Computed
    private get config(): IConfigInputNumber {
        let config = this.activedItemData['config'] as IConfigInputNumber;

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

    private async updateMin(value: string): Promise<void> {
        this.config.min = +value;

        let isMin: boolean = this.config.min !== null && this.config.min !== undefined;
        let isContent: boolean = this.config.content !== null && this.config.content !== undefined;

        await delay();

        if (isMin && isContent) {
            if (this.config.content < this.config.min) {
                this.config.content = this.config.min;
            }
        }
    }

    private async updateMax(value: string): Promise<void> {
        this.config.max = +value;

        let isMax: boolean = this.config.max !== null && this.config.max !== undefined;
        let isContent: boolean = this.config.content !== null && this.config.content !== undefined;

        await delay();

        if (isMax && isContent) {
            if (this.config.content > this.config.max) {
                this.config.content = this.config.max;
            }
        }
    }

    private updateStep(value: string): void {
        this.config.step = +value;
    }
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
