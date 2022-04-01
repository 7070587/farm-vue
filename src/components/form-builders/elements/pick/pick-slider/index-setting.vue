<template>
    <div>
        <div class="setting--row">
            <span class="setting--row__title"> 範圍屬性 </span>

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
            <div class="setting--row__lable"> 預設值 </div>

            <b-form-input
                type="number"
                size="sm"
                placeholder="預設值"
                v-model="config.content"
            ></b-form-input>
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
                placeholder="增減幅度"
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
import { IConfigPickSlider } from '@/components/form-builders/elements/models';
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
    private get config(): IConfigPickSlider {
        let config = this.activedItemData['config'] as IConfigPickSlider;

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
    private updateMin(value: string): void {
        this.config.min = +value;
    }

    private updateMax(value: string): void {
        this.config.max = +value;
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
