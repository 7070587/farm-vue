<template>
    <div>
        <div class="left header">
            <div>Form Builder</div>
        </div>

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

            <div class="m-3">

                <draggable
                    class="generate-board"
                    :list="drawingList"
                    :animation="340"
                    group="componentsGroup"
                    @start="drawingDragStart"
                    @end="drawingDragEnd"
                >
                    <div
                        v-for="element in drawingList"
                        class="components--body"
                    >
                        <i :class="element.icon"></i> {{ element.label }}
                    </div>
                </draggable>
            </div>

        </div>

        <div class="right">
            <b-tabs fill>
                <b-tab
                    title="選擇元件"
                    active
                >

                    <div class="components">
                        <div class="components--list">
                            <div
                                v-for="(listItem, listIndex) in componentList"
                                :key="listIndex"
                            >
                                <div class="components--title">
                                    <i :class="listItem.icon"></i> {{ listItem.label }}
                                </div>

                                <draggable
                                    class="components--draggable"
                                    :list="listItem.children"
                                    :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
                                    :clone="cloneComponent"
                                    :sort="false"
                                    draggable=".components--list__item"
                                    @end="dragcomponentEnd"
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
                    </div>

                </b-tab>

                <b-tab title="元件屬性">
                    <p>元件屬性</p>
                </b-tab>

            </b-tabs>
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
import PureText from '@/components/form-builders/elements/text/text.vue';
import ComponentInput from '@/components/form-builders/elements/input/input.vue';
import ComponentTextarea from '@/components/form-builders/elements/textarea/textarea.vue';
//#endregion

//#region Components Src
//#endregion

//#region Components Views
//#endregion
//#endregion

import draggable from 'vuedraggable';

interface IComponentList {
    label: string;
    tag: string;
    type?: string;
    icon: string;
    id?: string;
    children?: IComponentList[];
}

@Component({
    components: { draggable, PureText, ComponentInput, ComponentTextarea, ComponentInputSetting },
})
export default class VuePageClass extends Vue {
    //#region Prop
    //#endregion

    //#region Variables
    private componentList: IComponentList[] = [
        {
            label: '顯示元件',
            tag: 'label',
            icon: 'fas fa-puzzle-piece ',
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
            icon: 'fas fa-puzzle-piece ',
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
        {
            label: '布局元件',
            tag: 'div',
            icon: 'fas fa-puzzle-piece ',
            children: [
                {
                    label: 'divider',
                    tag: 'div',
                    type: 'divider',
                    icon: 'fas fa-grip-lines',
                },
            ],
        },
    ];

    private drawingList: IComponentList[] = [];

    private tempActiveData: IComponentList = undefined;

    private idGlobal: number = 100;

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
    //#region right
    private addComponent(item: IComponentList): void {
        const clone = this.deepClone(item);
        this.drawingList.push(clone);
    }

    private cloneComponent(originItem: IComponentList): IComponentList {
        const clone = this.deepClone(originItem);
        this.drawingList.push(clone);

        return clone;
    }

    private dragcomponentEnd(dragItem: any): void {}
    //#endregion

    //#region center
    private drawingDragStart(): void {
        console.log(`drawingDragStart => `);
    }
    private drawingDragEnd(): void {
        console.log(`drawingDragEnd => `);
    }
    //#endregion

    //#endregion

    //#region Other Function
    private deepClone(obj: any): any {
        const _toString = Object.prototype.toString;

        // null, undefined, non-object, function
        if (!obj || typeof obj !== 'object') {
            return obj;
        }

        // DOM Node
        if (obj.nodeType && 'cloneNode' in obj) {
            return obj.cloneNode(true);
        }

        // Date
        if (_toString.call(obj) === '[object Date]') {
            return new Date(obj.getTime());
        }

        // RegExp
        if (_toString.call(obj) === '[object RegExp]') {
            const flags = [];
            if (obj.global) {
                flags.push('g');
            }
            if (obj.multiline) {
                flags.push('m');
            }
            if (obj.ignoreCase) {
                flags.push('i');
            }

            return new RegExp(obj.source, flags.join(''));
        }

        const result = Array.isArray(obj) ? [] : obj.constructor ? new obj.constructor() : {};

        for (const key in obj) {
            result[key] = this.deepClone(obj[key]);
        }

        return result;
    }

    //#endregion
}
</script>

<style scoped lang="scss">
$selected-color: #f6f7ff;
$border-color: #f1e8e8;

.flex {
    display: flex;
}
.left {
    width: 280px;
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;

    &--header {
    }
}

.center {
    height: 100vh;
    width: auto;
    margin: 0 350px 0 260px;
    box-sizing: border-box;
    border-left: 1px solid $border-color;
    border-right: 1px solid $border-color;
}

.right {
    width: 350px;
    position: absolute;
    right: 0;
    top: 0;
    padding-top: 3px;
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
