import { checkboxesOptions } from "../../common/constants";

export const Inputs = ({ calculations }: { calculations: string[] }) => {
  const isImt = calculations.includes(checkboxesOptions[0].value);
  const isCalories = calculations.includes(checkboxesOptions[1].value);
  return (
    <div>
      {isImt && <div></div>}
      {isCalories && <div></div>}
    </div>
  );
};
