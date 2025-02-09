import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    ns: ["homePage"],
    // backend: {
    //   loadPath: "/locales/{{lng}}.json",
    // },
    // resources: {
    //   en: {
    //     translation: {
    //       // here we will place our translations...
    //       title: "Company",
    //       subTitle: "This is a company",
    //     },
    //   },
    //   es: {
    //     translation: {
    //       // here we will place our translations...
    //       title: "Empresa",
    //       subTitle: "Esta es una empresa",
    //     },
    //   },
    // },
  });

export default i18n;
