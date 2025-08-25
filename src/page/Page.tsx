import Title from "antd/es/typography/Title";
import styles from "./Page.module.scss";
import { Inputs } from "../components/Inputs/Inputs";
import { useState } from "react";
import { Checkboxes } from "../components/Checkboxes/Checkboxes";

export const Page = () => {
  const [checkedCalculations, setCheckedCalculations] = useState<string[]>([]);
  return (
    <div className={styles.container}>
      <Title>Калькулятор здоровья</Title>
      <Checkboxes setCheckedCalculations={setCheckedCalculations} />
      <Inputs calculations={checkedCalculations} />
    </div>
  );
};
