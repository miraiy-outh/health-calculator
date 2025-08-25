import type { TCheckedCalculations } from "../../common/types";

export const Inputs = ({
  calculations,
}: {
  calculations: TCheckedCalculations;
}) => {
  const { imt, calories } = calculations;
  return (
    <div>
      {imt && <div></div>}
      {calories && <div></div>}
    </div>
  );
};
