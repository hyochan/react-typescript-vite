# React with vite and typescript

[![CI](https://github.com/hyochan/react-typescript-vite/actions/workflows/ci.yml/badge.svg)](https://github.com/hyochan/react-typescript-vite/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/hyochan/react-typescript-vite/branch/main/graph/badge.svg)](https://codecov.io/gh/hyochan/react-typescript-vite)

> Specification

- [react](https://github.com/facebook/react)
- [react-router](https://github.com/ReactTraining/react-router)
- [react-i18next](https://react.i18next.com)
- [typescript](https://github.com/Microsoft/TypeScript)
- [emotion](https://emotion.sh)
- [react-testing-library](https://github.com/kentcdodds/react-testing-library)
- [vitest](https://vitest.dev)
- [react-hook](https://reactjs.org/docs/hooks-intro.html)
- [prettier](https://prettier.io)
- [recoil](https://github.com/facebookexperimental/Recoil)

### Gain points

1. State management with `recoil`.
2. Know how to structure react web app with `typescript`.
3. Know how to navigate between pages with `react-router`.
4. Know how to write test code with `react-testing-library`.
5. Know how to `lint` your project with `eslint`.
6. Know how to use `emotion`.
7. [Know how to implement theming with emotion](https://github.com/hyochan/react-vite-ts/blob/main/src/theme.ts).

- [Dark Mode]
  ![image](https://user-images.githubusercontent.com/27461460/58620208-815be500-8301-11e9-9a00-2ceaca7c93f5.png)
- [Light Mode]
  ![image](https://user-images.githubusercontent.com/27461460/58620232-8f116a80-8301-11e9-8b55-3bb2a743dff8.png)


### Tips

> Setting up yarn berry

1. `yarn set version berry`
1. `yarn`
1. `yarn dlx @yarnpkg/sdks vscode`
1. `yarn plugin import typescript`
1. `yarn dlx @yarnpkg/sdks vscode`
   - Useful when prettier extension is not working.

### Structures

```text
app/
├─ assets
│  └─ icons // app icons
│  └─ images // app images like background images
├─ node_modules/
├─ src/
│  └─ apis
│  └─ components
│  └─ contexts
│  └─ providers
│  └─ types
│  └─ utils
│  └─ App.tsx
│  └─ theme.ts
├─ test/
├─ .eslintrc.js
├─ .gitignore
├─ babel.config.js
├─ environment.d.ts
├─ package.json
├─ postcss.config.js
├─ README.md
├─ STRINGS.js
├─ tsconfig.json
├─ typings.d.ts
├─ vite.config.ts
└─ vitest.config.ts
```

### Install and running the project

Installing and running the project is as simple as running

```sh
yarn && yarn start
```

- Note that we recommend using yarn.

This runs the `start` script specified in our `package.json`, and will spawn off a server which reloads the page as we save our files.
Typically the server runs at `http://localhost:8080`, but should be automatically opened for you.

### Testing the project

Testing is also just a command away:

```sh
yarn test
 PASS  src/components/ui/__tests__/Button.test.tsx
 PASS  src/components/page/__tests__/Intro.test.tsx

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   2 passed, 2 total
Time:        2.145s, estimated 3s
```

### Writing tests with [vitest](https://vitest.dev) and [testing-library](https://testing-library.com/docs/react-testing-library)

We've created test examples with vitest in `src/components/pages/__tests__` and `src/components/uis/__tests__`. Since react is component oriented, we've designed to focus on writing test in same level of directory with component. You can simply run `yarn test` to test if it succeeds and look more closer opening the source.

### Vscode prettier and eslint setup

These are preferred settings for auto linting and validation

- with [prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) installed
- with [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) installed

```
"eslint.enable": true,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
],
// prettier extension setting
"editor.formatOnSave": true,
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"prettier.singleQuote": true,
"prettier.trailingComma": "all",
"prettier.arrowParens": "always",
"prettier.jsxSingleQuote": true
```

### Using Context Api

Whenever you add your own Context provider you can add it to `providers/` and use it inside of `providers/index.tsx`

- [Splitting provider is preferred](https://github.com/facebook/react/issues/15156#issuecomment-474590693)

```tsx
// Add providers here
const RootProvider = ({
  initialThemeType,
  children,
}: Props): React.ReactElement => {
  return (
    <AppProvider>
      <ThemeProvider
        initialThemeType={initialThemeType || 'light'}
      >
        {children}
      </ThemeProvider>
    </AppProvider>
  );
};
```

The `RootProvider` is being used at `App.tsx` and test files easily

```tsx
// App.tsx
function App(): React.ReactElement {
  return (
    <RootProvider>
      <SwitchNavigator />
    </RootProvider>
  );
}
```

```tsx
// test files
const component = (props): React.ReactElement => {
  return (
    <RootProvider initialThemeType="light">
      <Intro {...props} />
    </RootProvider>
  );
};
```

> using consistent theme('light') explicitly is encouraged in testing for avoiding unexpected snapshot test errors

### Localization

We use [react-i18next](https://react.i18next.com) for translation. This is configured in [src/utils/i18n.ts](https://github.com/hyochan/react-vite-ts/blob/main/src/utils/i18n.ts).

Read more about the [configuration options](https://www.i18next.com/overview/configuration-options).


### Creating components

> Copy sourcecode in /src/components/page/Temp.tsx
> Copy sourcecode in /src/components/page/**test**/Temp.test.tsx
> Create new tsx file with compnent name you will create

To do above more easily, you can simly install [dooboo-cli](https://www.npmjs.com/package/dooboo-cli). Then you can easily create [page] or [ui] components along with `test file` by running below commands.

```sh
# page component
dooboo page [PageComponentName]
# ui component
dooboo ui [UIComponentName]
```
