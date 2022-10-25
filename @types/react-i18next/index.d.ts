import 'react-i18next';

import type {resources} from '../../src/utils/i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: typeof resources['en'];
  }
}
