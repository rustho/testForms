import { Field, getFormValues } from ".";

describe("getFormValues", () => {
  const fields: Field[] = [
    { name: "name", label: "Name", kind: "text" },
    { name: "age", label: "Age", kind: "text", displayRule: "isAdult" },
    { name: "isAdult", label: "Are you an adult?", kind: "bool" },
    {
      name: "hiddenField",
      label: "hidden every time",
      kind: "bool",
      displayRule: "unknown",
    },
  ];

  test("should return all fields when no display rule is provided", () => {
    const formValues = { name: "John", age: "25", isAdult: true };
    expect(getFormValues(fields, formValues)).toEqual(formValues);
  });

  test("should return only fields that match their display rule", () => {
    const formValues = { name: "John", age: "25", isAdult: false };
    expect(getFormValues(fields, formValues)).toEqual({
      name: "John",
      isAdult: false,
    });
  });

  test("should handle missing values", () => {
    const formValues = { name: "John", isAdult: true };
    expect(getFormValues(fields, formValues)).toEqual({
      name: "John",
      age: undefined,
      isAdult: true,
    });
  });
});
