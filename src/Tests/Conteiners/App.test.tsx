import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../../Containers';
import store from '../../Store';

describe('App test', () => {
  let container;

  beforeEach(() => {
    container = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  test('should render App component', () => {
    const { getByTestId } = container;
    const appContainer = getByTestId('appContainer');
    expect(appContainer).toBeDefined();
  });
});
