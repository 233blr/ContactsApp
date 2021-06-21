import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import fetchContacts from '../Store/Actions/fetchContactsAction';
import {
  ContactList,
  LeadersList,
  FullContact,
  ErrorPage,
  Header,
} from '../Components';

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
    <BrowserRouter>
      <AppWrapper data-testid="appContainer">
        <Header />
        <Route path="/" exact>
          <ContactList />
        </Route>
        <Route path="/leaders" exact>
          <LeadersList />
        </Route>
        <Route path="/users/:id">
          <FullContact />
        </Route>
        <Route path="/not-found" exact>
          <ErrorPage />
        </Route>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
