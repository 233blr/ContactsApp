import React, { FC } from 'react';
import styled from 'styled-components';
import { ContactItemType } from '../../../Types/contactItem';

const LeaderItemWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 100px;
border-radius: 5px;
background-color: #FFF;
color: #33393D;
`;

const ImgWrapper = styled.img`
width: 80px;
height: 80px;
border-radius: 50%;
margin-left: 10px;
`;

const LeaderItem: FC<ContactItemType> = ({ data }) => (
  <LeaderItemWrapper>
    <ImgWrapper src={data.image} alt="Leader" />
    <p>{`${data.name} ${data.lastName}`}</p>
    <div>{data.rating}</div>
  </LeaderItemWrapper>
);

export default LeaderItem;
