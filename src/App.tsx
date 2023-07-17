import type {ReactElement} from 'react';
import {useEffect} from 'react';

import SwitchNavigator from './components/navigations/SwitchNavigator';
import {useTheme} from './providers/ThemeProvider';
import RootProvider from './providers';

function App(): ReactElement {
  const {changeThemeType} = useTheme();

  useEffect(() => {
    (() => {
      document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === '.') {
          changeThemeType();
        }
      });
    })();

    return () => {
      document.removeEventListener('keydown', () => {});
    };
  }, [changeThemeType]);

  return <SwitchNavigator />;
}

function Root(): ReactElement {
  return (
    <RootProvider
      initialThemeType={
        window?.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      }
    >
      <App />
    </RootProvider>
  );
}

export default Root;
