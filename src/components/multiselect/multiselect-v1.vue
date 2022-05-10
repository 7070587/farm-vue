<template>
    <div
        :tabindex="searchable ? -1 : tabindex"
        :class="[{ 'multiselect--active': isOpen }, { 'multiselect--disabled': disabled }, { 'multiselect--above': isAbove }, multiple ? 'multiselect--multiple' : 'multiselect--single']"
        @focus="activate()"
        @blur="searchable ? false : deactivate()"
        class="multiselect"
        role="combobox"
        :aria-owns="'listbox-'+id"
    >
        <slot
            name="caret"
            :toggle="toggle"
        >
            <div
                @mousedown.prevent.stop="toggle()"
                class="multiselect__select"
            ></div>
        </slot>

        <slot
            name="clear"
            :search="search"
        ></slot>

        <div
            ref="tags"
            class="multiselect__tags"
        >
            <slot
                name="selection"
                :search="search"
                :remove="removeElement"
                :values="mulitipleSelectedValues"
                :is-open="isOpen"
            >
                <div
                    class="multiselect__tags-wrap"
                    v-show="mulitipleSelectedValues.length > 0"
                >
                    <template
                        v-for="(option, index) of mulitipleSelectedValues"
                        @mousedown.prevent
                    >
                        <slot
                            name="tag"
                            :option="option"
                            :search="search"
                            :remove="removeElement"
                        >
                            <span
                                class="multiselect__tag"
                                :key="index"
                            >
                                <span v-text="getOptionLabel(option)"></span>
                                / TODO-mulitipleSelectedValues /
                                <i
                                    tabindex="1"
                                    @mousedown.prevent="removeElement(option)"
                                    class="multiselect__tag-icon"
                                ></i>
                            </span>
                        </slot>
                    </template>
                </div>

                <template v-if="internalValue && internalValue.length > limit">
                    <slot name="limit">
                        <strong
                            class="multiselect__strong"
                            v-text="limitText(internalValue.length - limit)"
                        />
                    </slot>
                </template>
            </slot>

            <transition name="multiselect__loading">
                <slot name="loading">
                    <div
                        v-show="loading"
                        class="multiselect__spinner"
                    />
                </slot>
            </transition>

            <span
                v-if="isSingleLabelVisible"
                class="multiselect__single"
                @mousedown.prevent="toggle"
            >
                <slot
                    name="singleLabel"
                    :option="singleValue"
                >
                    <template>{{ currentOptionLabel }}</template>
                </slot>
            </span>

            <span
                v-if="isPlaceholderVisible"
                class="multiselect__placeholder"
                @mousedown.prevent="toggle"
            >
                <slot name="placeholder">
                    {{ placeholder }}
                </slot>
            </span>
        </div>

        <transition name="multiselect">
            <div
                class="multiselect__content-wrapper"
                v-show="isOpen"
                @focus="activate"
                tabindex="-1"
                @mousedown.prevent
                :style="{ maxHeight: optimizedHeight + 'px' }"
                ref="list"
            >
                <ul
                    class="multiselect__content"
                    :style="contentStyle"
                    role="listbox"
                    :id="'listbox-'+id"
                >
                    <slot name="beforeList"></slot>

                    <div :class="{'multiselect__input-box': searchable}">
                        <input
                            ref="search"
                            v-if="searchable"
                            :name="name"
                            :id="id"
                            type="text"
                            autocomplete="off"
                            spellcheck="false"
                            :placeholder="searchI18n"
                            :style="inputStyle"
                            :value="search"
                            :disabled="disabled"
                            :tabindex="tabindex"
                            @input="updateSearch($event.target.value)"
                            @focus.prevent="activate()"
                            @blur.prevent="deactivate()"
                            class="multiselect__input"
                            :aria-controls="'listbox-'+id"
                        />
                    </div>

                    <li v-if="multiple && max === internalValue.length">
                        <span class="multiselect__option">
                            <slot name="maxElements">Maximum of {{ max }} options selected. First remove a selected option to select another.</slot>
                        </span>
                    </li>

                    <template v-if="!max || internalValue.length < max">
                        <li
                            class="multiselect__element"
                            v-for="(option, index) of filteredOptions"
                            :key="index"
                            v-bind:id="id + '-' + index"
                            v-bind:role="!(option && (option.isLabel || option.isDisabled)) ? 'option' : null"
                        >
                            <span
                                v-if="!(option && (option.isLabel || option.isDisabled))"
                                :class="optionHighlight(index, option)"
                                @click.stop="select(option)"
                                @mouseenter.self="pointerSet(index)"
                                :data-select="option && option.isTag ? tagPlaceholder : selectLabelText"
                                :data-selected="selectedLabelText"
                                :data-deselect="deselectLabelText"
                                class="multiselect__option"
                            >
                                <slot
                                    name="option"
                                    :option="option"
                                    :search="search"
                                    :index="index"
                                >
                                    <div
                                        v-if="option.isGroupName"
                                        :class="{'multiselect__option--group-box': option.isGroupName}"
                                    >
                                        <div>
                                            {{ getOptionLabel(option) }}
                                        </div>
                                        <div class="multiselect__option--group-hr">
                                            <hr>
                                        </div>
                                    </div>
                                    <div v-else> {{ getOptionLabel(option) }} </div>
                                </slot>
                            </span>

                            <span
                                v-if="option && (option.isLabel || option.isDisabled)"
                                :data-select="groupSelect && selectGroupLabelText"
                                :data-deselect="groupSelect && deselectGroupLabelText"
                                :class="groupHighlight(index, option)"
                                @mouseenter.self="groupSelect && pointerSet(index)"
                                @mousedown.prevent="selectGroup(option)"
                                class="multiselect__option"
                            >
                                <slot
                                    name="option"
                                    :option="option"
                                    :search="search"
                                    :index="index"
                                >
                                    <span>
                                        {{ getOptionLabel(option) }}
                                    </span>
                                </slot>
                            </span>
                        </li>
                    </template>

                    <li v-show="showNoResults && (filteredOptions.length === 0 && search && !loading)">
                        <span class="multiselect__option">
                            <slot
                                name="noResult"
                                :search="search"
                            >No elements found. Consider changing the search query.</slot>
                        </span>
                    </li>

                    <li v-show="showNoOptions && (options.length === 0 && !search && !loading)">
                        <span class="multiselect__option">
                            <slot name="noOptions">List is empty.</slot>
                        </span>
                    </li>

                    <slot name="afterList"></slot>
                </ul>
            </div>
        </transition>
    </div>
