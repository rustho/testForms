import { ChangeEvent } from "react";
import { Field } from ".";

interface FormFieldProps {
  field: Field;
  isFieldVisible: boolean | undefined;
  handleFieldChange: (name: string, value: string | boolean ) => void;
}

export const FormField = ({ field, isFieldVisible, handleFieldChange }: FormFieldProps) => {
  if (isFieldVisible === false) return null;

  const renderInput = (field: Field) => {
    switch (field.kind) {
      case "text":
        return (
          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleFieldChange(field.name, e.target.value)
            }
          />
        );
      case "bool":
        return (
          <input
            type="checkbox"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleFieldChange(field.name, e.target.checked)
            }
          />
        );
      default:
        return null;
    }
  }

  return (
    <div>
      <label>{field.label}</label>
      {renderInput(field)}
    </div>
  );
};
