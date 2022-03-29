<template>
    <div>
        <div class="setting--row">
            <span class="setting--row__title"> 文字屬性 </span>

            <hr />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 標題 </div>

            <b-form-input
                size="sm"
                placeholder="標題"
                v-model="activedItem.config.label"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 顯示標題 </div>

            <toggle-button
                v-model="model"
                :height='34'
                :width='318'
                :font-size='16'
                :labels="{checked: '顯示', unchecked: '隱藏'}"
                :color=" {checked: '#82C7EB', unchecked: '#BFCBD9'}"
                :sync='true'
            />
        </div>

        <div class="setting--row">
            <hr />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 內容 </div>

            <b-form-textarea
                size="sm"
                placeholder="內容"
                rows="5"
                v-model="activedItem.config.content"
            ></b-form-textarea>
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
    private get activedItem(): Model.IFormBuilderElement {
        return this.activedItemData;
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
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
