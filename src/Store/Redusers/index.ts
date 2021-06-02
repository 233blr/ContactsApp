import { combineReducers } from 'redux';
import ContactsReducer from './contactsReducer';

const rootReducer = combineReducers({
  listOfContacts: ContactsReducer,
});

export default rootReducer;
