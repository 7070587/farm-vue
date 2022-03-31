<template>
    <div>
        <div class="setting--row">
            <span class="setting--row__title"> 單行文字屬性 </span>

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
            <div class="setting--row__lable"> 預設內容 </div>

            <b-form-textarea
                size="sm"
                placeholder="預設內容"
                trim
                rows="5"
                v-model="config.content"
                :maxlength="config.wordLimit"
            ></b-form-textarea>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 輸入字數上限 </div>

            <b-input-group
                size="sm"
                append="字"
            >
                <b-form-input
                    type="number"
                    min="1"
                    placeholder="輸入字數上限"
                    v-model="config.wordLimit"
                    @input="updateWordLimit"
                ></b-form-input>
            </b-input-group>
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
import { IConfigInputMultipleText } from '@/components/form-builders/elements/models';
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
    private get config(): IConfigInputMultipleText {
        let config = this.activedItemData['config'] as IConfigInputMultipleText;

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
    private updateWordLimit(value: string): void {
        if (+value <= 0) {
            this.config.wordLimit = null;
        } else {
            this.config.wordLimit = +value;
        }

        if (this.config.content.length > +this.config.wordLimit) {
            this.config.content = this.config.content.substring(0, this.config.wordLimit);
        }
    }
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
