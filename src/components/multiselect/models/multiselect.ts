export namespace Multiselect {
    export interface IOption {
        key: string | number | boolean;
        value: string;
    }

    export interface IGroupOptions {
        groupName: string;
        lists: IOption[];
    }

    export type IOptions = IOption[] | IGroupOptions[];
    export type IValue = IOption | IOption[];
}
