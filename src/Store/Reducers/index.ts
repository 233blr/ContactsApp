import { combineReducers } from 'redux';
import ContactsReducer from './contactsReducer';
import LeadersReducer from './getLeadersReducer';
import FullContactReducer from './getFullContactReducer';

const rootReducer = combineReducers({
  listOfContacts: ContactsReducer,
  listOfLeaders: LeadersReducer,
  fullContact: FullContactReducer,
});

export default rootReducer;
