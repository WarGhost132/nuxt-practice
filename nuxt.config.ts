// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-headlessui',
  ],
  
  i18n: {
    baseUrl: 'http://localhost:3000',
    lazy: true,
    strategy: 'prefix_except_default',
    defaultLocale: 'ru',
    locales: [
      {
        code: 'ru',
        name: 'Русский',
        file: 'ru.json',
        language: 'ru-RU',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
        language: 'en-US',
      },
    ],
  },
})
