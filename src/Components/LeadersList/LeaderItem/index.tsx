import React, { FC } from 'react';
import styled from 'styled-components';
import { ContactItemType } from '../../../Types/contactItem';
import { RatingList } from '../..';

const LeaderItemWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 5px;
background-color: #FFF;
color: #33393D;
`;

const PWrapper = styled.div`
margin: 10px;
font-family: "Gill Sans",sans-serif;
font-weight: bold;
`;

const RatingWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-right: 10px;
color: #FFCD24;
`;

const LeaderItem: FC<ContactItemType> = ({ data }) => (
  <LeaderItemWrapper data-testid="leaderItemComponent">
    <PWrapper>{`${data.name} ${data.lastName}`}</PWrapper>
    <RatingWrapper><RatingList rating={data.rating} /></RatingWrapper>
  </LeaderItemWrapper>
);

export default LeaderItem;
