import { InputsBlock } from "../components/InputsBlock";
import { inputsData } from "../common/constants";

export const Page = () => {
  return (
    <div className="p-8 flex flex-col gap-4 items-center">
      <span className="text-3xl font-semibold mb-4">Калькулятор здоровья</span>
      {inputsData.map((data) => (
        <div className="flex flex-col gap-2 items-center">
          <span className="text-xl font-semibold mb-2">{data.name}</span>
          <InputsBlock inputs={data.inputs} />
        </div>
      ))}
    </div>
  );
};
