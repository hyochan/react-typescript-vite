import en from '../assets/locales/en/translation.json';

declare module 'react-i18next' {
  interface Resources {
    translations: typeof en;
  }
}
