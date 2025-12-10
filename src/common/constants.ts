import {
  InputTypes,
  widths,
  type TBodyParams,
  type TInputsGroups,
} from "./types";

export const initBodyParams: TBodyParams = {
  height: "",
  heightUnit: "",
  weight: "",
  weightUnit: "",
};

export const heightOptions = [{ label: "sm", value: "см" }];
export const weightOptions = [{ label: "kg", value: "кг" }];
export const sexOptions = [
  { label: "male", value: "мужской" },
  { label: "female", value: "женский" },
];
export const activityOptions = [
  { label: "none", value: "Сидячий образ жизни" },
  { label: "light", value: "Малоподвижный" },
  { label: "medium", value: "Тренировки 1-3 раза в неделю" },
  { label: "high", value: "Тренировки 4-5 раз в неделю" },
  { label: "very high", value: "Тренировки 6-7 раз в неделю" },
];

// обхват шеи, талии, предплечья, запястья, бедер, бедра, голени
export const inputsData: TInputsGroups = [
  {
    label: "imt",
    name: "ИМТ/Калории",
    inputs: [
      {
        name: "height",
        type: InputTypes.TEXT,
        placeholder: "Рост",
        errorMessage: "Введите корректный рост",
        value: "0",
        validation: /^$|^[1-9][0-9]{0,2}$/,
        width: widths.MD,
      },
      {
        name: "heightUnit",
        type: InputTypes.SELECT,
        placeholder: "",
        value: heightOptions[0].label,
        options: heightOptions,
        width: widths.SM,
      },
      {
        name: "weight",
        type: InputTypes.TEXT,
        placeholder: "Вес",
        value: "0",
        validation: /^$|^[1-9][0-9]{0,3}$/,
        width: widths.MD,
      },
      {
        name: "weightUnit",
        type: InputTypes.SELECT,
        value: weightOptions[0].label,
        placeholder: "",
        options: weightOptions,
        width: widths.SM,
      },
      {
        name: "age",
        type: InputTypes.TEXT,
        placeholder: "Возраст",
        value: "",
        validation: /^$|^[1-9][0-9]{0,3}$/,
        width: widths.SM,
      },
      {
        name: "sexUnit",
        type: InputTypes.SELECT,
        value: "",
        placeholder: "Пол",
        options: sexOptions,
        width: widths.MD,
      },
      {
        name: "activity",
        type: InputTypes.SELECT,
        value: "",
        placeholder: "Активность",
        options: activityOptions,
        width: widths.LG,
      },
    ],
  },
  { label: "fatpercent", name: "Процент жира", inputs: [] },
];
