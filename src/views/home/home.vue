<template>
    <div>
        <div class="home">
            <div class="left">
                <div
                    class="nav"
                    :class="{'selected': showFormBuilder}"
                    @click="clickToFormBuilder"
                >
                    Form Builder
                </div>

                <div
                    class="nav"
                    :class="{'selected': showTheme}"
                    @click="clickToTheme"
                >
                    Theme
                </div>
            </div>

            <div class="center">
                <FormBuilder v-if="showFormBuilder" />
                <Theme v-if="showTheme" />
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
import { EElementType } from '@/components/form-builders/elements';
//#endregion

//#region Views
import { Model } from './models';
//#endregion

//#region Components
//#endregion

//#region Components Src
import { FormBuilder } from '@/components';
import Theme from '@/views/theme/theme.vue';
//#endregion

//#region Components Views

//#endregion
//#endregion

@Component({
    components: { FormBuilder, Theme },
})
export default class VuePageClass extends Vue {
    //#region Prop
    //#endregion

    //#region Variables
    private showFormBuilder: boolean = true;
    private showTheme: boolean = false;
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
    private clickToFormBuilder(): void {
        this.showFormBuilder = true;
        this.showTheme = false;
    }

    private clickToTheme(): void {
        this.showFormBuilder = false;
        this.showTheme = true;
    }
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
.left {
    padding: 16px;
}

.selected {
    color: #006ab7;
}

.nav {
    cursor: pointer;

    &:hover {
        color: #2fa8ff;
    }
}
</style>
