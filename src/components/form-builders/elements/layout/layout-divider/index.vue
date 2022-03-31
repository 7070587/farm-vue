<template>
    <b-row>

        <b-col cols="12">
            <DeleteCopy
                v-if="isActived"
                @actionCopy="actionCopy"
                @actionDelete="actionDelete"
            />

            <div :style="styleListDivider">
                <div :style="styleListDividerText">
                    {{ config.content }}
                </div>
            </div>
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
import { ETextPosition, IConfigLayoutDivider } from '@/components/form-builders/elements/models';
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

interface IStyleListDivider {
    backgroundColor: string;
    position: string;
    display: string;
    width: string;
    height: string;
    margin: string;

    borderBottom: string;
}

interface IStyleListDividerText {
    position: string;
    backgroundColor: string;
    padding: string;

    fontWeight: string;
    color: string;
    fontSize: string;
    left: string;
    right: string;
    transform: string;
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

    private styleListDivider: IStyleListDivider = {
        backgroundColor: 'transparent',
        position: 'relative',
        display: 'block',
        width: '100%',
        height: '0',
        margin: '24px 0',

        borderBottom: '1px solid #dcdfe6',
    };

    private styleListDividerText: IStyleListDividerText = {
        position: 'absolute',
        backgroundColor: '#fff',
        padding: '0 20px',

        fontWeight: 'normal',
        color: '#303133',
        fontSize: '14px',
        left: '50%',
        right: 'unset',
        transform: 'translateX(-50%) translateY(-50%)',
    };

    //#endregion

    //#region Computed
    private get config(): IConfigLayoutDivider {
        let config = this.activedItemData['config'] as IConfigLayoutDivider;

        this.updateStyle(config);

        return config;
    }
    //#endregion

    //#region Watch
    @Watch('activedItemData', { deep: true, immediate: false })
    private activedItemDataChange(newval: Model.IFormBuilderElement, oldval: Model.IFormBuilderElement): void {
        this.updateStyle(this.config);
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
    private updateStyle(config: IConfigLayoutDivider): void {
        let { dividerStyle, dividerHeight, dividerColor, textPosition, fontWeight, fontSize, fontColor }: IConfigLayoutDivider = config;

        this.styleListDivider.borderBottom = `${dividerHeight}px ${dividerStyle.value} ${dividerColor}`;

        this.styleListDividerText.fontWeight = fontWeight.value;
        this.styleListDividerText.color = fontColor;
        this.styleListDividerText.fontSize = `${fontSize}px`;

        let count = dividerHeight / 2;

        console.log(` => `, textPosition);

        switch (textPosition.value) {
            case ETextPosition.left:
                console.log(`left => `);
                this.styleListDividerText.left = '20px';
                this.styleListDividerText.right = 'unset';
                this.styleListDividerText.transform = `translateY(calc(-50% + ${count}px))`;

                console.log(` => `, JSON.parse(JSON.stringify(this.styleListDividerText)));
                break;

            case ETextPosition.right:
                console.log(`right => `);
                this.styleListDividerText.left = 'unset';
                this.styleListDividerText.right = '20px';
                this.styleListDividerText.transform = `translateY(calc(-50% + ${count}px))`;
                break;

            case ETextPosition.center:
            default:
                console.log(`center => `);
                this.styleListDividerText.left = '50%';
                this.styleListDividerText.right = 'unset';
                this.styleListDividerText.transform = `translateX(-50%) translateY(calc(-50% + ${count}px))`;
                break;
        }
    }
    //#endregion
}
</script>

<style scoped lang="scss">
.divider {
    background-color: transparent;
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    margin: 24px 0;
    border: 0;
    border-bottom: 1px;
    border-style: solid;
    border-color: #dcdfe6;
}

.divider-text {
    position: absolute;
    background-color: #fff;
    padding: 0 20px;
    font-weight: normal;
    color: #303133;
    font-size: 14px;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
</style>
