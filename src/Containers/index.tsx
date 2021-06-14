import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import fetchContacts from '../Store/Actions/fetchContactsAction';
import {
  HomePage,
  LeadersPage,
  ContactPage,
  ErrorPage,
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
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/leaders" exact>
          <LeadersPage />
        </Route>
        <Route path="/users/:id">
          <ContactPage />
        </Route>
        <Route path="/not-found" exact>
          <ErrorPage />
        </Route>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
