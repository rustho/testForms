import { generateFields } from "./generatorFields";
import { Field } from "../Form";

describe("generateFields", () => {
  it("returns an empty array when count is 0", () => {
    const fields: Field[] = generateFields(0);
    expect(fields).toEqual([]);
  });

  it("generates the correct number of fields", () => {
    const fields: Field[] = generateFields(5);
    expect(fields.length).toBe(5);
  });

  it("generates fields with correct name, kind, label and displayRule", () => {
    const fields: Field[] = generateFields(3);

    expect(fields[0]).toEqual({
      name: "field1",
      kind: "text",
      label: "Field 1",
      displayRule: undefined,
    });

    expect(fields[1]).toEqual({
      name: "field2",
      kind: "bool",
      label: "Field 2",
      displayRule: undefined,
    });

    expect(fields[2]).toEqual({
      name: "field3",
      kind: "text",
      label: "Field 3",
      displayRule: undefined,
    });
  });
});
