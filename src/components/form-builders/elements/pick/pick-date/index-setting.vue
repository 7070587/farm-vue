<template>
    <div>
        <div class="setting--row">
            <span class="setting--row__title"> 日期屬性 </span>

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
                v-model="config.placeholder"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 日期類型 </div>

            <multiselect
                v-model="config.type"
                :options="dateTypeOptions"
                :allowEmpty="false"
                :selectLabel="''"
                :deselectLabel="''"
                placeholder="日期類型"
                track-by="value"
                label="text"
                @input="updateDateType"
            >
            </multiselect>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> {{ defaultValueLabel }} </div>

            <date-picker
                v-model="config.content"
                :append-to-body="false"
                :type="config.type.value"
                :format="config.format"
                :title-format="config.format"
                :placeholder="defaultValueLabel"
                @clear="clearDate"
            ></date-picker>
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
import { EDateType, EDateFormat, IDateType, IConfigPickDate } from '@/components/form-builders/elements/models';
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
    components: { ToggleButton, Multiselect, DatePicker },
})
export default class ComponentElementSetting extends Vue {
    //#region Prop
    @Prop({
        type: Object, // Boolean, Number, String, Array, Object
        default: () => undefined,
    })
    private activedItemData: Model.IFormBuilderElement; //#endregion

    //#region Variables
    dateTypeOptions: IDateType[] = [
        { value: EDateType.time, text: 'Time' },
        { value: EDateType.date, text: 'Date' },
        { value: EDateType.month, text: 'Month' },
        { value: EDateType.year, text: 'Year' },
        { value: EDateType.datetime, text: 'DateTime' },
    ];

    private defaultValueLabel: string = '預設日期';
    //#endregion

    //#region Computed
    private get config(): IConfigPickDate {
        let config = this.activedItemData['config'] as IConfigPickDate;

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
    private updateDateType(date: { value: EDateType; text: string }): void {
        this.config.content = new Date();

        switch (date.value) {
            case EDateType.time:
                this.defaultValueLabel = '預設時間';
                this.config.format = EDateFormat.timeHHmmss;
                break;
            case EDateType.date:
                this.defaultValueLabel = '預設日期';
                this.config.format = EDateFormat.date_slash_YYYYMMDD;
                break;
            case EDateType.month:
                this.defaultValueLabel = '預設月份';
                this.config.format = EDateFormat.month;
                break;
            case EDateType.year:
                this.defaultValueLabel = '預設年份';
                this.config.format = EDateFormat.year;
                break;
            case EDateType.datetime:
                this.defaultValueLabel = '預設日期時間';
                this.config.format = EDateFormat.datetime_slash_YYYYMMDDHHmmss;
                break;
        }
    }

    private clearDate(): void {
        this.config.content = new Date();
    }
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
::v-deep .mx-datepicker {
    width: 318px;
}
</style>
