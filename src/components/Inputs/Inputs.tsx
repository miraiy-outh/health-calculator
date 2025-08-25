import { inputsData } from "../../common/constants";
import type { InputsGroupNames, TBodyParams } from "../../common/types";
import { InputConstructor } from "../InputConstructor/InputConstructor";
import styles from "./Inputs.module.scss";

type TProps = {
  calculations: InputsGroupNames[];
  bodyParams: TBodyParams;
  setBodyParams: React.Dispatch<React.SetStateAction<TBodyParams>>;
};

export const Inputs = ({ calculations, bodyParams, setBodyParams }: TProps) => {
  return (
    <div className={styles.container}>
      {calculations.map((name) => {
        return (
          <div className={styles.subContainer}>
            {inputsData[name].map((item) => (
              <InputConstructor
                inputData={item}
                value={bodyParams[item.name as keyof TBodyParams]}
                setBodyParams={setBodyParams}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};
