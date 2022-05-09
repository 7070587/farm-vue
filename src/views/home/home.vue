<template>
    <div>
        <Multiselect
            v-model="value"
            placeholder="please select"
            selectedLabel=""
            :deselectLabel="deselectLabel"
            :max='4'
            :allow-empty="allowEmpty"
            :searchable="true"
            :multiple="true"
            :options="options"
            :disabled="false"
            @input="input"
        >
            <template #maxElements>
                已達選擇數量上限，請先移除選定項目後再選擇新項目
            </template>

            <template #noResult>
                找不到資料，請更改搜尋條件後再次查詢
            </template>

            <template #noOptions>
                清單為空
            </template>
        </Multiselect>

        <br>
        <br>
        <br>

        <Multiselect
            v-model="groupValue"
            placeholder="please select"
            selectedLabel=""
            :deselectLabel="deselectLabel"
            :max='30'
            :allow-empty="allowEmpty"
            :searchable="true"
            :multiple="true"
            group-values="libs"
            group-label="type"
            :group-select="true"
            :options="groupOptions"
            @input="input"
        >
            <template #maxElements>
                已達選擇數量上限，請先移除選定項目後再選擇新項目
            </template>

            <template #noResult>
                找不到資料，請更改搜尋條件後再次查詢
            </template>

            <template #noOptions>
                清單為空
            </template>
        </Multiselect>
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
//#endregion

//#region Views
//#endregion

//#region Components
//#endregion

//#region Components Src
import Multiselect from '@/components/multiselect/multiselect-v1.vue';

//#endregion

//#region Components Views
//#endregion
//#endregion

@Component({
    components: { Multiselect },
})
export default class VuePageClass extends Vue {
    //#region Prop
    private allowEmpty: boolean = true;
    //#endregion

    //#region Variables
    // private value = [{ value: 'Javascript', key: 'js' }];
    private value = [{ value: 'Javascript', key: 'js' }];
    private options = [
        { value: 'Vue.js', key: 'vu' },
        { value: 'Javascript', key: 'js' },
        { value: 'Open Source', key: 'os' },
        { value: 'React', key: 're' },
        { value: 'Typescript', key: 'ts' },
        { value: 'HTML', key: 'html' },
    ];

    private groupValue = [{ value: 'Vue.js', key: 'Front-end' }];
    private groupOptions = [
        {
            type: 'Javascript',
            libs: [
                { value: 'Vue.js', key: 'Front-end' },
                { value: 'Adonis', key: 'Backend' },
                { value: 'Moment.js', key: 'Moment' },
                { value: 'Popper.js', key: 'Popper' },
            ],
        },
        {
            type: 'Ruby',
            libs: [
                { value: 'Rails', key: 'Backend' },
                { value: 'Sinatra', key: 'Backend' },
            ],
        },
        {
            type: 'Other',
            libs: [
                { value: 'Laravel', key: 'Backend' },
                { value: 'Phoenix', key: 'Backend' },
            ],
        },
    ];

    //#endregion

    //#region Computed
    private get deselectLabel(): string {
        return this.allowEmpty ? 'X' : '';
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
    private input(value): void {
        console.log(` => `, value);
    }
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
