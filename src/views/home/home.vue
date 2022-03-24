<template>
    <div>
        <div class="form-builder-header">
            <div>Form Builder</div>
        </div>

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

                    <div
                        class="behavior--item"
                        @click="behaviorExportJSON"
                    ><i class="fas fa-download"></i> 匯出JSON</div>

                    <div
                        class="behavior--item"
                        @click="behaviorImportJSON"
                    > <i class="fas fa-upload"></i> 匯入JSON</div>

                </div>

                <div class="generate">
                    <draggable
                        class="generate--container"
                        :list="generateList"
                        :animation="340"
                        :group="{ name: 'formBuilderGroup' }"
                        ghost-class="generate--ghost"
                        @choose="selectedItem"
                    >
                        <div
                            v-for="(element, index) in generateList"
                            :class="[isActived(element.id) ? 'generate--row generate--row__selected' : 'generate--row']"
                        >
                            <template v-if="element.type === eElementType.display_text">
                                <FormBuilderDisplayText
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.display_image">
                                <FormBuilderDisplayImage
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.input_single_text">
                                <FormBuilderInputSingleText
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.input_multiple_text">
                                <FormBuilderInputMultipleText
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.input_counter">
                                <FormBuilderInputCounter
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.input_text_editor">
                                <FormBuilderInputTextEditor
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.pick_dropdown_list">
                                <FormBuilderPickDropdownList
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.pick_radio">
                                <FormBuilderPickRadio
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.pick_checkbox">
                                <FormBuilderPickCheckbox
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.pick_switch">
                                <FormBuilderPickSwitch
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.pick_slider">
                                <FormBuilderPickSlider
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.pick_time">
                                <FormBuilderPickTime
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.pick_date">
                                <FormBuilderPickDate
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.layout_divider">
                                <FormBuilderLayoutDivider
                                    :isActived="isActived(element.id)"
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
                            請從右側拖曳或點擊添加元件
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

        <ExportJson
            :_modalShow="showExportJSON"
            :generateList="generateList"
            @hideModel="hideExportJSON"
        />

        <ImportJson
            :_modalShow="showImportJSON"
            @hideModel="hideImportJSON"
        />

        <b-modal
            size="md"
            title="確認清空嘛？"
            v-model="showDeleteConfirm"
            :hide-footer='true'
            :no-close-on-backdrop='true'
            @hide="cancelClear"
            @close="cancelClear"
        >

            <div class="flex">
                <b-button
                    variant="danger"
                    class="mr-3"
                    @click="confirmClear"
                >
                    確認
                </b-button>

                <b-button @click="cancelClear">
                    取消
                </b-button>
            </div>
        </b-modal>

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
import FormBuilderElement from '@/components/form-builders/elements';
import DeleteCopy from '@/components/form-builders/action/delete-copy.vue';
//#endregion

//#region Components Views
import FormBuilderList from './form-builder-list.vue';
import ExportJson from './export-json.vue';
import ImportJson from './import-json.vue';
//#endregion
//#endregion

import draggable from 'vuedraggable';

@Component({
    components: {
        draggable,
        FormBuilderList,
        DeleteCopy,
        ExportJson,
        ImportJson,
        ...FormBuilderElement,
    },
})
export default class VuePageClass extends Vue {
    //#region Prop
    //#endregion

    //#region Variables
    private generateList: FormBuilderModel.IFormBuilderElement[] = [];

    private activeData: FormBuilderModel.IFormBuilderElement = null;

    private showDeleteConfirm: boolean = false;
    private showExportJSON: boolean = false;
    private showImportJSON: boolean = false;

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
    private selectedItem(item: any): void {
        this.activeData = this.generateList[item.oldDraggableIndex];
        // this.currentTab = Model.ETab.form;
    }

    private isActived(elementId: string): boolean {
        if (!this.activeData) {
            return false;
        }

        return elementId === this.activeData.id;
    }

    private generateListData(generateList: FormBuilderModel.IFormBuilderElement[], activeData: FormBuilderModel.IFormBuilderElement): void {
        this.generateList = generateList;
        this.activeData = activeData;

        if (!!this.activeData) {
            for (const item of this.generateList) {
                if (item.id === this.activeData.id) {
                    this.activeData = item;
                }
            }
        }
    }
    //#endregion

    //#region behavior
    private behaviorClear(): void {
        this.showDeleteConfirm = true;
    }

    private behaviorExportJSON(): void {
        this.showExportJSON = true;
    }

    private behaviorImportJSON(): void {
        this.showImportJSON = true;
    }

    private cancelClear(): void {
        this.showDeleteConfirm = false;
    }

    private confirmClear(): void {
        this.showDeleteConfirm = false;
        this.generateList = [];
    }

    private hideExportJSON(modalShow: boolean): void {
        this.showExportJSON = modalShow;
    }

    private hideImportJSON(modalShow: boolean): void {
        this.showImportJSON = modalShow;
    }
    //#endregion

    //#region action
    private actionCopy(data: FormBuilderModel.IFormBuilderElement, index: number): void {
        let clone: FormBuilderModel.IFormBuilderElement = JSON.parse(JSON.stringify(data));
        clone.id = `form_element_${new Date().getTime()}`;

        this.activeData = clone;
        this.generateList.splice(index + 1, 0, clone);
    }

    private actionDelete(data: FormBuilderModel.IFormBuilderElement, index: number): void {
        this.generateList.splice(index, 1);
        this.activeData = null;

        // if (this.generateList.length > 0) {
        //     if (index - 1 === -1) {
        //         this.activeId = this.generateList[0].id;
        //         this.activeData = this.generateList[0];
        //     } else {
        //         this.activeId = this.generateList[index - 1].id;
        //         this.activeData = this.generateList[index - 1];
        //     }
        // }
    }
    //#endregion
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
.flex {
    display: flex;
    justify-content: center;
}
</style>
