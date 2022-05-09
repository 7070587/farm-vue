export namespace Multiselect {
    export interface IOption {
        key: string | number | boolean;
        value: string;
    }

    export interface IGroupOption {
        groupName: string;
        lists: IOption[];
    }

    export type IOptions = IOption[] | IGroupOption[];
    export type IValue = IOption | IOption[];
}
