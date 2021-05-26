import React from 'react';
import styled from 'styled-components';

const ContactItemWrapper = styled.div`
display: grid;
grid-template-rows: 100px;
grid-template-areas:
'img' 'img' 'discription' 'vue' 'list' 'rating' 'buttons';
align-items: center;
justify-items: center;
background-color: #dadada;
border-radius: 5px;
`;

const UlWrapper = styled.ul`
display: flex;
flex-direction: row;
`;

const LiWrapper = styled.li`
margin: 10px;
list-style-type: none;
gap: 10px;
`;

const ContactItem: React.FC = () => {
  return (
    <ContactItemWrapper>
      <div>img</div>
      <div>discription</div>
      <div>vue</div>
      <UlWrapper>
        <LiWrapper>name</LiWrapper>
        <LiWrapper>phone</LiWrapper>
        <LiWrapper>login</LiWrapper>
        <LiWrapper>email</LiWrapper>
      </UlWrapper>
      <div>rating</div>
      <div>buttons</div>
    </ContactItemWrapper>
  );
};

export default ContactItem;
