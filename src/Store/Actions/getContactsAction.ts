// noinspection TypeScriptValidateTypes

import { Dispatch } from 'redux';
import axios from 'axios';
import {
  ContactsActions,
  ContactsActionTypes,
  ContactType,
} from '../../Types/contactsReduser';
import { Icontact, Idata } from '../../Types/getContactsAction';

const URL = 'https://randomuser.me/api/?results=50';

const fetchContacts = () => async (dispatch: Dispatch<ContactsActions>) => {
  try {
    dispatch({ type: ContactsActionTypes.FETCH_CONTACTS });
    const response: ContactType[] = await axios.get(URL)
      .then(
        ({ data }: Idata) => data.results.map((contact: Icontact) => {
          return {
            id: contact.login.uuid,
            image: contact.picture.medium,
            fullImage: contact.picture.large,
            name: contact.name.first,
            lastName: contact.name.last,
            login: contact.login.username,
            email: contact.email,
            phone: contact.phone,
            rating: 0,
          };
        }),
      );
    dispatch({
      type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: ContactsActionTypes.FETCH_CONTACTS_ERROR,
      payload: `😱 request failed ${error}`,
    });
  }
};

export default fetchContacts;
