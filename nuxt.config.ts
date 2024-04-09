// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', ['@nuxtjs/google-fonts', {
    families: {
      Inter: [300, 400, 500, 600, 700],
    }
  }], "@nuxtjs/i18n"],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  devtools: { enabled: true },
  css: ['~/app.css'],
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})