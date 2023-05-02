export interface Field {
  name: string;
  kind: "text" | "bool";
  label: string;
  displayRule?: string;
}

export interface FormValues {
  [key: string]: string | boolean;
}
