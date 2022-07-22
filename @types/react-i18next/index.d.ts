import 'react-i18next';

import {resources} from '../../src/utils/i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources.en;
  }
}
