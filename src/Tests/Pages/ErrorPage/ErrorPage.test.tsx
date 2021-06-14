import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ErrorPage from '../../../Components/Pages/ErrorPage';
import store from '../../../Store';

describe('ErrorPage test', () => {
  let container;

  beforeEach(() => {
    container = render(
      <Provider store={store}>
        <ErrorPage />
      </Provider>,
    );
  });

  test('should render ErrorPage component', () => {
    const ErrorPageComponent = container.getByTestId('errorPage');
    expect(ErrorPageComponent).toBeDefined();
  });
});
