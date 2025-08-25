import { Input, Select } from "antd";
import {
  InputTypes,
  type TBodyParams,
  type TInputData,
} from "../../common/types";
import "../../styles/input.scss";
import { validateInput } from "../../helpers/validate-input.helper";

type TProps = {
  inputData: TInputData;
  value: string | number;
  setBodyParams: React.Dispatch<React.SetStateAction<TBodyParams>>;
};

export const InputConstructor = ({
  inputData,
  value,
  setBodyParams,
}: TProps) => {
  const { type } = inputData;
  const handleInputChange = (value: string | string[]) => {
    if (
      inputData?.validation &&
      typeof value === "string" &&
      validateInput(inputData.validation, value)
    ) {
      setBodyParams((prevState) => {
        return { ...prevState, [inputData.name]: value };
      });
    }
  };
  return (
    <>
      {type === InputTypes.TEXT && (
        <Input
          width="300px"
          placeholder={inputData?.placeholder || ""}
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      )}
      {type === InputTypes.SELECT && <Select />}
    </>
  );
};
