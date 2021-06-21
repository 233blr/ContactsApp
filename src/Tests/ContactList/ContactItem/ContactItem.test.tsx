import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import ContactItem from '../../../Components/ContactList/ContactItem';
import store from '../../../Store';

describe('ContactItem test', () => {
  const item = {
    id: 'dc106cfd-999c-49b3-a14f-2765a140c5d9',
    image: 'https://randomuser.me/api/portraits/med/men/91.jpg',
    fullImage: 'https://randomuser.me/api/portraits/men/91.jpg',
    name: 'Guy',
    lastName: 'Baker',
    login: 'greenlion773',
    email: 'guy.baker@example.com',
    phone: '(301)-665-1243',
    rating: 0,
  };
  const history = createMemoryHistory();

  test('should render ContactItem component', () => {
    const ContactItemComponent = render(
      <Provider store={store}>
        <Router history={history}>
          <ContactItem key="hello" data={item} />
        </Router>
      </Provider>,
    ).getByTestId('contactItemComponent');
    expect(ContactItemComponent).toBeDefined();
  });

  test('should call toFullPageHandler function', () => {
    const button = render(
      <Provider store={store}>
        <Router history={history}>
          <ContactItem key="hello" data={item} />
        </Router>
      </Provider>,
    ).getByTestId('viewBtn');
    fireEvent.click(button);
    expect(screen.getByText(/Guy Baker/i)).toBeInTheDocument();
  });
});
