export const validateInput = (validation: RegExp, value: string) => {
  return validation.test(value);
};
