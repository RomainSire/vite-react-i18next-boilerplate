import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";


export const supportedLangages = {
    en: 'English',
    fr: 'Français',
}


i18n
    .use(LanguageDetector)
    .use(HttpBackend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        supportedLngs: Object.keys(supportedLangages),
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        detection: {
            order: ['path'], // from where user language should be detected (from the url path in our case)
        },
        backend: {
            loadPath: '/locales/{{lng}}.json', // path to translation files
        },
        debug: true,
    });

export default i18n;