import { Button, Form, Input, Select, SelectItem } from "@heroui/react";
import { InputTypes, type TInputData } from "../common/types";
import { useState } from "react";

export const InputsBlock = ({ inputs }: { inputs: TInputData[] }) => {
  const [inputsData, setInputsData] = useState(inputs);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    regex: RegExp | undefined,
    name: string
  ) => {
    const value = e.target.value;
    if (!regex) return;
    console.log(regex, value, regex.test(value));
    if (regex.test(value)) {
      setInputsData((prevState) => {
        return prevState.map((input) => {
          if (input.name === name) {
            return { ...input, value };
          }
          return input;
        });
      });
    }
  };
  return (
    <Form className="w-[600px] flex flex-col gap-4 items-center">
      <div className="grid grid-cols-12 gap-4">
        {inputsData.map((input) => {
          if (input.type === InputTypes.TEXT) {
            return (
              <Input
                className={`${input.width} w-full`}
                key={input.name}
                isRequired
                errorMessage={input.errorMessage}
                aria-label={input.label}
                labelPlacement="outside"
                name={input.name}
                placeholder={input.placeholder}
                type="text"
                value={input.value}
                onChange={(e) => handleChange(e, input.validation, input.name)}
              />
            );
          }
          if (input.type === InputTypes.SELECT) {
            return (
              <Select
                defaultSelectedKeys={[input.value]}
                placeholder={input.placeholder}
                className={`${input.width} w-full`}
              >
                {input.options?.map((option) => (
                  <SelectItem key={option.label} textValue={option.value}>
                    {option.value}
                  </SelectItem>
                ))}
              </Select>
            );
          }
        })}
      </div>
      <Button color="primary" className="w-full">
        Рассчитать
      </Button>
    </Form>
  );
};
