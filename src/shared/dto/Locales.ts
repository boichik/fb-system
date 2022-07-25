const Locale = {
  English: 'en' as const,
  Ukrainian: 'uk' as const,
};

type Locale = typeof Locale[keyof typeof Locale];

export { Locale };
