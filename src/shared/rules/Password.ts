const min = 6;

import passwordRegExp from '@/shared/rules/regexp/Password';
import RegExpValidationRule from '@/shared/rules/RegExp';

export const RequiredPasswordValidationRule = RegExpValidationRule(
  `Invalid password, minimum ${min} characters`,
  'The field is required',
  'blur',
  passwordRegExp,
  true
);
