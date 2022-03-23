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
                        @choose="selectItem"
                    >

                        <div
                            v-for="element in generateList"
                            :class="[isActived(element.id, activeId) ? 'generate--row generate--row__selected' : 'generate--row']"
                        >
                            <template v-if="element.type === 'divider'">
                                <FormBuilderDivider
                                    :isActived="isActived(element.id, activeId)"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === 'image'">
                                <FormBuilderImage
                                    :isActived="isActived(element.id, activeId)"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === 'input'">
                                <FormBuilderInput
                                    :isActived="isActived(element.id, activeId)"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === 'text'">
                                <FormBuilderText
                                    :isActived="isActived(element.id, activeId)"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>

                            <template v-else-if="element.type === 'textarea'">
                                <FormBuilderTextarea
                                    :isActived="isActived(element.id, activeId)"
                                    :data="element"
                                    @actionCopy="actionCopy"
                                    @actionDelete="actionDelete"
                                />
                            </template>
                        </div>
                    </draggable>
                </div>

            </div>

            <div class="right">
                <FormBuilderList
                    :_generateList="generateList"
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
//#endregion

//#region Views
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

    private activeData: FormBuilderModel.IFormBuilderElement = undefined;
    private activeId: string = '';
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
    private selectItem(item: any): void {
        this.activeData = this.generateList[item.oldDraggableIndex];
        this.activeId = this.activeData.id;
    }

    private isActived(elementId: string, activeId: string): boolean {
        return elementId === activeId;
    }

    private generateListData(generateList: FormBuilderModel.IFormBuilderElement[], activeId: string): void {
        this.generateList = generateList;
        this.activeId = activeId;
    }
    //#endregion

    //#region behavior
    private behaviorClear(): void {
        this.generateList = [];
    }
    //#endregion

    //#region action
    private actionCopy(data: FormBuilderModel.IFormBuilderElement): void {
        console.log(`actionCopy => `, data);
    }

    private actionDelete(data: FormBuilderModel.IFormBuilderElement): void {
        let selectedIndex: number = undefined;
        for (const i in this.generateList) {
            if (this.generateList[i].id === data.id) {
                selectedIndex = +i;
                this.generateList.splice(+i, 1);
                break;
            }
        }

        if (this.generateList.length > 0) {
            if (selectedIndex - 1 === -1) {
                this.activeId = this.generateList[0].id;
            } else {
                this.activeId = this.generateList[selectedIndex - 1].id;
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
