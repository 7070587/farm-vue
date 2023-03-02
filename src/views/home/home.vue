<template>
    <div>
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
//#endregion

//#region Components Views
//#endregion
//#endregion

@Component({
    components: {},
})
export default class VuePageClass extends Vue {
    //#region Prop
    //#endregion

    //#region Variables
    //#endregion

    //#region Computed
    //#endregion

    //#region Watch
    //#endregion

    //#region Vue Life
    private async beforeCreate(): Promise<void> {}
    private async created(): Promise<void> {}
    private async beforeMount(): Promise<void> {}
    private searchInsertPosition(nums: number[], target: number): number {
        if (nums.indexOf(target) > -1) {
            return nums.indexOf(target);
        }

        nums.push(target);
        nums.sort((a, b) => a - b);

        return nums.indexOf(target);
    }
    private async mounted(): Promise<void> {
        // console.log(`mounted => `, this.rangeSumQueryImmutable([-2, 0, 3, -5, 2, -1], 0, 2));
        // console.log(`mounted => `, this.rangeSumQueryImmutable([-2, 0, 3, -5, 2, -1], 2, 5));
        console.log(`mounted => `, this.searchInsertPosition([1, 3, 5, 6], 5));
        console.log(`mounted => `, this.searchInsertPosition([1, 3, 5, 6], 2));
        console.log(`mounted => `, this.searchInsertPosition([1, 3, 5, 6], 7));
        console.log(`mounted => `, this.searchInsertPosition([1, 3, 5, 6], 0));
        // console.log(`mounted => `, this.longestCommonPrefix([8, 6, 1, 3, 4, 5]));
        // console.log(`mounted => `, this.palindromeNumberUseString(-121));
        // console.log(`mounted => `, this.palindromeNumberUseString(99));
        // console.log(`mounted => `, this.palindromeNumberUseString(121));
        // console.log(`mounted => `, this.palindromeNumberUseString(1212));
        // console.log(`mounted => `, this.palindromeNumberUseString(9988));
    }

    private async beforeDestroy(): Promise<void> {}
    private async destroyed(): Promise<void> {}
    //#endregion

    //#region Init
    //#endregion

    //#region View Event
    //#endregion

    //#region Other Function
    //#endregion
}
</script>

<style scoped lang="scss">
</style>
