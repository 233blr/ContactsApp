import { combineReducers } from 'redux';
import GetContactsReducer from './getContactsReducer';

const rootReducer = combineReducers({
  listOfContacts: GetContactsReducer,
});

export default rootReducer;
