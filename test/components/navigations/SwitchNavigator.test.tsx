import React from 'react';
import type {RenderResult} from '@testing-library/react';
import {render} from '@testing-library/react';

import SwitchNavigator from '../../../src/components/navigations/SwitchNavigator';
import RootProvider from '../../../src/providers/index';

const props = {};

const component = (
  <RootProvider initialThemeType="light">
    <SwitchNavigator {...props} />
  </RootProvider>
);

describe('[SwitchNavigator] rendering', () => {
  let testingLib: RenderResult;

  beforeEach(() => {
    testingLib = render(component);
  });

  it('should renders without crashing', () => {
    const {baseElement} = testingLib;

    expect(baseElement).toBeTruthy();
  });
});
