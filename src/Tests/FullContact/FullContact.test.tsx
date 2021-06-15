import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import FullContact from '../../Components/FullContact';
import store from '../../Store';

describe('FullContact test', () => {
  let container;

  beforeEach(() => {
    container = render(
      <Provider store={store}>
        <FullContact />
      </Provider>,
    );
  });

  test('should render FullContact component', () => {
    const FullContactComponent = container.getByTestId('fullContactComponent');
    expect(FullContactComponent).toBeDefined();
  });
});
