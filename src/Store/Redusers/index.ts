import { combineReducers } from 'redux';
import GetContactsReducer from './getContactsReducer';

const rootReducer = combineReducers({
  contacts: GetContactsReducer,
});

export default rootReducer;
