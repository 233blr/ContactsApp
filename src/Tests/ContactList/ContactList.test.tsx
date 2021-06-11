import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ContactList from '../../Components/ContactList';
import store from '../../Store';

describe('ContactList test', () => {
  const state = {
    contacts: [{
      "id": "001",
      "image": "https://randomuser.me/api/portraits/med/men/73.jpg",
      "fullImage": "https://randomuser.me/api/portraits/men/73.jpg",
      "name": "Isaac",
      "lastName": "Williams",
      "login": "happykoala365",
      "email": "isaac.williams@example.com",
      "phone": "(058)-396-1659",
      "rating": 0
    }],
    loading: false,
    error: null,
    category: null,
  };
  let container;

  beforeEach(() => {
    container = render(
      <Provider store={store}>
        <ContactList />
      </Provider>,
    );
  });

  test('should render ContactList component', () => {
    const ContactListComponent = container.getByTestId('contactListComponent');
    expect(ContactListComponent).toBeDefined();
  });
});
