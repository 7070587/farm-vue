<template>
    <div class="theme">
        <h3 class="theme--title">Please Select Theme</h3>
        <select
            v-model="selectedTheme"
            @change="changeTheme"
        >
            <option
                v-for="(option, index) in options"
                :key="'theme_' + index"
                :value="option.value"
            >
                {{ option.text }}
            </option>
        </select>

        <div class="theme--divider">
            <hr>
        </div>

        <div class="theme--card">
            <Card>
                <template #body>
                    <div class="theme--card-body">
                        <Button text="Button"></Button>
                    </div>
                </template>
            </Card>
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
//#endregion

//#region Views
import { Theme as Model } from './models';
//#endregion

//#region Components
//#endregion

//#region Components Src
//#endregion

//#region Components Views
import Card from '@/views/theme/card.vue';
import Button from '@/views/theme/button.vue';
//#endregion
//#endregion

@Component({
    components: { Card, Button },
})
export default class VuePageClass extends Vue {
    //#region Prop
    //#endregion

    //#region Variables
    //#endregion

    //#region Computed
    private selectedTheme: string = 'default';

    private options: { value: Model.ETheme; text: string }[] = [
        { value: Model.ETheme.default, text: 'Default' },
        { value: Model.ETheme.light, text: 'Light' },
        { value: Model.ETheme.dark, text: 'Dark' },
    ];
    //#endregion

    //#region Watch
    //#endregion

    //#region Vue Life
    private async beforeCreate(): Promise<void> {}
    private async created(): Promise<void> {}
    private async beforeMount(): Promise<void> {}
    private async mounted(): Promise<void> {
        // check for active theme
        let htmlElement: HTMLElement = document.documentElement;
        let theme: string = localStorage.getItem(Model.ETheme.theme);
        this.selectedTheme = theme ?? 'default';

        switch (theme) {
            case Model.ETheme.dark:
                htmlElement.setAttribute(Model.ETheme.theme, Model.ETheme.dark);
                break;
            case Model.ETheme.light:
                htmlElement.setAttribute(Model.ETheme.theme, Model.ETheme.light);
                break;
            default:
                htmlElement.setAttribute(Model.ETheme.theme, Model.ETheme.default);
                break;
        }
    }
    private async beforeDestroy(): Promise<void> {}
    private async destroyed(): Promise<void> {}
    //#endregion

    //#region Init
    //#endregion

    //#region View Event
    private changeTheme(theme: Model.ETheme) {
        let htmlElement = document.documentElement;

        localStorage.setItem(Model.ETheme.theme, this.selectedTheme);
        htmlElement.setAttribute(Model.ETheme.theme, this.selectedTheme);
    }
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
.theme {
    height: 100vh;
    padding: 0.5rem 1rem;
    background-color: var(--theme-background-color);

    select {
        width: 10rem;
        height: 1.5rem;
    }

    &--title {
        color: var(--theme--title);
    }

    &--divider {
        padding: 1rem 0;
    }

    &--card {
        height: 10rem;

        &-body {
            padding: 1rem;
        }
    }
}
</style>
