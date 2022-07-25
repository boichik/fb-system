// import Vue from 'vue';
// import VueI18n from 'vue-i18n';
// import ElLocale from 'element-ui/lib/locale';
// import { Locale } from '@/shared/dto/Locales';
// import ukMessages from '@/shared/translations/uk';
// import enMessages from '@/shared/translations/en';

// // @ts-ignore
// Vue.use(VueI18n);

// export const DEFAULT_LOCALE = Locale.Ukrainian;
// export const DEFAULT_FALLBACK_LOCALE = Locale.English;

// const messages = {
//   en: { ...enMessages },
//   uk: { ...ukMessages },
// };

// /**
//  * Custom pluralization rule for uk and ru locales
//  * Define translation key as '{n} === 0 | {n} ends with 1 | {n} ends with 2-4 | {n} ends with 5-9 OR {n} in 11-19'
//  * @returns Index of translation option
//  * @param {number} choice Pluralization counter passed into $tc
//  * @param {number} choicesLength Lenght of translation options array
//  */
// const slavicPluralization = (choice: number, choicesLength: number) => {
//   if (choice === 0) {
//     return 0;
//   }

//   const teen = choice > 10 && choice < 20;
//   const endsWithOne = choice % 10 === 1;

//   if (choicesLength < 4) {
//     return !teen && endsWithOne ? 1 : 2;
//   }
//   if (!teen && endsWithOne) {
//     return 1;
//   }
//   if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
//     return 2;
//   }

//   return choicesLength < 4 ? 2 : 3;
// };

// // @ts-ignore
// export const i18n = new VueI18n({
//   silentTranslationWarn: true,
//   locale: DEFAULT_LOCALE,
//   fallbackLocale: DEFAULT_FALLBACK_LOCALE,
//   messages: messages,
//   pluralizationRules: {
//     uk: slavicPluralization,
//   },
// });

// ElLocale.i18n((key: any, value: any) => i18n.t(key, value));
