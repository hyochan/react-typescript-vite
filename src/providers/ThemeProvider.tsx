import type {ReactElement} from 'react';
import {useState} from 'react';
import type {Theme as DefaultTheme} from '@emotion/react';
import {
  ThemeProvider as OriginalThemeProvider,
  withTheme,
} from '@emotion/react';

import {createTheme} from '../theme';
import type {ThemeType} from '../types';
import createCtx from '../utils/createCtx';

interface Context {
  theme: DefaultTheme;
  themeType: ThemeType;
  changeThemeType: () => void;
}

const [useCtx, Provider] = createCtx<Context>();

export const defaultThemeType: ThemeType = 'light';

interface Props {
  children?: ReactElement;
  // using initial ThemeType is essential while testing apps with consistent ThemeType
  initialThemeType?: ThemeType;
}

function ThemeProvider({
  children,
  initialThemeType = defaultThemeType,
}: Props): ReactElement {
  const [themeType, setThemeType] = useState(initialThemeType);

  const changeThemeType = (): void => {
    const newThemeType = themeType === 'light' ? 'dark' : 'light';

    setThemeType(newThemeType);
  };

  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey) {
      switch (event.key) {
        case '.':
          changeThemeType();
          break;
        // case 't':
        //   changeLocale();
        //   break;
      }
    }
  });

  const theme = createTheme(themeType) as DefaultTheme;

  return (
    <Provider
      value={{
        changeThemeType,
        themeType,
        theme,
      }}
    >
      <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
    </Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export {useCtx as useTheme, ThemeProvider, withTheme};