</template>


<script lang="ts">
//#region Import
//#region Vue
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
//#endregion

//#region Module
//#endregion

//#region Framework
import { Multiselect as Model } from './models';
//#endregion

//#region Src
//#endregion

//#region Views
//#endregion

//#region Components
//#endregion

//#region Components Src
//#endregion

//#region Components Views
//#endregion
//#endregion

function isEmpty(opt: number | any[]): boolean {
    if (opt === 0) {
        return false;
    }

    if (Array.isArray(opt) && opt.length === 0) {
        return true;
    }

    return !opt;
}

@Component({
    components: {},
})
export default class VuePageClass extends Vue {
    //#region Prop
    //#region multiselect.js
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {Number||String}
     */
    @Prop({
        type: Number || String,
        default: () => null,
    })
    private id: number | string;

    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    @Prop({
        type: Array,
        default: () => [],
        required: true,
    })
    private options: any[];

    /**
     * Presets the selected options value.
     * @type {Object||Array||String||Number}
     */
    @Prop({
        type: [Object, Array],
        default: () => null,
    })
    private value: any;

    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: () => false,
    })
    private multiple: boolean;

    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: () => true,
    })
    private searchable: boolean;

    /**
     * Clear the search input after `select()`.
     * Use only when multiple is true.
     * @default true
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: true,
    })
    private clearOnSelect: boolean;

    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: false,
    })
    private hideSelected: boolean;

    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    @Prop({
        type: String,
        default: 'Select option',
    })
    private placeholder: string;

    /**
     * Allow to remove all selected values.
     * Otherwise one must be left selected.
     * @default true
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: true,
    })
    private allowEmpty: boolean;

    /**
     * Reset this.value, this.search, this.selected after this.value changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: false,
    })
    private resetAfter: boolean;

    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: true,
    })
    private closeOnSelect: boolean;

    // /**
    //  * Function to interpolate the custom label
    //  * @default false
    //  * @type {Function}
    //  */
    @Prop({
        type: Function,
        default: (option: number | any[], label: string) => {
            if (isEmpty(option)) {
                return '';
            }
            return label ? option[label] : option;
        },
    })
    private customLabel: Function;

    /**
     * Number of allowed selected options.
     * No limit if 0.
     * @default 0
     * @type {Number}
     */
    @Prop({
        type: Number,
        default: 0,
    })
    private max: number;

    /**
     * Limits the options displayed in the dropdown to the first X options.
     * @default 1000
     * @type {Number}
     */
    @Prop({
        type: Number,
        default: 1000,
    })
    private optionsLimit: number;

    /**
     * Allow to select all group values by selecting the group label
     * @default false
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: false,
    })
    private groupSelect: boolean;

    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: true,
    })
    private internalSearch: boolean;

    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: false,
    })
    private preserveSearch: boolean;

    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: false,
    })
    private preselectFirst: boolean;
    //#endregion

    //#region Multiselect.vue
    /**
     * name attribute to match optional label element
     * @default ''
     * @type {String}
     */
    @Prop({
        type: String,
        default: '',
    })
    private name: string;

    /**
     * Decide whether to show pointer labels
     * @default true
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: true,
    })
    private showLabels: boolean;

    /**
     * Limit the display of selected options. The rest will be hidden within the limitText string.
     * @default 99999
     * @type {Integer}
     */
    @Prop({
        type: Number,
        default: 99999,
    })
    private limit: number;

    /**
     * Function that process the message shown when selected elements pass the defined limit.
     * @default 'and * more'
     * @param {Int} count Number of elements more than limit
     * @type {Function}
     */
    @Prop({
        type: Function,
        default: (count: number) => `and ${count} more`,
    })
    private limitText: Function;

    /**
     * Set true to trigger the loading spinner.
     * @default False
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: false,
    })
    private loading: boolean;

    /**
     * Disables the multiselect if true.
     * @default false
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: false,
    })
    private disabled: boolean;

    /**
     * Sets maxHeight style value of the dropdown
     * @default 300
     * @type {Number}
     */
    @Prop({
        type: Number,
        default: 300,
    })
    private maxHeight: number;

    /**
     * Fixed opening direction (instead of auto).
     * Options are "above"/"top" or "below"/"bottom"
     * @default ''
     * @type {String}
     */
    @Prop({
        type: String,
        default: '',
    })
    private openDirection: string;

    /**
     * Show the noResult slot if no results are found.
     * @default true
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: true,
    })
    private showNoResults: boolean;

    /**
     * Specify the tabindex of the Multiselect component
     * @default 0
     * @type {Number}
     */
    @Prop({
        type: Number,
        default: 0,
    })
    private tabindex: number;
    //#endregion

    //#region pointerMixin.js
    /**
     * Shows slot with message about empty options
     * @default true
     * @type {Boolean}
     */
    @Prop({
        type: Boolean,
        default: true,
    })
    private showNoOptions: boolean;

    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    @Prop({
        type: Boolean,
        default: true,
    })
    private showPointer: boolean;

    /**
     * The height of the option element.
     * Required for proper scrolling.
     * @default 40
     * @type {Number}
     */
    @Prop({
        type: Number,
        default: 40,
    })
    private optionHeight: number;
    //#endregion
    //#endregion

    //#region Variables
    private pointer: number = 0;
    private pointerDirty: boolean = false;
    private search: string = '';
    private isOpen: boolean = false;
    private preferredOpenDirection: 'below' | 'above' = 'below';
    private optimizedHeight: number = null;

    private searchI18n: string = 'Search';
    private singleSelectedValue: string = '';
    private mulitipleSelectedValues: Model.IOptionData[] = [];

    // private mulitipleSelectedValues: any[] = [];

    //#region temp
    private groupValues: string = 'groupName';
    private groupLabel: string = 'lists';
    private trackBy: string = 'key';
    private label: string = 'value';

    private selectLabel: string = '';
    private selectGroupLabel: string = '';
    private selectedLabel: string = '';
    private deselectLabel: string = '';
    private deselectGroupLabel: string = '';

    // 可以刪除
    private taggable: boolean = false;
    private tagPlaceholder: string = 'Press enter to create a tag';
    private tagPosition: 'top' | 'bottom' = 'top';

    //#endregion
    //#endregion

    //#region Computed
    //#region multiselect.js
    private get internalValue(): any[] {
        return this.value || this.value === 0 ? (Array.isArray(this.value) ? this.value : [this.value]) : [];
    }

    // TODO: search error
    private get filteredOptions(): Model.IOptionData[] {
        const search: string = this.search || '';
        const normalizedSearch: string = search.toLowerCase().trim();

        let options: any[] = this.options;

        if (this.groupSelect) {
            let tempOptions = [];
            options.forEach((x) => {
                tempOptions.push({ key: x.groupName, value: x.groupName, isGroupName: true });
                x.lists.forEach((x) => tempOptions.push({ ...x, groupName: x.groupName }));
            });

            options = tempOptions;
        } else {
            options.forEach((x) => (x.groupName = x.groupName));
        }

        options = options.filter((array) => array.value.match(normalizedSearch));

        return options;
    }

    private get valueKeys(): any[] {
        if (this.trackBy) {
            return this.internalValue.map((element) => element[this.trackBy]);
        } else {
            return this.internalValue;
        }
    }

    private get currentOptionLabel(): string | object {
        if (this.multiple) {
            return this.placeholder;
        } else {
            if (!!this.singleSelectedValue) {
                return this.singleSelectedValue;
            }
            return this.placeholder;
        }
    }
    //#endregion

    //#region Multiselect.vue
    private get isSingleLabelVisible(): boolean {
        return !!this.singleValue && (!this.isOpen || !this.searchable) && !this.mulitipleSelectedValues.length;
    }

    private get isPlaceholderVisible(): boolean {
        return !this.internalValue.length && (!this.searchable || !this.isOpen);
    }

    // private get mulitipleSelectedValues(): any[] {
    //     return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    // }

    private get singleValue(): any {
        return this.internalValue[0];
    }

    private get deselectLabelText(): string {
        return this.showLabels ? this.deselectLabel : '';
    }

    private get deselectGroupLabelText(): string {
        return this.showLabels ? this.deselectGroupLabel : '';
    }

    private get selectLabelText(): string {
        return this.showLabels ? this.selectLabel : '';
    }

    private get selectGroupLabelText(): string {
        return this.showLabels ? this.selectGroupLabel : '';
    }

    private get selectedLabelText(): string {
        return this.showLabels ? this.selectedLabel : '';
    }

    private get inputStyle(): string | object {
        if (this.searchable || (this.multiple && !!this.value && Array.isArray(this.value) && this.value.length)) {
            // Hide input by setting the width to 0 allowing it to receive focus
            return this.isOpen ? { width: '100%' } : { width: '0', position: 'absolute', padding: '0' };
        }

        return '';
    }

    private get contentStyle(): object {
        return this.options.length ? { display: 'inline-block' } : { display: 'block' };
    }

    private get isAbove(): boolean {
        if (this.openDirection === 'above' || this.openDirection === 'top') {
            return true;
        } else if (this.openDirection === 'below' || this.openDirection === 'bottom') {
            return false;
        } else {
            return this.preferredOpenDirection === 'above';
        }
    }
    //#endregion

    //#endregion
    //#endregion

    //#region Watch
    //#region variables
    @Watch('maxHeight', { immediate: true, deep: true })
    private maxHeightChanged(newVal: number, oldVal: number): void {
        this.optimizedHeight = this.maxHeight;
    }
    //#endregion

    //#region multiselect.js
    @Watch('internalValue', { immediate: true, deep: true })
    private internalValueChanged(newVal: any[], oldVal: any[]): void {
        /* istanbul ignore else */
        if (this.resetAfter && this.internalValue.length) {
            this.search = '';
            this.$emit('input', this.multiple ? [] : null);
        }
    }

    @Watch('search', { immediate: true, deep: true })
    private searchChanged(newVal: string, oldVal: string): void {
        this.$emit('search-change', this.search, this.id);
    }

    @Watch('value', { immediate: true, deep: true })
    private valueChanged(newVal: Model.IValue, oldVal: Model.IValue): void {
        if (this.multiple) {
            this.mulitipleSelectedValues = !!newVal ? (newVal as Model.IOption[]) : [];
        } else {
            this.singleSelectedValue = !!newVal ? (newVal as Model.IOption).value : '';
        }
    }
    //#endregion

    //#region pointerMixin.js
    @Watch('filteredOptions', { immediate: true, deep: true })
    private filteredOptionsChanged(newVal: any[], oldVal: any[]): void {}

    @Watch('isOpen', { immediate: true, deep: true })
    private isOpenChanged(newVal: boolean, oldVal: boolean): void {
        this.pointerDirty = false;
    }

    @Watch('pointer', { immediate: true, deep: true })
    private pointerChanged(newVal: number, oldVal: number): void {
        this.$nextTick(() => {
            let refSearch: any = this.$refs.search;
            if (!!refSearch) {
                refSearch.setAttribute('aria-activedescendant', this.id + '-' + newVal.toString());
            }
        });
    }
    //#endregion
    //#endregion

    //#region Vue Life
    private async beforeCreate(): Promise<void> {}
    private async created(): Promise<void> {}
    private async beforeMount(): Promise<void> {}
    private async mounted(): Promise<void> {
        /* istanbul ignore else */
        if (!this.multiple && this.max) {
            console.warn('[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.');
        }

        if (this.preselectFirst && !this.internalValue.length && this.options.length) {
            this.select(this.filteredOptions[0]);
        }
    }
    private async beforeDestroy(): Promise<void> {}
    private async destroyed(): Promise<void> {}
    //#endregion

    //#region multiselect.js
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    private getValue(): object {
        return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    }

    /**
     * Updates the search value
     * @param  {String}
     */
    private updateSearch(query: string): void {
        this.search = query;
    }

    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    private isSelected(option: Model.IOption): boolean {
        const opt = this.trackBy ? option[this.trackBy] : option;
        return this.valueKeys.indexOf(opt) > -1;
    }

    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    private isOptionDisabled(option): boolean {
        // TODO:
        return !!option.isDisabled;
    }

    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    private getOptionLabel(option: any): string {
        let result: string = '';
        // // TODO:
        if (isEmpty(option)) {
            // return '';
            result = '';
        }

        /* istanbul ignore else */
        if (option.isTag) {
            // return option.label;
            result = option.label;
        }

        /* istanbul ignore else */
        if (option.isLabel) {
            // return option.groupLabel;
            result = option.groupLabel;
        }

        let label = this.customLabel(option, this.label);

        /* istanbul ignore else */
        if (isEmpty(label)) {
            // return '';
            result = '';
        }

        result = label;

        return result;
    }

    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    private select(option: Model.IOptionData): void {
        console.log(`select => `, JSON.parse(JSON.stringify(option)), this.internalValue, this.allowEmpty);

        if (this.multiple) {
            let index: number = this.internalValue.findIndex((x) => x.key === option.key);
            if (this.allowEmpty) {
                if (index > -1) {
                    this.internalValue.splice(index, 1);
                    this.mulitipleSelectedValues = this.internalValue;
                    this.$emit('input', this.mulitipleSelectedValues);
                } else {
                    delete option.groupName;
                    this.mulitipleSelectedValues.push(option);
                    this.$emit('input', this.mulitipleSelectedValues);
                }
            } else {
                if (index > -1) {
                    if (this.internalValue.length >= 2) {
                        this.internalValue.splice(index, 1);
                        this.mulitipleSelectedValues = this.internalValue;
                    }
                    this.$emit('input', this.mulitipleSelectedValues);
                } else {
                    delete option.groupName;
                    this.mulitipleSelectedValues.push(option);
                    this.$emit('input', this.mulitipleSelectedValues);
                }
            }
        } else {
            let index: number = this.internalValue.findIndex((x) => x.key === option.key);
            if (this.allowEmpty) {
                if (index > -1) {
                    this.internalValue.splice(index, 1);
                    this.singleSelectedValue = '';
                    this.$emit('input', undefined);
                } else {
                    this.singleSelectedValue = option.value;
                    delete option.groupName;
                    this.$emit('input', option);
                }
            } else {
                this.singleSelectedValue = option.value;
                delete option.groupName;
                this.$emit('input', option);
            }
        }

        // TODO:
        /* istanbul ignore else */
        if (option.isGroupName && this.groupSelect) {
            console.log(`select => 01 `, this.internalValue);
            // this.selectGroup(option);
            return null;
        }

        // if (option.isTag) {
        //     this.$emit('tag', option.label, this.id);
        //     this.search = '';

        //     if (this.closeOnSelect && !this.multiple) {
        //         this.deactivate();
        //     }
        // } else {
        //     const isSelected = this.isSelected(option);

        //     if (isSelected) {
        //         if (key !== 'Tab') {
        //             this.removeElement(option);
        //         }

        //         return null;
        //     }

        //     this.$emit('select', option, this.id);

        //     /* istanbul ignore else */
        //     if (this.clearOnSelect) {
        //         this.search = '';
        //     }
        // }

        // if (this.multiple) {
        //     this.$emit('input', this.internalValue.concat([option]), this.id);
        // } else {
        //     this.$emit('input', option, this.id);
        // }

        /* istanbul ignore else */
        if (this.closeOnSelect) {
            this.deactivate();
        }

        // selectGroup
    }

    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    private selectGroup(selectedGroup): void {
        console.log(`selectGroup => `, selectedGroup);
        // TODO:
        const group = this.options.find((option) => {
            return option[this.groupLabel] === selectedGroup.groupLabel;
        });

        if (!group) {
            return null;
        }

        if (this.wholeGroupSelected(group)) {
            this.$emit('remove', group[this.groupValues], this.id);

            const newValue: any[] = this.internalValue.filter((option) => group[this.groupValues].indexOf(option) === -1);

            this.$emit('input', newValue, this.id);
        } else {
            const optionsToAdd: any[] = group[this.groupValues].filter((option) => !(this.isOptionDisabled(option) || this.isSelected(option)));

            this.$emit('select', optionsToAdd, this.id);
            this.$emit('input', this.internalValue.concat(optionsToAdd), this.id);
        }

        if (this.closeOnSelect) {
            this.deactivate();
        }
    }

    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    private wholeGroupSelected(group: any[]): boolean {
        // TODO:
        return group[this.groupValues].every((option) => this.isSelected(option) || this.isOptionDisabled(option));
    }

    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    private wholeGroupDisabled(group: any[]): boolean {
        // TODO:
        return group[this.groupValues].every(this.isOptionDisabled);
    }

    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @returns {type}        description
     */
    private removeElement(option, shouldClose: boolean = true): void {
        // TODO:
        /* istanbul ignore else */
        if (this.disabled) {
            return null;
        }

        /* istanbul ignore else */
        if (option.isDisabled) {
            return null;
        }

        /* istanbul ignore else */
        if (!this.allowEmpty && this.internalValue.length <= 1) {
            this.deactivate();
            return null;
        }

        const index = typeof option === 'object' ? this.valueKeys.indexOf(option[this.trackBy]) : this.valueKeys.indexOf(option);

        this.$emit('remove', option, this.id);

        if (this.multiple) {
            const newValue: any[] = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1));
            this.$emit('input', newValue, this.id);
        } else {
            this.$emit('input', null, this.id);
        }

        /* istanbul ignore else */
        if (this.closeOnSelect && shouldClose) {
            this.deactivate();
        }
    }

    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    private activate(): void {
        /* istanbul ignore else */
        if (this.isOpen || this.disabled) {
            return null;
        }

        this.adjustPosition();

        /* istanbul ignore else  */
        if (!!this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
            this.pointer = 1;
        }

        this.isOpen = true;

        /* istanbul ignore else  */
        if (this.searchable) {
            if (!this.preserveSearch) {
                this.search = '';
            }
            this.$nextTick(() => {
                let refSearch: any = this.$refs.search;
                refSearch.focus();
            });
        } else {
            let el: any = this.$el;
            el.focus();
        }

        this.$emit('open', this.id);
    }

    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    private deactivate(): void {
        /* istanbul ignore else */
        if (!this.isOpen) {
            return null;
        }

        this.isOpen = false;

        /* istanbul ignore else  */
        if (this.searchable) {
            let refSearch: any = this.$refs.search;
            refSearch.blur();
        } else {
            let el: any = this.$el;
            el.blur();
        }

        if (!this.preserveSearch) {
            this.search = '';
        }

        this.$emit('close', this.getValue(), this.id);
    }

    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    private toggle(): void {
        this.isOpen ? this.deactivate() : this.activate();
    }

    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    private adjustPosition(): void {
        if (typeof window === 'undefined') {
            return null;
        }

        const spaceAbove: number = this.$el.getBoundingClientRect().top;
        const spaceBelow: number = window.innerHeight - this.$el.getBoundingClientRect().bottom;
        const hasEnoughSpaceBelow: boolean = spaceBelow > this.maxHeight;

        if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === 'below' || this.openDirection === 'bottom') {
            this.preferredOpenDirection = 'below';
            this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight);
        } else {
            this.preferredOpenDirection = 'above';
            this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight);
        }
    }

    //#endregion

    //#region pointerMixin.js
    private optionHighlight(index: number, option: Model.IOption): object {
        if (this.multiple) {
            return {
                'multiselect__option--highlight': index === this.pointer && this.showPointer,
                'multiselect__option--selected-multiple': this.isSelected(option),
            };
        }
        return {
            'multiselect__option--highlight': index === this.pointer && this.showPointer,
            'multiselect__option--selected-single': this.isSelected(option),
        };
    }

    private groupHighlight(index: number, selectedGroup): object | string {
        // TODO:
        if (!this.groupSelect) {
            return ['multiselect__option--disabled', { 'multiselect__option--group': selectedGroup.isLabel }];
        }

        const group = this.options.find((option) => {
            return option[this.groupLabel] === selectedGroup.$groupLabel;
        });

        return group && !this.wholeGroupDisabled(group)
            ? [
                  'multiselect__option--group',
                  { 'multiselect__option--highlight': index === this.pointer && this.showPointer },
                  { 'multiselect__option--group-selected': this.wholeGroupSelected(group) },
              ]
            : 'multiselect__option--disabled';
    }

    private pointerSet(index: number): void {
        this.pointer = index;
        this.pointerDirty = true;
    }
    //#endregion

    //#region Init
    //#endregion

    //#region View Event
    //#endregion

    //#region Other Function

    //#endregion
}
</script>

