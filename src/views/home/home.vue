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

            <ComponentDivider />

            <div class="generate">
                <draggable
                    class="generate--container"
                    :list="drawingList"
                    :animation="340"
                    :group="{ name: 'componentsGroup' }"
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
                                    :sort="false"
                                    draggable=".components--list__item"
                                    @start="dragcomponentStart"
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
                    <ComponentDividerSetting />
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
import { ComponentList, ModelsConfigComponent as Model } from '@/config';

//#endregion

//#region Views
//#endregion

//#region Components
//#endregion

//#region Components Src
import ComponentDivider from '@/components/form-builders/elements/divider/divider.vue';
import ComponentDividerSetting from '@/components/form-builders/elements/divider/divider-setting.vue';
//#endregion

//#region Components Views
//#endregion
//#endregion

import draggable from 'vuedraggable';

@Component({
    components: {
        draggable,
        ComponentDivider,
        ComponentDividerSetting,
    },
})
export default class VuePageClass extends Vue {
    //#region Prop
    //#endregion

    //#region Variables
    private componentList: Model.IComponentList[] = [];

    private drawingList: Model.IComponentList[] = [];
    //#endregion

    //#region Computed
    //#endregion

    //#region Watch
    //#endregion

    //#region Vue Life
    private async beforeCreate(): Promise<void> {}
    private async created(): Promise<void> {}
    private async beforeMount(): Promise<void> {
        this.initData();
    }
    private async mounted(): Promise<void> {}
    private async beforeDestroy(): Promise<void> {}
    private async destroyed(): Promise<void> {}
    //#endregion

    //#region Init
    private initData(): void {
        this.componentList = ComponentList;
    }
    //#endregion

    //#region View Event
    //#region right
    private addComponent(item: Model.IComponentList): void {
        this.drawingList.push(item);
    }

    private dragcomponentStart(dragItem: any): void {
        console.log(`dragcomponentStart => `, dragItem);
    }

    private dragcomponentEnd(dragItem: any): void {
        console.log(`dragcomponentEnd => `, dragItem);
    }
    //#endregion

    //#region center
    private drawingDragStart(dragItem: any): void {
        console.log(`drawingDragStart => `, dragItem);
    }
    private drawingDragEnd(dragItem: any): void {
        console.log(`drawingDragEnd => `, dragItem);
    }
    //#endregion

    //#endregion

    //#region Other Function

    //#endregion
}
</script>

<style scoped lang="scss">
</style>
