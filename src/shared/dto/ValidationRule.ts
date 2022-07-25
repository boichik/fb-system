export interface ValidationRule {
  required?: boolean;
  message?: string;
  trigger?: string;
  validator?: (rule: any, value: any, callback: any) => void;
}

export interface ValidationRegExp {
  expression: RegExp;
  name: string;
}
