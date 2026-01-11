import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales.en'
import fi from './locales.fi'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: en },
      fi: { translation: fi }
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback if key is missing in the current language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
