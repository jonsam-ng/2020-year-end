/*
 * @Descripttion: i18n config
 * @version: 1.0.0
 * @Author: wuqingshan
 * @Date: 2020-08-02 19:03:52
 * @LastEditors: wuqingshan
 * @LastEditTime: 2020-08-03 10:50:49
 */ 
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './resources/en';
import zh_CN from './resources/zh_CN';

const resources = {
  zh_CN: {
    translation: zh_CN
    // ...zh_CN
  },
  en: {
    translation: en
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    lng: 'zh_CN',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;