<style  scoped lang="scss">
fieldset[disabled] .multiselect {
    pointer-events: none;
}

.multiselect--single {
    width: 220px;
}

.multiselect--multiple {
    width: 400px;
}

.multiselect__spinner {
    position: absolute;
    right: 1px;
    top: 1px;
    width: 48px;
    height: 35px;
    background: #fff;
    display: block;
}

.multiselect__spinner:before,
.multiselect__spinner:after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    margin: -8px 0 0 -8px;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    border-color: #41b883 transparent transparent;
    border-style: solid;
    border-width: 2px;
    box-shadow: 0 0 0 1px transparent;
}

.multiselect__spinner:before {
    animation: spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62);
    animation-iteration-count: infinite;
}

.multiselect__spinner:after {
    animation: spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8);
    animation-iteration-count: infinite;
}

.multiselect__loading-enter-active,
.multiselect__loading-leave-active {
    transition: opacity 0.4s ease-in-out;
    opacity: 1;
}

.multiselect__loading-enter,
.multiselect__loading-leave-active {
    opacity: 0;
}

.multiselect,
.multiselect__input,
.multiselect__single {
    font-family: inherit;
    font-size: 16px;
    touch-action: manipulation;
}

.multiselect {
    box-sizing: content-box;
    display: block;
    position: relative;
    text-align: left;
    color: #35495e;

    // update
    min-height: 32px;
}

