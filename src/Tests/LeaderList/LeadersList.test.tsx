import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import LeadersList from '../../Components/LeadersList';
import store from '../../Store';

describe('LiadersList test', () => {
  test('should render LeadersList component', () => {
    const LeadersListComponent = render(
      <Provider store={store}>
        <LeadersList />
      </Provider>,
    ).getByTestId('leadersListComponent');
    expect(LeadersListComponent).toBeDefined();
  });
});
