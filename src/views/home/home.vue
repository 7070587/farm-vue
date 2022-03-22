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
                        :list="drawingList"
                        :animation="340"
                        :group="{ name: 'formBuilderGroup' }"
                    >
                        <div v-for="element in drawingList">
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
                <b-tabs fill>
                    <b-tab
                        title="選擇元件"
                        active
                    >
                        <div class="form-builder">
                            <div class="compform-builderonents--list">
                                <div
                                    v-for="(listItem, listIndex) in formBuilderElementList"
                                    :key="listIndex"
                                >
                                    <div class="form-builder--title">
                                        <i :class="listItem.icon"></i> {{ listItem.label }}
                                    </div>

                                    <draggable
                                        class="form-builder--draggable"
                                        :list="listItem.children"
                                        :group="{ name: 'formBuilderGroup', pull: 'clone', put: false }"
                                        :sort="false"
                                        draggable=".form-builder--list__item"
                                        @end="dragEndFormBuilder"
                                    >
                                        <div
                                            v-for="(item, index) in listItem.children"
                                            :key="index"
                                            class="form-builder--list__item"
                                            @click="addFormBuilder(item)"
                                        >
                                            <div class="form-builder--body">
                                                <i :class="item.icon"></i> {{ item.label }}
                                            </div>
                                        </div>
                                    </draggable>
                                </div>
                            </div>
                        </div>

                </b-tab>

                <b-tab title="元件屬性">
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
import { FormBuilderElements, Model as FormBuilderModel } from '@/config';
//#endregion

//#region Views
//#endregion

//#region Components
//#endregion

//#region Components Src
import FormBuilderElement from '@/components/form-builders/elements';
//#endregion

//#region Components Views
//#endregion
//#endregion

import draggable from 'vuedraggable';

@Component({
    components: {
        draggable,
        ...FormBuilderElement,
    },
})
export default class VuePageClass extends Vue {
    //#region Prop
    //#endregion

    //#region Variables
    private formBuilderElementList: FormBuilderModel.IFormBuilderElement[] = [];

    private drawingList: FormBuilderModel.IFormBuilderElementChildren[] = [];

    private dragId: number = 100;
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
        this.formBuilderElementList = FormBuilderElements;
    }
    //#endregion

    //#region View Event
    //#region right
    private addFormBuilder(item: FormBuilderModel.IFormBuilderElementChildren): void {
        this.dragId++;
        item.id = `dragId${this.dragId}`;
        this.drawingList.push(item);
    }
    private dragEndFormBuilder(): void {
        this.dragId++;
        this.drawingList.forEach((element) => {
            if (!element.id) {
                element.id = `dragId${this.dragId}`;
            }
        });
    }
    //#endregion

    //#region center
    //#endregion

    //#endregion

    //#region Other Function

    //#endregion
}
</script>

<style scoped lang="scss">
</style>