.multiselect * {
    box-sizing: border-box;
}

.multiselect:focus {
    outline: none;
}

.multiselect--disabled {
    background: #ededed;
    pointer-events: none;
    opacity: 0.6;
}

.multiselect--active {
    z-index: 50;
}

.multiselect--active:not(.multiselect--above) .multiselect__current,
.multiselect--active:not(.multiselect--above) .multiselect__tags {
    // update
    border-radius: 4px;
}

.multiselect--active:not(.multiselect--above) .multiselect__input {
    // update
    border-radius: 4px;
    border: 1px solid #e3e3e3;
    height: 32px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 6px 8px;
}

.multiselect__input-box {
    padding: 6px 8px;

    border-bottom: 1px solid #e3e3e3;
}

.multiselect--active .multiselect__select {
    transform: rotateZ(180deg);
}

.multiselect--above.multiselect--active .multiselect__current,
.multiselect--above.multiselect--active .multiselect__input,
.multiselect--above.multiselect--active .multiselect__tags {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.multiselect__input,
.multiselect__single {
    position: relative;
    display: inline-block;
    min-height: 20px;
    line-height: 20px;
    border: none;
    border-radius: 5px;
    background: #fff;
    padding: 0 0 0 5px;
    width: calc(100%);
    transition: border 0.1s ease;
    box-sizing: border-box;
    vertical-align: top;
}

.multiselect__input::placeholder {
    // update
    color: #7d7d7d;
}

.multiselect__tag ~ .multiselect__input,
.multiselect__tag ~ .multiselect__single {
    width: auto;
}

.multiselect__input:hover,
.multiselect__single:hover {
    border-color: #cfcfcf;
}

.multiselect__input:focus,
.multiselect__single:focus {
    border-color: #a8a8a8;
    outline: none;
}

.multiselect__single {
    // update
    padding: 6px 8px;
    margin-bottom: 0;
}

.multiselect__tags-wrap {
    display: inline;
}

.multiselect__tags {
    display: block;
    border: 1px solid #e8e8e8;
    background: #fff;
    font-size: 14px;

    // update
    min-height: 32px;
    box-sizing: border-box;
    border-radius: 4px;
}

.multiselect__tag {
    position: relative;
    display: inline-flex;
    padding: 4px 26px 4px 10px;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;

    // update
    background: #eaf6ff;
    color: #7d7d7d;
    align-items: center;
    border-radius: 100px;
    margin: 4px 4px 4px 4px;
    box-sizing: border-box;
}

.multiselect__tag-icon {
    cursor: pointer;
    margin-left: 7px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    font-weight: 700;
    font-style: initial;
    width: 22px;
    text-align: center;
    line-height: 22px;
    transition: all 0.2s ease;
    border-radius: 5px;
}

.multiselect__tag-icon:after {
    content: '×';
    font-size: 14px;

    // update
    color: #7d7d7d;
}

.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
    // update
    background: #eaf6ff;
}

