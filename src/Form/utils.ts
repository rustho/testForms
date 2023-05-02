import { Field, FormValues } from ".";

export const getFormValues = (formFields: Field[], formValues: FormValues) =>
  formFields
    .filter(({ displayRule }) => !displayRule || formValues[displayRule])
    .reduce(
      (acc, { kind, name }) => ({
        ...acc,
        [name]: kind === "bool" ? Boolean(formValues[name]) : formValues[name],
      }),
      {}
    );
