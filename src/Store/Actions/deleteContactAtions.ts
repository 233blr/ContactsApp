import { Dispatch } from 'redux';

import {
  ContactsActionTypes,
  ContactsActions,
} from '../../Types/contactsReduser';
import { GetStateType } from '../../Types/contactAction';

const deleteContact = (id: string) => (
  dispatch: Dispatch<ContactsActions>, getState: () => GetStateType,
) => {
  const state = getState();
  dispatch({
    type: ContactsActionTypes.DELETE_CONTACT,
    payload: [...state.listOfContacts.contacts].filter(
      contact => (contact.id !== id),
    ),
  });
};

export default deleteContact;
