import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import LeadersList from '../../Components/LeadersList';
import store from '../../Store';

describe('LiadersList test', () => {
  const state = {
    listOfLeaders: {
      contacts: [],
    },
  };
  let container;

  beforeEach(() => {
    container = render(
      <Provider store={store}>
        <LeadersList />
      </Provider>,
    );
  });

  test('should render LeadersList component', () => {
    const LeadersListComponent = container.getByTestId('leadersListComponent');
    expect(LeadersListComponent).toBeDefined();
  });
});
