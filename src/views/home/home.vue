<template>
    <b-row>
        <b-col cols="2">
            <div class="header">
                <div>Form Builder</div>
            </div>
        </b-col>

        <b-col cols="8">
            <div class="center">
                <div class="header">
                    <div class="float-right">
                        <b-button
                            class="mr-2"
                            size="sm"
                            variant="primary"
                        >
                            預覽
                        </b-button>

                        <b-button
                            class="mr-2"
                            size="sm"
                            variant="secondary"
                        >
                            檢視json
                        </b-button>

                        <b-button
                            class="mr-2"
                            size="sm"
                            variant="info"
                        >
                            清空
                        </b-button>
                    </div>
                </div>
            </div>
        </b-col>

        <b-col cols="2">
            <b-tabs fill>
                <b-tab
                    title="選擇元件"
                    active
                >

                </b-tab>

                <b-tab title="元件屬性">
                    <p>元件屬性</p>
                </b-tab>

            </b-tabs>
        </b-col>
    </b-row>
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

import draggable from 'vuedraggable';

interface IFormBuilderList {
    label: string;
    tag: string;
    type?: string;
    icon: string;
    children?: IFormBuilderList[];
}

@Component({
    components: { draggable },
})
export default class VuePageClass extends Vue {
    //#region Prop
    //#endregion

    //#region Variables
    private formBuilderList: IFormBuilderList[] = [
        {
            label: '顯示元件',
            tag: 'label',
            icon: 'fas fa-laptop ',
            children: [
                {
                    label: 'text',
                    tag: 'div',
                    type: 'text',
                    icon: 'fas fa-font',
                },
            ],
        },
        {
            label: '輸入元件',
            tag: 'label',
            icon: 'fas fa-keyboard ',
            children: [
                {
                    label: 'input text',
                    tag: 'b-input',
                    type: 'text',
                    icon: 'fas fa-edit',
                },
            ],
        },
    ];
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

    private cloneComponent(): void {}
    private onEnd(): void {}
    private addComponent(): void {}

    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
$selected-color: #f6f7ff;
$border-color: #f1e8e8;

::v-deep .col-2,
.col-8 {
    padding: 0;
}

.header {
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid $border-color;

    div {
        margin-left: 2rem;
        font-size: 1rem;
        font-weight: bold;
    }
}

.center {
    height: 100vh;
    border-left: 1px solid $border-color;
    border-right: 1px solid $border-color;
}
</style>
