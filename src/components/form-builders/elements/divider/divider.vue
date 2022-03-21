<template>
    <b-row
        class="generate--row"
        :class="{ 'generate--row__selected': isActived }"
    >

        <b-col cols="10">
            <DeleteCopy />
            <div class="divider">
                <div class="divider-text">
                    divider
                </div>
            </div>
        </b-col>
    </b-row>
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

@Component({
    components: { DeleteCopy },
})
export default class ComponentDivider extends Vue {
    //#region Prop
    @Prop({
        type: Boolean, // Boolean, Number, String, Array, Object
        default: () => false,
    })
    private isActived: boolean;
    //#endregion

    //#region Variables
    private DefaultImage = require('@/assets/image-default.svg');

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
.divider {
    background-color: transparent;
    position: relative;
    display: block;
    width: 120.5%;
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
    font-weight: 500;
    color: #303133;
    font-size: 14px;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
</style>
