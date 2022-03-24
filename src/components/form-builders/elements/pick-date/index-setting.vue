<template>
    <div>
        <div class="setting--row">
            <span class="setting--row__title"> 日期選擇器屬性 </span>

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
            <div class="setting--row__lable"> 預設日期 </div>

            <b-form-datepicker
                size="sm"
                today-button
                reset-button
                close-button
            ></b-form-datepicker>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 日期類型 </div>

            <b-form-select
                v-model="dateModeSelected"
                :options="dateModeOptions"
                size="sm"
            ></b-form-select>
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
    private dateModeSelected: string = undefined;
    private dateModeOptions: string[] = ['Date', 'Week', 'Month', 'Year', 'DateTime'];
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
