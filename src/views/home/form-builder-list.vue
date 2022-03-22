<template>
    <div>
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
                <FormBuilderTextareaSetting />
                <FormBuilderTextareaSetting />
                <FormBuilderTextareaSetting />
                <FormBuilderTextareaSetting />
                <FormBuilderTextareaSetting />
                <FormBuilderTextareaSetting />
                <FormBuilderTextareaSetting />
                <FormBuilderTextareaSetting />
                <FormBuilderTextareaSetting />
                <FormBuilderTextareaSetting />

            </b-tab>

        </b-tabs>
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
export default class FormBuilderList extends Vue {
    //#region Prop
    //#endregion

    //#region Variables
    private formBuilderElementList: FormBuilderModel.IFormBuilder[] = [];

    private generateList: FormBuilderModel.IFormBuilderElement[] = [];

    private activeData: FormBuilderModel.IFormBuilderElement = undefined;
    private activeId: string = '';

    private defaultIdNum: number = 100;
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
    private addFormBuilder(item: FormBuilderModel.IFormBuilderElement): void {
        let clone: FormBuilderModel.IFormBuilderElement = JSON.parse(JSON.stringify(item));
        console.log(`clone => `, clone);
        this.defaultIdNum++;
        clone.id = `dragId${this.defaultIdNum}`;
        clone.isActived = true;
        this.generateList.push(clone);
        this.$emit('generateList', this.generateList);
    }

    private dragEndFormBuilder(): void {
        this.defaultIdNum++;
        console.log(`defaultIdNum => `, this.defaultIdNum, this.generateList);
        this.generateList.forEach((element) => {
            if (!element.id) {
                console.log(`element => `, element);
                element.id = `dragId${this.defaultIdNum}`;
                element.isActived = true;
                this.activeId = element.id;
                this.activeData = element;
            } else {
                element.isActived = false;
            }
        });
        this.$emit('generateList', this.generateList);
    }
    //#endregion
    //#endregion

    //#region Other Function

    //#endregion
}
</script>

<style scoped lang="scss">
</style>
