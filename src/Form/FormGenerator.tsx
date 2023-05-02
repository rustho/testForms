import { useState, FormEvent } from "react";
import { Field, FormValues, getFormValues, FormField } from ".";

interface FormGeneratorProps {
  fields: Field[];
}

export const FormGenerator = ({ fields }: FormGeneratorProps) => {
  const [formValues, setFormValues] = useState<FormValues>({});

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formResult = getFormValues(fields, formValues);
    console.log(formResult);
  };

  const handleFieldChange = (fieldName: string, value: string | boolean) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [fieldName]: value,
    }));
  };

  const isFieldVisible = (field: Field) => {
    if (!field.displayRule) return true;
    const referenceField = fields.find((f) => f.name === field.displayRule);
    return referenceField && !!formValues[referenceField.name];
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {fields.map((field) => (
        <FormField
          field={field}
          isFieldVisible={isFieldVisible(field)}
          handleFieldChange={handleFieldChange}
          key={field.name}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};
