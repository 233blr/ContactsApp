import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import fetchContacts from '../Store/Actions/getContactsAction';
import { HomePage, LeadersPage, FullContactPage } from '../Components';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <BrowserRouter>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/leaders" exact>
        <LeadersPage />
      </Route>
      <Route path="/users/:id">
        <FullContactPage />
      </Route>
    </BrowserRouter>
  );
};

export default App;
