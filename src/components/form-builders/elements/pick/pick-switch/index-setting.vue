<template>
    <div>
        <div class="setting--row">
            <span class="setting--row__title"> 開關屬性 </span>

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
            <div class="setting--row__lable"> 預設選項 </div>

            <toggle-button
                v-model="config.content"
                v-if="showLabel"
                :height='34'
                :width='318'
                :font-size='16'
                :labels="labels"
                :color="color"
                :sync='true'
            />

            <toggle-button
                v-model="config.content"
                v-else
                :height='34'
                :width='318'
                :font-size='16'
                :color="color"
                :sync='true'
            />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 開啟文字 </div>

            <b-form-input
                size="sm"
                placeholder="開啟文字"
                v-model="config.trueText"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 開啟顏色 </div>

            <b-form-input
                type="color"
                size="sm"
                v-model="config.trueColor"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 關閉文字 </div>

            <b-form-input
                size="sm"
                placeholder="關閉文字"
                v-model="config.falseText"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 關閉顏色 </div>

            <b-form-input
                type="color"
                size="sm"
                v-model="config.falseColor"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 開關長度 </div>

            <b-form-input
                type="number"
                size="sm"
                min="50"
                max="1010"
                v-model="config.width"
                @input="updateWidth"
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
import { IConfigPickSwitch } from '@/components/form-builders/elements/models';
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

interface ISwitchOption {
    checked: string;
    unchecked: string;
}

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
    private updateWidth(value: string): void {
        this.config.width = +value;
    }
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
