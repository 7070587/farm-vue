<template>
    <div>
        <header>
            <div>Form Builder</div>
        </header>

        <div class="home">
            <div class="left"></div>

            <div class="center">

                <div class="behavior">
                    <div class="behavior--item"> <i class="fas fa-upload"></i> 匯入JSON</div>
                    <div class="behavior--item"> <i class="far fa-trash-alt"></i> 清空</div>
                    <div class="behavior--item"><i class="far fa-eye"></i> 預覽</div>
                    <div class="behavior--item"><i class="fas fa-download"></i> 下載JSON</div>
                </div>

                <div class="generate">
                    <draggable
                        class="generate--container"
                        :list="generateList"
                        :animation="340"
                        :group="{ name: 'formBuilderGroup' }"
                        @choose="dragChooseDrawingItem"
                    >
                        <div
                            v-for="element in generateList"
                            class="generate--row"
                            :class="{ 'generate--row__selected': element.isActived }"
                        >
                            <template v-if="element.type === 'divider'">
                                <FormBuilderDivider />
                            </template>

                            <template v-else-if="element.type === 'image'">
                                <FormBuilderImage />
                            </template>

                            <template v-else-if="element.type === 'input'">
                                <FormBuilderInput />
                            </template>

                            <template v-else-if="element.type === 'text'">
                                <FormBuilderText />
                            </template>

                            <template v-else-if="element.type === 'textarea'">
                                <FormBuilderTextarea />
                            </template>
                        </div>
                    </draggable>
                </div>

            </div>

            <div class="right">
                <FormBuilderList @generateList="generateListData" />
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
import { FormBuilderElements, Model as FormBuilderModel } from '@/config';
//#endregion

//#region Views
//#endregion

//#region Components
//#endregion

//#region Components Src
import DeleteCopy from '@/components/form-builders/action/delete-copy.vue';
import FormBuilderList from './form-builder-list.vue';
import FormBuilderElement from '@/components/form-builders/elements';
//#endregion

//#region Components Views
//#endregion
//#endregion

import draggable from 'vuedraggable';

@Component({
    components: {
        draggable,
        DeleteCopy,
        FormBuilderList,
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
    //#region center
    private dragChooseDrawingItem(item: any): void {
        this.activeData = this.generateList[item.oldDraggableIndex];
    }

    // private isActived(): boolean {
    //     console.log(`isActived => `, this.activeData?.id, this.activeId);
    //     return this.activeId === this.activeData?.id;
    // }

    private generateListData(generateList: FormBuilderModel.IFormBuilderElement): void {}
    //#endregion
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
