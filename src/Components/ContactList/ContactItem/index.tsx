import React from 'react';
import styled from 'styled-components';
import LoadingDelay from '../../../HOC/LoadingDelay';
import { ContactItemType } from '../../../Types/contactItem';

const ContactItemWrapper = styled.div`
display: grid;
grid-template-rows: 100px;
grid-template-areas:
'img' 'img' 'discription' 'vue' 'list' 'rating' 'buttons';
align-items: center;
justify-items: center;
background-color: #fff;
border-radius: 5px;
`;

const ContactItem: React.FC<ContactItemType> = ({ data }) => {
  return (
    <ContactItemWrapper>
      <img src={data.foto} alt="foto" />
      <div>{data.name}</div>
      <div>{data.phone}</div>
      <div>{data.login}</div>
      <div>{data.email}</div>
      <div>{data.rating}</div>
      <div>buttons</div>
    </ContactItemWrapper>
  );
};

export default LoadingDelay(ContactItem);
