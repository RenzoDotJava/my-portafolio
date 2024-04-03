// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    /* '@nuxt/image', */
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: [300, 400, 500, 600, 700],
      }
    }],
  ],
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
