import { Field } from "../Form";

export const generateFields = (count: number): Field[] => {
  const fields: Field[] = [];

  for (let i = 0; i < count; i++) {
    const fieldName = `field${i + 1}`;
    const fieldType: "text" | "bool" = i % 2 === 0 ? "text" : "bool";
    const fieldDisplayRule = i > 0 && i % 5 === 0 ? `field${i}` : undefined;

    fields.push({
      name: fieldName,
      kind: fieldType,
      label: `Field ${i + 1}`,
      displayRule: fieldDisplayRule,
    });
  }

  return fields;
};
