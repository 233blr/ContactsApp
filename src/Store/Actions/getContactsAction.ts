import { Dispatch } from 'redux';
import axios from 'axios';
import {
  ContactsActionTypes,
  ContactsActions,
} from '../../Types/getContactsReduser';

const URL = 'https://randomuser.me/api/?results=50';

const fetchContacts = () => {
  return async (dispatch: Dispatch<ContactsActions>) => {
    try {
      dispatch({ type: ContactsActionTypes.FETCH_CONTACTS });
      const response = await axios.get(URL)
        .then(
          ({ data }) => {
            const contacts = data.results.map((contact: any) => {
              return {
                id: contact.login.uuid,
                foto: contact.picture.medium,
                fullFoto: contact.picture.large,
                firstName: contact.name.first,
                lastName: contact.name.last,
                login: contact.login.username,
                email: contact.email,
                phone: contact.phone,
                rating: 0,
              };
            });
            return contacts;
          },
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
};

export default fetchContacts;
