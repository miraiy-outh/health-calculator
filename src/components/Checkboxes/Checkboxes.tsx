import { Checkbox } from "antd";
import { checkboxesOptions } from "../../common/constants";
import "../../styles/checkbox.scss";
import type { InputsGroupNames } from "../../common/types";
export const Checkboxes = ({
  setCheckedCalculations,
}: {
  setCheckedCalculations: React.Dispatch<
    React.SetStateAction<InputsGroupNames[]>
  >;
}) => {
  const handleCheckboxGroupChange = (checkedValues: InputsGroupNames[]) => {
    setCheckedCalculations(checkedValues);
  };

  return (
    <div>
      <Checkbox.Group
        defaultValue={[checkboxesOptions[0].value]}
        options={checkboxesOptions}
        onChange={handleCheckboxGroupChange}
        className="custom-checkbox-group"
      />
    </div>
  );
};
