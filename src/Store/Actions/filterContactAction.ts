import { Dispatch } from 'redux';
import {
  ContactsActionTypes,
  ContactsActions,
} from '../../Types/contactsReduser';
import { GetStateType } from '../../Types/contactAction';

const filterContacts = (sortBy: any) => (
  dispatch: Dispatch<ContactsActions>, getState: () => GetStateType,
) => {
  dispatch({
    type: ContactsActionTypes.FILTER_CONTACTS,
    payload: sortBy,
  });
  const arr = getState();
  const filtered = [...arr.listOfContacts.contacts].sort(
    (a: any, b: any) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    },
  );
  dispatch({
    type: ContactsActionTypes.FILTER_CONTACTS_SUCCESS,
    payload: filtered,
  });
};

export default filterContacts;
