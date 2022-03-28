<template>
    <div>
        <div class="setting--row">
            <span class="setting--row__title"> 圖片屬性 </span>

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
            <hr />
        </div>

        <b-row class="setting--row">
            <div class="setting--row__lable"> 上傳圖片 </div>

            <b-form-file
                size="sm"
                placeholder="上傳圖片"
                accept="image/png, image/gif, image/jpeg, image/bmp, image/webp"
            ></b-form-file>
        </b-row>

        <div class="setting--row">
            <div class="setting--row__lable"> 圖片寬度 </div>

            <b-input-group
                size="sm"
                append="px"
            >
                <b-form-input
                    type="number"
                    placeholder="圖片寬度"
                    min="1"
                ></b-form-input>
            </b-input-group>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 圖片高度 </div>

            <b-input-group
                size="sm"
                append="px"
            >
                <b-form-input
                    type="number"
                    placeholder="圖片高度"
                    min="1"
                ></b-form-input>
            </b-input-group>
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
