import type {ReactElement} from 'react';
import {RecoilRoot} from 'recoil';

import type {ThemeType} from '../types';

import {ThemeProvider} from './ThemeProvider';

interface Props {
  initialThemeType?: ThemeType;
  children?: ReactElement;
}

// Add providers here
const RootProvider = ({initialThemeType, children}: Props): ReactElement => {
  return (
    <RecoilRoot>
      <ThemeProvider initialThemeType={initialThemeType || 'light'}>
        {children}
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default RootProvider;
