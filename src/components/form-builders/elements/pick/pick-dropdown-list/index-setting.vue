<template>
    <div>
        <div class="setting--row">
            <span class="setting--row__title"> 下拉選單屬性 </span>

            <hr />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 標題 </div>

            <b-form-input
                size="sm"
                placeholder="標題"
                v-model="config.label"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 顯示標題 </div>

            <toggle-button
                v-model="config.isShowLabel"
                :height='34'
                :width='318'
                :font-size='16'
                :labels="{checked: '顯示', unchecked: '隱藏'}"
                :color=" {checked: '#82C7EB', unchecked: '#BFCBD9'}"
                :sync='true'
            />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 是否必填 </div>

            <toggle-button
                v-model="config.isRequired"
                :height='34'
                :width='318'
                :font-size='16'
                :labels="{checked: '必填', unchecked: '非必填'}"
                :color=" {checked: '#82C7EB', unchecked: '#BFCBD9'}"
                :sync='true'
            />
        </div>

        <div class="setting--row">
            <hr />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 輸入提示 </div>

            <b-form-input
                size="sm"
                placeholder="請輸入文字"
                v-model="config.placeholder"
            ></b-form-input>
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 多選功能 </div>

            <toggle-button
                v-model="config.isMultiple"
                :height='34'
                :width='318'
                :font-size='16'
                :labels="{checked: '開啟', unchecked: '關閉'}"
                :color=" {checked: '#82C7EB', unchecked: '#BFCBD9'}"
                :sync='true'
                @input="updateIsMultiple"
            />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 搜索功能 </div>

            <toggle-button
                v-model="config.isSearchable"
                :height='34'
                :width='318'
                :font-size='16'
                :labels="{checked: '開啟', unchecked: '關閉'}"
                :color=" {checked: '#82C7EB', unchecked: '#BFCBD9'}"
                :sync='true'
            />
        </div>

        <div class="setting--row">
            <hr />
        </div>

        <div class="setting--row">
            <div class="setting--row__lable"> 選項配置 </div>

            <!-- 多選 -->
            <draggable
                v-if="config.isMultiple"
                :list="config.options"
                ghost-class="ghost-option"
            >
                <div
                    v-for="(item, index) in config.options"
                    :key="'option-' + index"
                    class="flex-option"
                >

                    <div class="flex-option">
                        <i class="fas fa-align-justify fa-lg drag-item value-text__drag"></i>

                        <i
                            v-if="item.unchecked"
                            class="far fa-square fa-lg cursor-pointer checkbox"
                            @click="checkedContent(item, index)"
                        ></i>

                        <i
                            v-if="item.checked"
                            class="fas fa-check-square fa-lg cursor-pointer checkbox"
                            @click="uncheckedContent(item, index)"
                        ></i>

                        <b-form-input
                            class="value-text"
                            size="sm"
                            v-model="item.text"
                            @input="updateOption(index)"
                        ></b-form-input>

                    </div>

                    <i
                        class="fas fa-minus-circle fa-lg value-text__delete"
                        @click="optionRemove(index)"
                    ></i>

                </div>
            </draggable>

            <!-- 單選 -->
            <draggable
                v-else
                :list="config.options"
                ghost-class="ghost-option"
            >
                <div
                    v-for="(item, index) in config.options"
                    :key="'option-' + index"
                    class="flex-option"
                >

                    <div class="flex-option">
                        <i class="fas fa-align-justify fa-lg drag-item value-text__drag"></i>

                        <i
                            v-if="item.unchecked"
                            class="far fa-circle cursor-pointer radio"
                            @click="checkedContent(item, index)"
                        ></i>

                        <i
                            v-if="item.checked"
                            class="fas fa-dot-circle cursor-pointer radio"
                            @click="uncheckedContent(item, index)"
                        ></i>

                        <b-form-input
                            class="value-text"
                            size="sm"
                            v-model="item.text"
                            @input="updateOption(index)"
                        ></b-form-input>

                    </div>

                    <i
                        class="fas fa-minus-circle fa-lg value-text__delete"
                        @click="optionRemove(index)"
                    ></i>

                </div>
            </draggable>

            <div
                class="add-option"
                @click="optionAdd"
            >
                <i class="fas fa-plus-circle"></i>
                新增選項
            </div>
        </div>

    </div>
</template>

