<template>
    <div>
        <header>
            <div>Form Builder</div>
        </header>

        <div class="home">
            <div class="left"></div>

            <div class="center">

                <div class="behavior">
                    <div class="behavior--item"><i class="far fa-eye"></i> 預覽</div>

                    <div
                        class="behavior--item"
                        @click="behaviorClear"
                    >
                        <i class="far fa-trash-alt"></i> 清空
                    </div>

                    <div class="behavior--item"><i class="fas fa-download"></i> 下載JSON</div>

                    <div class="behavior--item"> <i class="fas fa-upload"></i> 匯入JSON</div>

                </div>

                <div class="generate">
                    <draggable
                        class="generate--container"
                        :list="generateList"
                        :animation="340"
                        :group="{ name: 'formBuilderGroup' }"
                        ghost-class="generate--ghost"
                        @choose="selectIedtem"
                    >
                        <div
                            v-for="(element, index) in generateList"
                            :class="[isActived(element.id, activeId) ? 'generate--row generate--row__selected' : 'generate--row']"
                        >
                            <template v-if="element.type === eElementType.text">
                                <FormBuilderText
                                    :isActived="isActived(element.id, activeId)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.image">
                                <FormBuilderImage
                                    :isActived="isActived(element.id, activeId)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.input">
                                <FormBuilderInput
                                    :isActived="isActived(element.id, activeId)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.textarea">
                                <FormBuilderTextarea
                                    :isActived="isActived(element.id, activeId)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.divider">
                                <FormBuilderDivider
                                    :isActived="isActived(element.id, activeId)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                        </div>

                        <div
                            class="generate--empty"
                            v-if="generateList.length === 0"
                        >
                            請從左側拖曳或點擊添加元件
                        </div>
                    </draggable>

                </div>

            </div>

            <div class="right">
                <FormBuilderList
                    :_generateList="generateList"
                    :_currentTab="currentTab"
                    :_activeData="activeData"
                    @generateList="generateListData"
                />
            </div>
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
import { Model as FormBuilderModel } from '@/config';
import { EElementType } from '@/components/form-builders/elements';
//#endregion

//#region Views
import { Model } from './models';
//#endregion

//#region Components
//#endregion

//#region Components Src
import FormBuilderList from './form-builder-list.vue';
import FormBuilderElement from '@/components/form-builders/elements';
import DeleteCopy from '@/components/form-builders/action/delete-copy.vue';
//#endregion

//#region Components Views
//#endregion
//#endregion

import draggable from 'vuedraggable';

@Component({
    components: {
        draggable,
        FormBuilderList,
        DeleteCopy,
        ...FormBuilderElement,
    },
})
export default class VuePageClass extends Vue {
    //#region Prop
    //#endregion

    //#region Variables
    private generateList: FormBuilderModel.IFormBuilderElement[] = [];

    private activeData: FormBuilderModel.IFormBuilderElement = null;
    private activeId: string = '';

    private eElementType = EElementType;
    private currentTab: Model.ETab = Model.ETab.component;
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

    //#region View Event
    //#region drag
    private selectIedtem(item: any): void {
        this.activeData = this.generateList[item.oldDraggableIndex];
        this.activeId = this.activeData.id;
        this.currentTab = Model.ETab.form;
    }

    private isActived(elementId: string, activeId: string): boolean {
        return elementId === activeId;
    }

    private generateListData(
        generateList: FormBuilderModel.IFormBuilderElement[],
        activeId: string,
        activeData: FormBuilderModel.IFormBuilderElement,
    ): void {
        this.generateList = generateList;
        this.activeId = activeId;
        this.activeData = activeData;

        if (!this.activeData) {
            for (const item of this.generateList) {
                if (item.id === this.activeId) {
                    this.activeData = item;
                }
            }
        }
    }
    //#endregion

    //#region behavior
    private behaviorClear(): void {
        this.generateList = [];
    }
    //#endregion

    //#region action
    private actionCopy(data: FormBuilderModel.IFormBuilderElement, index: number): void {
        let clone: FormBuilderModel.IFormBuilderElement = JSON.parse(JSON.stringify(data));
        clone.id = `form_element_${new Date().getTime()}`;

        this.activeId = clone.id;
        this.activeData = clone;
        this.generateList.splice(index + 1, 0, clone);
    }

    private actionDelete(data: FormBuilderModel.IFormBuilderElement, index: number): void {
        this.generateList.splice(index, 1);

        if (this.generateList.length > 0) {
            if (index - 1 === -1) {
                this.activeId = this.generateList[0].id;
                this.activeData = this.generateList[0];
            } else {
                this.activeId = this.generateList[index - 1].id;
                this.activeData = this.generateList[index - 1];
            }
        }
    }
    //#endregion
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
