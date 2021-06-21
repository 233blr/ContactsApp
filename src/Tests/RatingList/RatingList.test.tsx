import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import RatingWrapper from '../../Components/RaitingList';
import store from '../../Store';

describe('RatingWrapper test', () => {
  const ratingData = 5;

  test('should render RatingWrapper component', () => {
    const RatingComponent = render(
      <Provider store={store}>
        <RatingWrapper rating={ratingData} />
      </Provider>,
    ).getByTestId('ratingWrapperComponent');
    expect(RatingComponent).toBeDefined();
  });
});
