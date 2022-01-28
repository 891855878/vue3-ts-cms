type IFormType = "input" | "password" | "select" | "datePicker";

export interface IFormItem {
  field: string;
  type: IFormType;
  label: string;
  placeholder?: string;
  rules?: any[];
  options?: any[];
  otherOptions?: any;
  isHidden?: boolean;
}

export interface ISearchType {
  formItems: IFormItem[];
  labelWidth?: string;
  itemStyle?: any;
  colLayout?: any;
}
