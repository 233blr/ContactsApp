import { Dispatch } from 'redux';
import {
  ContactsActionTypes,
  ContactsActions,
} from '../../Types/contactsReducer';
import { GetStateType } from '../../Types/contactAction';
import sortContacts from '../../Services/FilterContacts';

const filterContacts = (sortBy: string) => (
  dispatch: Dispatch<ContactsActions>,
  getState: () => GetStateType,
) => {
  const store = getState();
  dispatch({
    type: ContactsActionTypes.FILTER_CONTACTS,
    payload: sortBy,
  });
  const sorted = sortContacts(
    sortBy.toLowerCase(),
    store.listOfContacts.contacts,
  );
  dispatch({
    type: ContactsActionTypes.FILTER_CONTACTS_SUCCESS,
    payload: sorted,
  });
};

export default filterContacts;
