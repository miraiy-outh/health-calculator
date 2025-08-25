import Title from "antd/es/typography/Title";
import styles from "./Page.module.scss";
import { Inputs } from "../components/Inputs/Inputs";
import type { TCheckedCalculations } from "../common/types";
import { initCheckedCalculations } from "../common/constants";
import { useState } from "react";

export const Page = () => {
  const [checkedCalculations, setCheckedCalculations] =
    useState<TCheckedCalculations>(initCheckedCalculations);
  return (
    <div className={styles.container}>
      <Title>Калькулятор здоровья</Title>
      <Inputs calculations={checkedCalculations} />
    </div>
  );
};
