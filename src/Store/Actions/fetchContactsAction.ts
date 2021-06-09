import { Dispatch } from 'redux';
import axios from 'axios';
import {
  ContactsActions,
  ContactsActionTypes,
  ContactType,
} from '../../Types/contactsReducer';
import { FetchDataType } from '../../Types/getContactsAction';
import parseContactsData from '../../Services/ParseContactsData';

const URL = 'https://randomuser.me/api/?results=50';

const fetchContacts = () => async (dispatch: Dispatch<ContactsActions>) => {
  try {
    dispatch({ type: ContactsActionTypes.FETCH_CONTACTS });
    const response: ContactType[] = await axios.get(URL)
      .then(
        ({ data }: FetchDataType) => parseContactsData(data.results),
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
