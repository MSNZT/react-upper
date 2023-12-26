import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

void i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'ru',

    // have a common namespace used around the full app
    ns: ['translationsNS'],
    defaultNS: 'translationsNS',

    debug: false,

    interpolation: {
      escapeValue: false // not needed for react!!
    },

    resources: { en: { translationsNS: {} } }
  })

export default i18n
