import { Checkbox } from "antd";
import { checkboxesOptions } from "../../common/constants";
import "../../styles/checkbox.scss";
export const Checkboxes = ({
  setCheckedCalculations,
}: {
  setCheckedCalculations: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const handleCheckboxGroupChange = (checkedValues: string[]) => {
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
