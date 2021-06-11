import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import LiaderItem from '../../../Components/LeadersList/LeaderItem';
import store from '../../../Store';

describe('LeaderItem test', () => {
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
  test('should render LeadertItem component', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <LiaderItem key="hello" data={item} />
      </Provider>,
    );
    expect(getByTestId('leaderItemComponent')).toBeDefined();
  });
});
