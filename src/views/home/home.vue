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

                    <div class="components--list">
                        <div
                            v-for="(listItem, listIndex) in formBuilderList"
                            :key="listIndex"
                        >
                            <div class="components--title">
                                <i :class="listItem.icon"></i> {{ listItem.label }}
                            </div>

                            <draggable
                                class="components--draggable"
                                :list="listItem.list"
                                :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
                                :clone="cloneComponent"
                                :sort="false"
                                draggable=".components--list__item"
                                @end="onEnd"
                            >
                                <div
                                    v-for="(element, index) in listItem.children"
                                    :key="index"
                                    class="components--list__item"
                                    @click="addComponent(element)"
                                >
                                    <div class="components--body">
                                        <i :class="element.icon"></i> {{ element.label }}
                                    </div>
                                </div>
                            </draggable>
                        </div>
                    </div>

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
                    icon: 'fas fa-image',
                },
                {
                    label: 'image',
                    tag: 'img',
                    type: 'image',
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
                    label: 'input',
                    tag: 'b-input',
                    type: 'text',
                    icon: 'fas fa-edit',
                },
                {
                    label: 'textarea',
                    tag: 'b-textarea',
                    type: 'textarea',
                    icon: 'fas fa-newspaper',
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

.components {
    &--list {
        padding: 8px;
        box-sizing: border-box;
        height: 100%;

        &__item {
            display: inline-block;
            width: 48%;
            margin: 1%;
            transition: transform 0ms !important;
        }
    }

    &--draggable {
        padding-bottom: 20px;
    }

    &--title {
        font-size: 14px;
        color: #222;
        margin: 6px 2px;
    }

    &--body {
        padding: 8px 10px;
        background: $selected-color;
        font-size: 12px;
        cursor: move;
        border: 1px dashed $selected-color;
        border-radius: 3px;
        .svg-icon {
            color: #777;
            font-size: 15px;
        }
        &:hover {
            border: 1px dashed #787be8;
            color: #787be8;
        }
    }
}
</style>
