import { Dispatch } from 'redux';
import {
  ContactsActionTypes,
  ContactsActions,
} from '../../Types/contactsReduser';
import { GetStateType } from '../../Types/contactAction';

const filterContacts = (sortBy: string) => (
  dispatch: Dispatch<ContactsActions>, getState: () => GetStateType,
) => {
  const sortStr = sortBy.toLowerCase();
  dispatch({
    type: ContactsActionTypes.FILTER_CONTACTS,
    payload: sortStr,
  });
  const store = getState();
  const sortContacts = (value: string) => {
    const sortedContacts = [...store.listOfContacts.contacts];
    sortedContacts.sort(
      (a: any, b: any) => {
        if (a[value] > b[value]) return 1;
        if (a[value] < b[value]) return -1;
        return 0;
      },
    );
    return sortedContacts;
  };
  const sorted = sortContacts(sortStr);
  dispatch({
    type: ContactsActionTypes.FILTER_CONTACTS_SUCCESS,
    payload: sorted,
  });
};

export default filterContacts;
