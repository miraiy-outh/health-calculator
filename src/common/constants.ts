import type { CheckboxOptionType } from "antd";
import {
  InputTypes,
  type InputsGroupNames,
  type TBodyParams,
  type TInputsGroups,
} from "./types";

export const checkboxesOptions: CheckboxOptionType<InputsGroupNames>[] = [
  { label: "ИМТ", value: "imt" },
  { label: "Калории", value: "calories" },
];

export const initBodyParams: TBodyParams = {
  height: "",
  heightUnit: "",
  weight: "",
  weightUnit: "",
};

export const inputsData: TInputsGroups = {
  imt: [
    {
      name: "height",
      type: InputTypes.TEXT,
      placeholder: "Рост",
      error: false,
      validation: /^$|^[1-9][0-9]{0,2}$/,
    },
    {
      name: "heightUnit",
      type: InputTypes.SELECT,
      placeholder: "",
      error: false,
    },
    {
      name: "weight",
      type: InputTypes.TEXT,
      placeholder: "Вес",
      error: false,
      validation: /^$|^[1-9][0-9]{0,3}$/,
    },
    {
      name: "weightUnit",
      type: InputTypes.SELECT,
      placeholder: "",
      error: false,
    },
  ],
  calories: [],
};