.multiselect__tag-icon:focus:after,
.multiselect__tag-icon:hover:after {
    // update
    color: #7d7d7d;
}

.multiselect__current {
    line-height: 16px;
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    padding: 8px 12px 0;
    padding-right: 30px;
    white-space: nowrap;
    margin: 0;
    text-decoration: none;
    border-radius: 5px;
    border: 1px solid #e8e8e8;
    cursor: pointer;

    // update
    min-height: 32px;
}

.multiselect__select {
    line-height: 16px;
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 40px;
    height: 38px;
    right: 1px;
    top: 1px;
    padding: 4px 8px;
    margin: 0;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.multiselect__select:before {
    position: relative;
    right: 0;
    top: 65%;
    color: #999;
    margin-top: 4px;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #999999 transparent transparent transparent;
    content: '';
}

.multiselect__placeholder {
    color: #adadad;
    display: inline-block;
    display: flex;
    align-items: center;
    height: 32px;
    padding: 0 8px;
}

.multiselect--active .multiselect__placeholder {
    display: none;
}

.multiselect__content-wrapper {
    position: absolute;
    display: block;
    background: #fff;
    width: 100%;
    max-height: 240px;
    overflow: auto;
    border: 1px solid #e8e8e8;

    z-index: 50;
    -webkit-overflow-scrolling: touch;

    // update
    margin-top: 4px;
    margin-bottom: 4px;
    border-radius: 4px;
}

.multiselect__content {
    list-style: none;
    display: inline-block;
    padding: 0;
    margin: 0;
    min-width: 100%;
    vertical-align: top;
}

.multiselect--above .multiselect__content-wrapper {
    bottom: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: none;
    border-top: 1px solid #e8e8e8;
}

.multiselect__content::webkit-scrollbar {
    display: none;
}

.multiselect__element {
    display: block;
}

.multiselect__option {
    display: block;
    padding: 12px;
    min-height: 40px;
    line-height: 16px;
    text-decoration: none;
    text-transform: none;
    /* vertical-align: middle; */
    position: relative;
    cursor: pointer;
    white-space: nowrap;
}

.multiselect__option:after {
    top: 0;
    right: 0;
    position: absolute;
    line-height: 40px;
    padding-right: 12px;
    padding-left: 20px;
    font-size: 13px;
}

.multiselect__option--highlight {
    background: #41b883;
    outline: none;
    color: white;
}

.multiselect__option--highlight:after {
    content: attr(data-select);
    background: #41b883;
    color: white;
}

.multiselect__option--selected-single {
    font-weight: bold;

    // update
    background: #eaf6ff;
    color: #003b65;
}

.multiselect__option--selected-multiple {
    font-weight: bold;

    // update
    color: #003b65;
}

.multiselect__option--selected:after {
    content: attr(data-selected);
    color: silver;
}

.multiselect__option--selected.multiselect__option--highlight {
    background: #ff6a6a;
    color: #fff;
}

.multiselect__option--selected.multiselect__option--highlight:after {
    background: #ff6a6a;
    content: attr(data-deselect);
    color: #fff;
}

.multiselect--disabled .multiselect__current,
.multiselect--disabled .multiselect__select {
    background: #ededed;
    color: #a6a6a6;
}

.multiselect__option--disabled {
    background: #ededed !important;
    color: #a6a6a6 !important;
    cursor: text;
    pointer-events: none;
}

.multiselect__option--group {
    background: #ededed;
    color: #35495e;
}

// update
.multiselect__option--group-box {
    width: 100%;
    display: flex;
    align-items: center;
    color: #7d7d7d;
}

// update
.multiselect__option--group-hr {
    width: 100%;
    margin-left: 4px;
}

.multiselect__option--group.multiselect__option--highlight {
    background: #35495e;
    color: #fff;
}

.multiselect__option--group.multiselect__option--highlight:after {
    background: #35495e;
}

.multiselect__option--disabled.multiselect__option--highlight {
    background: #dedede;
}

.multiselect__option--group-selected.multiselect__option--highlight {
    background: #ff6a6a;
    color: #fff;
}

.multiselect__option--group-selected.multiselect__option--highlight:after {
    background: #ff6a6a;
    content: attr(data-deselect);
    color: #fff;
}

.multiselect-enter-active,
.multiselect-leave-active {
    transition: all 0.15s ease;
}

.multiselect-enter,
.multiselect-leave-active {
    opacity: 0;
}

.multiselect__strong {
    margin-bottom: 8px;
    line-height: 20px;
    display: inline-block;
    vertical-align: top;
}

*[dir='rtl'] .multiselect {
    text-align: right;
}

*[dir='rtl'] .multiselect__select {
    right: auto;
    left: 1px;
}

*[dir='rtl'] .multiselect__tags {
    padding: 8px 8px 0px 40px;
}

*[dir='rtl'] .multiselect__content {
    text-align: right;
}

*[dir='rtl'] .multiselect__option:after {
    right: auto;
    left: 0;
}

*[dir='rtl'] .multiselect__clear {
    right: auto;
    left: 12px;
}

*[dir='rtl'] .multiselect__spinner {
    right: auto;
    left: 1px;
}

@keyframes spinning {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(2turn);
    }
}
</style>


