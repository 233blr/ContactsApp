import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ContactList from '../../Components/ContactList';
import store from '../../Store';

describe('ContactList test', () => {
  test('should render ContactList component', () => {
    const ContactListComponent = render(
      <Provider store={store}>
        <ContactList />
      </Provider>,
    ).getByTestId('contactListComponent');
    expect(ContactListComponent).toBeDefined();
  });
});
