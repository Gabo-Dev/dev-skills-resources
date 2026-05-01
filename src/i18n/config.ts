import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enProjects from './locales/en/projects.json';
import enProjectDetail from './locales/en/projectDetail.json';

import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esProjects from './locales/es/projects.json';
import esProjectDetail from './locales/es/projectDetail.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        projects: enProjects,
        projectDetail: enProjectDetail,
      },
      es: {
        common: esCommon,
        home: esHome,
        projects: esProjects,
        projectDetail: esProjectDetail,
      },
    },
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
