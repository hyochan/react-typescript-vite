import type {ReactElement} from 'react';
import RootProvider from './providers';
import SwitchNavigator from './components/navigations/SwitchNavigator';
import {useEffect} from 'react';
import {useThemeContext} from './providers/ThemeProvider';

function App(): ReactElement {
  const {changeThemeType} = useThemeContext();

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
