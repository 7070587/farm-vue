<template>
    <div>
        <header>
            <div>Form Builder</div>
        </header>

        <div class="home">
            <div class="left"></div>

            <div class="center">

                <div class="generate-control">
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
                                    >
                                        <div
                                            v-for="(item, index) in listItem.children"
                                            :key="index"
                                            class="form-builder--list__item"
                                            @click="addComponent(item)"
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

    private drawingList: FormBuilderModel.IFormBuilderElement[] = [];
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
    private addComponent(item: FormBuilderModel.IFormBuilderElement): void {
        this.drawingList.push(item);
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
