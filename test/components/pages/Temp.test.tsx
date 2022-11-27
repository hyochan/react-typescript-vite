import * as renderer from 'react-test-renderer';

import {fireEvent, render} from '@testing-library/react';

import React from 'react';
import type {RenderResult} from '@testing-library/react';
import Temp from '../../../src/components/pages/Temp';
import {createTestElement} from '../../../test/utils/testUtils';

const props = {};
const component = createTestElement(<Temp {...props} />);

describe('[Temp] render', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();

    expect(rendered).toBeTruthy();
  });
});

describe('[Temp] Interaction', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(component);
  });

  it('should simulate [onClick] when [btn] has been clicked', () => {
    const btnInstance = renderResult.getByText('back to tab page');

    fireEvent.click(btnInstance);
  });
});
