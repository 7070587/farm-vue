<template>
    <b-row>
        <b-col
            cols="2"
            v-if="config.isShowLabel"
        >
            <div class="label"> {{ config.label }} </div>
        </b-col>

        <b-col :cols="contentCols">
            <DeleteCopy
                v-if="isActived"
                @actionCopy="actionCopy"
                @actionDelete="actionDelete"
            />

            <img
                :src="config.content"
                :style="styleList"
            ></img>
        </b-col>
    </b-row>
</template>

<script lang="ts">
//#region Import
//#region Vue
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
//#endregion

//#region Module
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
import DeleteCopy from '@/components/form-builders/action/delete-copy.vue';
//#endregion

//#region Components Views
//#endregion
//#endregion

interface IStyleList {
    width: string;
    height: string;
}

@Component({
    components: { DeleteCopy },
})
export default class ComponentElement extends Vue {
    //#region Prop
    @Prop({
        type: Boolean, // Boolean, Number, String, Array, Object
        default: () => false,
    })
    private isActived: boolean;

    @Prop({
        type: Number, // Boolean, Number, String, Array, Object
        default: () => undefined,
    })
    private index: number;

    @Prop({
        type: Object, // Boolean, Number, String, Array, Object
        default: () => undefined,
    })
    private activedItemData: Model.IFormBuilderElement;
    //#endregion

    //#region Variables
    private styleList: IStyleList = {
        width: '',
        height: '',
    };
    //#endregion

    //#region Computed
    private get config(): IConfigDisplayImage {
        let config = this.activedItemData['config'] as IConfigDisplayImage;

        this.styleList.width = `${config.width}px`;
        this.styleList.height = `${config.height}px`;

        return config;
    }

    private get contentCols(): number {
        return this.config.isShowLabel ? 10 : 12;
    }
    //#endregion

    //#region Watch
    @Watch('activedItemData', { deep: true, immediate: false })
    private activedItemDataChange(newval: Model.IFormBuilderElement, oldval: Model.IFormBuilderElement): void {
        this.styleList.width = `${this.config.width}px`;
        this.styleList.height = `${this.config.height}px`;
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
    private actionCopy(): void {
        this.$emit('actionCopy', this.activedItemData, this.index);
    }

    private actionDelete(): void {
        this.$emit('actionDelete', this.activedItemData, this.index);
    }
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
