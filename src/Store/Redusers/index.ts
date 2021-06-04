import { combineReducers } from 'redux';
import ContactsReducer from './contactsReducer';
import LeadersReduser from './getLeadersReduser';
import FullContactReduser from './getFullContactReduser';

const rootReducer = combineReducers({
  listOfContacts: ContactsReducer,
  listOfLeaders: LeadersReduser,
  fullContact: FullContactReduser,
});

export default rootReducer;
