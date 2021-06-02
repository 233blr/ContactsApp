import React, { FC } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';
import { RatingType } from '../../../../Types/contactItem';

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

const lowRatingStar = {
  backgroundColor: '#666B6E',
};

const starsRendering = (quantity: number) => {
  const stars = new Array(quantity).fill(
    <AiFillStar />,
  );
  return stars;
};

const RatingList: FC<RatingType> = ({ rating }) => (
  <RatingWrapper style={rating < 3 ? lowRatingStar : undefined}>
    {rating === 0 || rating > 6
      ? <StarWrapper><AiOutlineStar /></StarWrapper>
      : starsRendering(rating).map(
        (item) => <StarWrapper key={Math.random() * 42}>{item}</StarWrapper>,
      )}
  </RatingWrapper>
);

export default RatingList;
