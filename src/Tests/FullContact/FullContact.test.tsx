import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import FullContact from '../../Components/FullContact';
import store from '../../Store';

describe('FullContact test', () => {
  test('should render FullContact component', () => {
    const FullContactComponent = render(
      <Provider store={store}>
        <FullContact />
      </Provider>,
    ).getByTestId('fullContactComponent');
    expect(FullContactComponent).toBeDefined();
  });
});
