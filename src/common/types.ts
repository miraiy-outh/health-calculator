export const enum InputTypes {
  TEXT = "text",
  SELECT = "select",
  CHECKBOX = "checkbox",
}

export type InputsGroupNames = "imt" | "calories";

export type TOption = { value: string; label: string };

export type TInputData = {
  name: string;
  type: InputTypes;
  label?: string;
  placeholder?: string;
  error: boolean;
  options?: TOption[];
  validation?: RegExp;
};

export type TInputsGroups = {
  [key in InputsGroupNames]: TInputData[];
};

export type TBodyParams = {
  height: string;
  heightUnit: string;
  weight: string;
  weightUnit: string;
};
