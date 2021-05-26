import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Header, ContactList } from '../Components';

const AppWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
max-width: 1200px;
height: 100vh;
`;

const App: React.FC = () => {
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=50')
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => { return console.log(error); });
  }, []);

  return (
    <AppWrapper>
      <Header />
      <ContactList />
    </AppWrapper>
  );
};

export default App;
