import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import fetchContacts from '../Store/Actions/getContactsAction';
import { Header, ContactList } from '../Components';

const AppWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
max-width: 1200px;
height: 100vh;
`;

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <AppWrapper>
      <Header />
      <ContactList />
    </AppWrapper>
  );
};

export default App;
