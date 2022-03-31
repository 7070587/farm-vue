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
            <hr />
        </div>

        <b-row class="setting--row">
            <div class="setting--row__lable"> 上傳圖片 </div>

            <b-form-file
                size="sm"
                placeholder="上傳圖片"
                accept="image/png, image/gif, image/jpeg, image/bmp, image/webp"
                @input="uploadImage"
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
                    v-model="config.width"
                    @input="updateWidth"
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
                    v-model="config.height"
                    @input="updateHeight"
                ></b-form-input>
            </b-input-group>
        </div>
    </div>
</template>

<script lang="ts">
//#region Import
//#region Vue
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
//#endregion

//#region Module
import { ServiceBase64 } from 'web-service-base64';
//#endregion

//#region Framework
//#endregion

//#region Src
import { Model } from '@/config/index';
import { IConfigDisplayImage } from '@/components/form-builders/elements/models';
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
    private get config(): IConfigDisplayImage {
        let config = this.activedItemData['config'] as IConfigDisplayImage;

        return config;
    }
    //#endregion

    //#region Watch
    @Watch('activedItemData', { immediate: true, deep: false })
    private activedItemDataChange(newval: Model.IFormBuilderElement, oldval: Model.IFormBuilderElement): void {
        const img = new Image();
        img.onload = () => {
            this.config.widthOriginal = img.width;
            this.config.heightOriginal = img.height;

            if (!this.config.width || !this.config.height) {
                this.config.width = img.width;
                this.config.height = img.height;
            }

            if (!ServiceBase64.isBase64Image(this.config.content)) {
                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext('2d');

                canvas.width = img.width;
                canvas.height = img.height;

                ctx.drawImage(img, 0, 0);

                this.config.content = canvas.toDataURL();
            }
        };
        img.src = this.config.content;
    }
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
    private async uploadImage(file: File): Promise<void> {
        let base64: any = null;
        base64 = await ServiceBase64.getBase64(file);

        const img = new Image();
        img.onload = () => {
            this.config.width = img.width;
            this.config.height = img.height;

            this.config.widthOriginal = img.width;
            this.config.heightOriginal = img.height;
        };
        img.src = base64.result;

        if (base64.result) this.config.content = base64.result;
    }

    private updateWidth(value: string): void {
        this.config.width = +value;
        let proportionWidth: number = +(+value / this.config.widthOriginal).toFixed(2);
        this.config.height = Math.round(this.config.heightOriginal * proportionWidth);
    }
    private updateHeight(value: string): void {
        this.config.height = +value;
        let proportionHeight: number = +(+value / this.config.heightOriginal).toFixed(2);
        this.config.width = Math.round(this.config.widthOriginal * proportionHeight);
    }

    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
