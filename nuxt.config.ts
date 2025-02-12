// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
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
        name: 'russia',
        file: 'ru.json',
        language: 'ru-RU',
      },
      {
        code: 'en',
        name: 'united-kingdom',
        file: 'en.json',
        language: 'en-US',
      },
      {
        code: 'de',
        name: 'germany',
        file: 'de.json',
        language: 'de-DE',
      },
      {
        code: 'fr',
        name: 'france',
        file: 'fr.json',
        language: 'fr-FR',
      },
      {
        code: 'zh',
        name: 'china',
        file: 'zh.json',
        language: 'zh-CN',
      },
    ],
  },
})
