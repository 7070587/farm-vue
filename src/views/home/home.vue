<template>
    <div>
        <div class="form-builder-header">
            <div>Form Builder</div>
        </div>

        <div class="home">
            <div class="left"></div>

            <div class="center">

                <div class="behavior">
                    <div
                        class="behavior--item"
                        @click="behaviorView"
                    >
                        <i class="far fa-eye"></i> 預覽
                    </div>

                    <div
                        class="behavior--item"
                        @click="behaviorClear"
                    >
                        <i class="far fa-trash-alt"></i> 清空
                    </div>

                    <div
                        class="behavior--item"
                        @click="behaviorExportConfig"
                    ><i class="fas fa-download"></i> 匯出設定</div>

                    <div
                        class="behavior--item"
                        @click="behaviorImportConfig"
                    > <i class="fas fa-upload"></i> 匯入設定</div>

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
                                    :activedItemData="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.display_image">
                                <FormBuilderDisplayImage
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :activedItemData="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.input_single_text">
                                <FormBuilderInputSingleText
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :activedItemData="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.input_multiple_text">
                                <FormBuilderInputMultipleText
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :activedItemData="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.input_number">
                                <FormBuilderInputNumber
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :activedItemData="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.input_text_editor">
                                <FormBuilderInputTextEditor
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :activedItemData="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.pick_dropdown_list">
                                <FormBuilderPickDropdownList
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :activedItemData="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.pick_radio">
                                <FormBuilderPickRadio
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :activedItemData="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.pick_checkbox">
                                <FormBuilderPickCheckbox
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :activedItemData="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.pick_switch">
                                <FormBuilderPickSwitch
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :activedItemData="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.pick_slider">
                                <FormBuilderPickSlider
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :activedItemData="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.pick_date">
                                <FormBuilderPickDate
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :activedItemData="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === eElementType.layout_divider">
                                <FormBuilderLayoutDivider
                                    :isActived="isActived(element.id)"
                                    :index="index"
                                    :activedItemData="element"
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
                    :generateListData="generateList"
                    :activedItemData="activedItem"
                    :currentTabData="currentTab"
                    @generateList="updateGenerateList"
                />
            </div>
        </div>

        <Preview
            :showPreview="showPreview"
            :configs="exportConfigs"
            @hideModel="hidePreView"
        />

        <ExportConfig
            :showConfig="showExportConfig"
            :configs="exportConfigs"
            @hideModel="hideExportConfig"
        />

        <ImportConfig
            :showConfig="showImportConfig"
            @hideModel="hideImportConfig"
            @importConfigs="importConfigs"
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
import { FormBuilderElements, Model as FormBuilderModel } from '@/config';
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
import ExportConfig from './export-config.vue';
import ImportConfig from './import-config.vue';
import Preview from './preview.vue';
//#endregion
//#endregion

import draggable from 'vuedraggable';

@Component({
    components: {
        draggable,
        FormBuilderList,
        DeleteCopy,
        ExportConfig,
        ImportConfig,
        Preview,
        ...FormBuilderElement,
    },
})
export default class VuePageClass extends Vue {
    //#region Prop
    //#endregion

    //#region Variables
    private generateList: FormBuilderModel.IFormBuilderElement[] = [];

    private activedItem: FormBuilderModel.IFormBuilderElement = null;

    private showDeleteConfirm: boolean = false;
    private showExportConfig: boolean = false;
    private showImportConfig: boolean = false;
    private showPreview: boolean = false;

    private eElementType = EElementType;
    private currentTab: Model.ETab = Model.ETab.component;
    //#endregion

    //#region Computed
    private get exportConfigs(): object[] {
        let configs: FormBuilderModel.IFormBuilderElement[] = JSON.parse(JSON.stringify(this.generateList));
        for (let config of configs) {
            delete config.label;
            delete config.icon;
        }

        return configs;
    }
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
        this.activedItem = this.generateList[item.oldDraggableIndex];
        // this.currentTab = Model.ETab.form;
    }

    private isActived(elementId: string): boolean {
        if (!this.activedItem) {
            return false;
        }

        return elementId === this.activedItem.id;
    }

    private updateGenerateList(generateList: FormBuilderModel.IFormBuilderElement[], activedItem: FormBuilderModel.IFormBuilderElement): void {
        this.generateList = generateList;
        this.activedItem = activedItem;

        if (!!this.activedItem) {
            for (const item of this.generateList) {
                if (item.id === this.activedItem.id) {
                    this.activedItem = item;
                }
            }
        }
    }
    //#endregion

    //#region behavior
    private behaviorView(): void {
        this.showPreview = true;
    }

    private behaviorClear(): void {
        this.showDeleteConfirm = true;
    }

    private behaviorExportConfig(): void {
        this.showExportConfig = true;
    }

    private behaviorImportConfig(): void {
        this.showImportConfig = true;
    }

    private cancelClear(): void {
        this.showDeleteConfirm = false;
    }

    private confirmClear(): void {
        this.showDeleteConfirm = false;
        this.generateList = [];
    }

    private hidePreView(modalShow: boolean): void {
        this.showPreview = modalShow;
    }

    private hideExportConfig(modalShow: boolean): void {
        this.showExportConfig = modalShow;
    }

    private hideImportConfig(modalShow: boolean): void {
        this.showImportConfig = modalShow;
    }

    private importConfigs(configs: object[]): void {
        let elementTypeDirectory: object = {};
        for (let element of FormBuilderElements) {
            if (!!element.children) {
                for (let children of element.children) {
                    elementTypeDirectory[children.type] = children;
                }
            }
        }

        this.generateList = [];
        for (let config of configs) {
            let element = elementTypeDirectory[config['type']];
            if (!element) {
                continue;
            }

            config['label'] = element.label;
            config['icon'] = element.icon;

            this.generateList.push(config as FormBuilderModel.IFormBuilderElement);
        }
    }
    //#endregion

    //#region action
    private actionCopy(data: FormBuilderModel.IFormBuilderElement, index: number): void {
        let clone: FormBuilderModel.IFormBuilderElement = JSON.parse(JSON.stringify(data));
        clone.id = `form_element_${new Date().getTime()}`;

        this.activedItem = clone;
        this.generateList.splice(index + 1, 0, clone);
    }

    private actionDelete(data: FormBuilderModel.IFormBuilderElement, index: number): void {
        this.generateList.splice(index, 1);
        this.activedItem = null;

        // if (this.generateList.length > 0) {
        //     if (index - 1 === -1) {
        //         this.activeId = this.generateList[0].id;
        //         this.activedItem = this.generateList[0];
        //     } else {
        //         this.activeId = this.generateList[index - 1].id;
        //         this.activedItem = this.generateList[index - 1];
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
