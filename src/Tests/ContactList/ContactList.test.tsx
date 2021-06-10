import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ContactList from '../../Components/ContactList';
import store from '../../Store';

describe('ContactList test', () => {
  let container;

  beforeEach(() => {
    container = render(
      <Provider store={store}>
        <ContactList />
      </Provider>,
    );
  });

  test('should render ContactList component', () => {
    const { getByTestId } = container;
    const ContactListComponent = getByTestId('contactListComponent');
    expect(ContactListComponent).toBeDefined();
  });
});