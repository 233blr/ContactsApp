import React, { FC } from 'react';
import styled from 'styled-components';
import { ContactList, Header } from '../../index';

const HomeWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
max-width: 1200px;
height: 100vh;
`;

const HomePage: FC = () => (
  <HomeWrapper>
    <Header />
    <ContactList />
  </HomeWrapper>
);

export default HomePage;
