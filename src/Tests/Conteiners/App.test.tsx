import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../../Containers';
import store from '../../Store';

describe('App test', () => {
  test('should render App component', () => {
    const AppComponent = render(
      <Provider store={store}>
        <App />
      </Provider>,
    ).getByTestId('appContainer');
    expect(AppComponent).toBeDefined();
  });

  test('should render ContactList component', () => {
    const container = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    fireEvent.click((screen.getByText(/Name/i)));
    const contactListElement = container.getByTestId('contactListComponent');
    expect(contactListElement).toBeDefined();
  });
});
