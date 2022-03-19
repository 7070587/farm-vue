export namespace ModelsConfigComponent {
    export interface IComponentList {
        label: string;
        tag: string;
        type?: string;
        icon: string;
        id?: string;
        children?: IComponentList[];
    }
}
