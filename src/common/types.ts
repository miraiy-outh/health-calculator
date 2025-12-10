export const enum InputTypes {
  TEXT = "text",
  SELECT = "select",
}
export const enum widths {
  SM = "col-span-2",
  MD = "col-span-4",
  LG = "col-span-6",
  XLG = "col-span-8",
  FULL = "col-span-12",
}

export type InputsGroupNames = "imt" | "fatpercent";

export type TOption = { value: string; label: string };

export type TSelect = {
  type: InputTypes.SELECT;
  options: TOption[];
};

export type TInputText = {
  type: InputTypes.TEXT;
};

export type TInputData = (TSelect | TInputText) & {
  name: string;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  value: string;
  validation?: RegExp;
  width: widths;
};

export type TInputsGroups = {
  name: string;
  label: string;
  inputs: TInputData[];
}[];

export type TBodyParams = {
  height: string;
  heightUnit: string;
  weight: string;
  weightUnit: string;
};
