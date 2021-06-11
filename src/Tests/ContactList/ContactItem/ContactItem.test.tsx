import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import ContactItem from '../../../Components/ContactList/ContactItem';
import store from '../../../Store';

describe('ContactItem test', () => {
  const item = {
    "id": "dc106cfd-999c-49b3-a14f-2765a140c5d9",
    "image": "https://randomuser.me/api/portraits/med/men/91.jpg",
    "fullImage": "https://randomuser.me/api/portraits/men/91.jpg",
    "name": "Guy",
    "lastName": "Baker",
    "login": "greenlion773",
    "email": "guy.baker@example.com",
    "phone": "(301)-665-1243",
    "rating": 0
  };

  let container;

  beforeEach(() => {
    container = render(
      <Provider store={store}>
        <ContactItem key="hello" data={item} />
      </Provider>,
    );
  });

  test('should render ContactItem component', () => {
    const ContactItemComponent = container.getByTestId('contactItemComponent');
    expect(ContactItemComponent).toBeDefined();
  });

  test('should call toFullPageHandler function', () => {
    const button = container.getByTestId('viewBtn');
    expect(button).toBeDefined();
  });
});
