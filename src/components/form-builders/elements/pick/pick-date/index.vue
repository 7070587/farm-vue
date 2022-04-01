<template>
    <b-row>
        <b-col
            cols="2"
            v-if="config.isShowLabel"
        >
            <div class="label">
                <span
                    v-if="config.isRequired"
                    class="label--required"
                >
                    *
                    <span class="label--required__content"> {{ config.label }}</span>
                </span>

                <span v-else>
                    {{ config.label }}
                </span>

            </div>
        </b-col>

        <b-col :cols="contentCols">
            <DeleteCopy
                v-if="isActived"
                @actionCopy="actionCopy"
                @actionDelete="actionDelete"
            />

            <date-picker
                v-model="config.content"
                :placeholder="config.placeholder"
                :type="config.type.value"
                :format="config.format"
                :title-format="config.format"
                :disabled="true"
                @clear="clearDate"
            ></date-picker>
        </b-col>
    </b-row>
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
import { IConfigPickDate, EDateFormat } from '@/components/form-builders/elements/models';
//#endregion

//#region Views
//#endregion

//#region Components
//#endregion

//#region Components Src
import DeleteCopy from '@/components/form-builders/action/delete-copy.vue';
//#endregion

//#region Components Views
//#endregion

//#region DatePicker
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
//#endregion
//#endregion

@Component({
    components: { DeleteCopy, DatePicker },
})
export default class ComponentElement extends Vue {
    //#region Prop
    @Prop({
        type: Boolean, // Boolean, Number, String, Array, Object
        default: () => false,
    })
    private isActived: boolean;

    @Prop({
        type: Number, // Boolean, Number, String, Array, Object
        default: () => undefined,
    })
    private index: number;

    @Prop({
        type: Object, // Boolean, Number, String, Array, Object
        default: () => undefined,
    })
    private activedItemData: Model.IFormBuilderElement;
    //#endregion

    //#region Variables
    private format: EDateFormat = EDateFormat.date_slash_YYYYMMDD;
    private eDateFormat = EDateFormat;
    //#endregion

    //#region Computed
    private get config(): IConfigPickDate {
        let config = this.activedItemData['config'] as IConfigPickDate;

        if (!!config) {
            config.content = new Date(config.content);
        }

        return config;
    }

    private get contentCols(): number {
        return this.config.isShowLabel ? 10 : 12;
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
    private actionCopy(): void {
        this.$emit('actionCopy', this.activedItemData, this.index);
    }

    private actionDelete(): void {
        this.$emit('actionDelete', this.activedItemData, this.index);
    }

    private clearDate(): void {
        this.config.content = new Date();
    }
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
::v-deep .mx-input:disabled {
    color: #000;
    background-color: #fff;
    border-color: #ccc;
    cursor: default;
}
</style>
