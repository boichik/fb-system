import { ValidationRegExp, ValidationRule } from '../dto/ValidationRule';

export default function (
  emptyLabel: string,
  errorLabel: string,
  trigger: string,
  regExp: ValidationRegExp,
  required: boolean
) {
  const validationRule: ValidationRule[] = [
    {
      validator(rule: any, value: any, callback: any) {
        const regExpArr = Array.isArray(regExp) ? regExp : [regExp];
        if (!value && !required) {
          callback();
        } else if (!value && required) {
          callback(new Error(emptyLabel));
        } else if (!regExpArr.filter((item) => value.match(item.expression)).length) {
          callback(new Error(errorLabel));
        } else {
          callback();
        }
      },
      trigger,
    },
  ];

  if (required) {
    validationRule.push({ required: true, message: emptyLabel, trigger });
  }

  return validationRule;
}
