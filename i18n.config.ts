import en from './locales/en.json'
import es from './locales/es.json'

export default defineI18nConfig(() => ({ //https://i18n.nuxtjs.org/docs/getting-started/usage
  legacy: false,
  messages: {
    en: en,
    es: es
  }
}))