import React, { FC, ReactNode } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { RatingType } from '../../Types/contactItem';

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #FFCD24;
`;

const starsRendering = (quantity: number) => {
  const stars: ReactNode[] = new Array(quantity).fill(
    <AiFillStar />,
  );
  return stars;
};

const RatingList: FC<RatingType> = ({ rating }) => (
  <RatingWrapper
    data-testid="ratingWrapperComponent"
    style={
    rating < 3 ? { backgroundColor: '#666B6E' } : undefined
    }
  >
    {rating === 0 || rating > 6
      ? <StarWrapper><AiOutlineStar /></StarWrapper>
      : starsRendering(rating).map(
        item => (
          <StarWrapper
            key={uuidv4()}
          >
            {item}
          </StarWrapper>
        ),
      )}
  </RatingWrapper>
);

export default RatingList;
