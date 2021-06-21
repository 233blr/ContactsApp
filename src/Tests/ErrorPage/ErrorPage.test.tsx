import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ErrorPage from '../../Components/DisplayError';
import store from '../../Store';

describe('ErrorPage test', () => {
  test('should render ErrorPage component', () => {
    const ErrorPageComponent = render(
      <Provider store={store}>
        <ErrorPage />
      </Provider>,
    ).getByTestId('errorPage');
    expect(ErrorPageComponent).toBeDefined();
  });
});