<script lang="ts">
//#region Import
//#region Vue
import { Vue, Component, Prop } from 'vue-property-decorator';
//#endregion

//#region Module
//#endregion

//#region Framework
//#endregion

//#region Src
import { Model } from '@/config/index';
import { IConfigPickDropdownList, IValueTextRadioCheckbox } from '@/components/form-builders/elements/models';
//#endregion

//#region Views
//#endregion

//#region Components
//#endregion

//#region Components Src
//#endregion

//#region Components Views
//#endregion

//#region toggle-button
import { ToggleButton } from 'vue-js-toggle-button';
//#endregion

import draggable from 'vuedraggable';

//#endregion

@Component({
    components: { ToggleButton, draggable },
})
export default class ComponentElementSetting extends Vue {
    //#region Prop
    @Prop({
        type: Object, // Boolean, Number, String, Array, Object
        default: () => undefined,
    })
    private activedItemData: Model.IFormBuilderElement;
    //#endregion

    //#region Variables
    private optionsOriginal: IValueTextRadioCheckbox[] = [];
    //#endregion

    //#region Computed
    private get config(): IConfigPickDropdownList {
        let config = this.activedItemData['config'] as IConfigPickDropdownList;

        if (config.isMultiple) {
            config.content = [];
        } else {
            config.content = null;
        }

        return config;
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

    //#region Init
    //#endregion

    //#region View Event
    private updateIsMultiple(): void {
        this.config.options.forEach((x) => {
            x.checked = false;
            x.unchecked = true;
        });

        if (this.config.isMultiple) {
            this.config.content = [];
        } else {
            this.config.content = null;
        }
    }

    private checkedContent(item: IValueTextRadioCheckbox, index: number): void {
        if (this.config.isMultiple) {
            this.config.content = this.config.content as IValueTextRadioCheckbox[];

            this.config.options[index].checked = true;
            this.config.options[index].unchecked = false;

            this.config.content.push(this.config.options[index]);
        } else {
            this.config.content = item;
            this.config.content.checked = true;
            this.config.content.unchecked = false;

            this.config.options.forEach((element, elImdex) => {
                element.checked = false;
                element.unchecked = true;

                if (index === elImdex) {
                    element.checked = true;
                    element.unchecked = false;
                }
            });
        }
    }

    private uncheckedContent(item: IValueTextRadioCheckbox, index: number): void {
        if (this.config.isMultiple) {
            this.config.content = this.config.content as IValueTextRadioCheckbox[];

            this.config.options[index].checked = false;
            this.config.options[index].unchecked = true;

            this.config.content = [];

            let _content: IValueTextRadioCheckbox[] = [];
            this.config.options.forEach((element) => {
                if (element.checked) {
                    _content.push(element);
                }
            });

            this.config.content = _content;
        } else {
            this.config.content = this.config.content as IValueTextRadioCheckbox;

            this.config.content = null;

            this.config.options.forEach((element, elImdex) => {
                element.checked = false;
                element.unchecked = true;

                if (index === elImdex) {
                    element.checked = false;
                    element.unchecked = true;
                }
            });
        }
    }

    private updateOption(index: number): void {
        this.config.options[index].value = this.config.options[index].text;
    }

    private optionRemove(index: number): void {
        if (this.config.isMultiple) {
            this.config.content = this.config.content as IValueTextRadioCheckbox[];

            this.config.options.splice(index, 1);
            this.config.content.splice(index, 1);
        } else {
            this.config.options.splice(index, 1);
        }
    }

    private optionAdd(): void {
        if (this.config.isMultiple) {
            this.config.content = this.config.content as IValueTextRadioCheckbox[];

            this.config.options.push({
                value: `${new Date().getTime()}_新選項`,
                text: `${new Date().getTime()}_新選項`,
                checked: false,
                unchecked: true,
            });

            let _content: IValueTextRadioCheckbox[] = [];
            this.config.options.forEach((element) => {
                if (element.checked) {
                    _content.push(element);
                }
            });

            this.config.content = _content;
        } else {
            this.config.options.push({
                value: `${new Date().getTime()}_新選項`,
                text: `${new Date().getTime()}_新選項`,
                checked: false,
                unchecked: true,
            });

            this.config.options.forEach((element) => {
                if (element.checked) {
                    this.config.content = element;
                }
            });
        }
    }

    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
