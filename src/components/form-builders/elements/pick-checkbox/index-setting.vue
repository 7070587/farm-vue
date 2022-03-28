<template>
    <div>
        <div class="setting--row">
            <span class="setting--row__title"> 多選屬性 </span>

            <hr />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 標題 </div>

            <b-form-input
                size="sm"
                placeholder="標題"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 顯示標題 </div>

            <b-form-checkbox
                size="lg"
                switch
            ></b-form-checkbox>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 是否必填 </div>

            <b-form-checkbox
                size="lg"
                switch
            ></b-form-checkbox>
        </div>

        <div class="setting--row">
            <hr />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 預設選項 </div>

            <b-form-input
                size="sm"
                placeholder="預設選項"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 水平顯示 </div>

            <b-form-checkbox
                size="lg"
                switch
            ></b-form-checkbox>
        </div>

        <div class="setting--row">
            <hr />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 選項配置 </div>

            <b-form-textarea
                size="sm"
                placeholder="鍵入要從中選擇的選項。 將每一個分開一個新行。"
                rows="5"
            ></b-form-textarea>
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
//#endregion

//#region Views
//#endregion

//#region Components
//#endregion

//#region Components Src
//#endregion

//#region Components Views
//#endregion
//#endregion

@Component({
    components: {},
})
export default class ComponentElementSetting extends Vue {
    //#region Prop
    //#endregion

    //#region Variables

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
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
