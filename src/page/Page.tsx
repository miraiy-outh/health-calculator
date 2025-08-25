import Title from "antd/es/typography/Title";
import styles from "./Page.module.scss";
import { Inputs } from "../components/Inputs/Inputs";
import { useState } from "react";
import { Checkboxes } from "../components/Checkboxes/Checkboxes";
import type { InputsGroupNames, TBodyParams } from "../common/types";
import { checkboxesOptions, initBodyParams } from "../common/constants";

export const Page = () => {
  const [checkedCalculations, setCheckedCalculations] = useState<
    InputsGroupNames[]
  >([checkboxesOptions[0].value]);
  const [bodyParams, setBodyParams] = useState<TBodyParams>(initBodyParams);
  return (
    <div className={styles.container}>
      <Title>Калькулятор здоровья</Title>
      <Checkboxes setCheckedCalculations={setCheckedCalculations} />
      <Inputs
        calculations={checkedCalculations}
        bodyParams={bodyParams}
        setBodyParams={setBodyParams}
      />
    </div>
  );
};
