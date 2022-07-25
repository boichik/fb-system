import emailRegExp from '@/shared/rules/regexp/Email';
import RegExpValidationRule from '@/shared/rules/RegExp';

export const RequiredEmailValidationRule = RegExpValidationRule(
  'Please enter a valid email',
  'Please enter a valid email',
  'blur',
  emailRegExp,
  true
);
