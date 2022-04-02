//#region ElementType enum
export enum EElementType {
    /**
     * 顯示型元件
     */
    display_text = 'display_text',
    display_image = 'display_image',

    /**
     * 輸入型元件
     */
    input_single_text = 'input_single_text',
    input_multiple_text = 'input_multiple_text',
    input_number = 'input_number',
    input_text_editor = 'input_text_editor',

    /**
     * 選擇型元件
     */
    pick_dropdown_list = 'pick_dropdown_list',
    pick_radio = 'pick_radio',
    pick_checkbox = 'pick_checkbox',
    pick_switch = 'pick_switch',
    pick_slider = 'pick_slider',
    pick_date = 'pick_date',

    /**
     * 布局型元件
     */
    layout_divider = 'layout_divider',
}
//#endregion

//#region shared enum
export enum EDateType {
    time = 'time',
    date = 'date',
    month = 'month',
    year = 'year',
    datetime = 'datetime',
}

export enum EDateFormat {
    datetime_slash_YYYYMMDDHHmmss = 'YYYY/MM/DD HH:mm:ss',
    date_slash_YYYYMMDD = 'YYYY/MM/DD',
    timeHHmmss = 'HH:mm:ss',
    year = 'YYYY',
    month = 'MM',
}

export enum ETextPosition {
    left = 'left',
    center = 'center',
    right = 'right',
}

export enum EFontWeight {
    normal = 'normal',
    bold = 'bold',
}

export enum EDividerStyle {
    solid = 'solid',
    dotted = 'dotted',
    dashed = 'dashed',
    double = 'double',
}
//#endregion

//#region shared interface
export interface IDateType {
    value: EDateType;
    text: string;
}

export interface ITextPosition {
    value: ETextPosition;
    text: string;
}

export interface IFontWeight {
    value: EFontWeight;
    text: string;
}

export interface IDividerStyle {
    value: EDividerStyle;
    text: string;
}

export interface IValueText {
    value: string;
    text: string;
}

export interface IValueTextRadioCheckbox {
    value: string;
    text: string;
    checked: boolean;
    unchecked: boolean;
}
//#endregion

//#region config interface
export interface IConfigDisplayText {
    label: string;
    isShowLabel: boolean;

    content: string;
}

export interface IConfigDisplayImage {
    label: string;
    isShowLabel: boolean;

    content: string;
    width: number;
    height: number;
    widthOriginal: number;
    heightOriginal: number;
}

export interface IConfigInputSingleText {
    label: string;
    isShowLabel: boolean;
    isRequired: boolean;

    placeholder: string;
    content: string;
    wordLimit: number;
    isShowWordLimit: boolean;
}

export interface IConfigInputMultipleText {
    label: string;
    isShowLabel: boolean;
    isRequired: boolean;

    placeholder: string;
    content: string;
    wordLimit: number;
    isShowWordLimit: boolean;
}

export interface IConfigInputNumber {
    label: string;
    isShowLabel: boolean;
    isRequired: boolean;

    placeholder: string;
    content: number;
    max: number;
    min: number;
    step: number;
}

export interface IConfigInputTextEditor {
    label: string;
    isShowLabel: boolean;
    isRequired: boolean;

    placeholder: string;
    content: string;
}

export interface IConfigPickDropdownList {
    label: string;
    isShowLabel: boolean;
    isRequired: boolean;

    placeholder: string;
    content: IValueTextRadioCheckbox | IValueTextRadioCheckbox[];
    isSearchable: boolean;
    isMultiple: boolean;
    options: IValueTextRadioCheckbox[];
}

export interface IConfigPickRadio {
    label: string;
    isShowLabel: boolean;
    isRequired: boolean;

    content: IValueTextRadioCheckbox;
    isStacked: boolean;
    options: IValueTextRadioCheckbox[];
}

export interface IConfigPickCheckbox {
    label: string;
    isShowLabel: boolean;
    isRequired: boolean;

    content: IValueTextRadioCheckbox[];
    isStacked: boolean;
    options: IValueTextRadioCheckbox[];
}

export interface IConfigPickSwitch {
    label: string;
    isShowLabel: boolean;
    isRequired: boolean;

    content: boolean;
    trueText: string;
    trueColor: string;
    falseText: string;
    falseColor: string;
    width: number;
}

export interface IConfigPickSlider {
    label: string;
    isShowLabel: boolean;
    isRequired: boolean;

    content: string;
    max: number;
    min: number;
    step: number;
}

export interface IConfigPickDate {
    label: string;
    isShowLabel: boolean;
    isRequired: boolean;

    placeholder: string;
    type: IDateType;
    format: EDateFormat;
    content: Date;
}

export interface IConfigLayoutDivider {
    content: string;

    textPosition: ITextPosition;
    fontWeight: IFontWeight;
    fontSize: number;
    fontColor: string;
    dividerStyle: IDividerStyle;
    dividerHeight: number;
    dividerColor: string;
}
//#endregion

//#region FormBuilderElement type
export type TFormBuilderElement =
    /**
     * 顯示型元件
     */
    | {
          type: EElementType.display_text;
          config: IConfigDisplayText;
      }
    | {
          type: EElementType.display_image;
          config: IConfigDisplayImage;
      }
    | {
          type: EElementType.input_single_text;
          config: IConfigInputSingleText;
      }
    | {
          type: EElementType.input_multiple_text;
          config: IConfigInputMultipleText;
      }
    | {
          type: EElementType.input_number;
          config: IConfigInputNumber;
      }
    | {
          type: EElementType.input_text_editor;
          config: IConfigInputTextEditor;
      }

    /**
     * 選擇型元件
     */
    | {
          type: EElementType.pick_dropdown_list;
          config: IConfigPickDropdownList;
      }
    | {
          type: EElementType.pick_radio;
          config: IConfigPickRadio;
      }
    | {
          type: EElementType.pick_checkbox;
          config: IConfigPickCheckbox;
      }
    | {
          type: EElementType.pick_switch;
          config: IConfigPickSwitch;
      }
    | {
          type: EElementType.pick_slider;
          config: IConfigPickSlider;
      }
    | {
          type: EElementType.pick_date;
          config: IConfigPickDate;
      }

    /**
     * 布局型元件
     */
    | {
          type: EElementType.layout_divider;
          config: IConfigLayoutDivider;
      };
//#endregion
