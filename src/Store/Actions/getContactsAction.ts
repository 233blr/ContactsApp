import axios from 'axios';
import { Dispatch } from 'redux';

import {
  FetchContactsAction,
  ContactsActionTypes,
  ContactActions,
} from '../../Types/getContactsReduser';

export const getContacts = (contacts: any[]): FetchContactsAction => {
  return {
    type: ContactsActionTypes.GET_CONTACTS,
    payload: contacts,
  };
};

export const fetchContacts = () => {
  return (dispatch: Dispatch<ContactActions>) => {
    axios.get('https://randomuser.me/api/?results=50')
      .then(
        ({ data }) => {
          const res = [...data.results].map((contact) => {
            return {
              id: contact.login.uuid,
              foto: contact.picture.medium,
              fullfoto: contact.picture.large,
              name: `${contact.name.first} ${contact.name.last}`,
              login: contact.login.username,
              phone: contact.phone,
              rauting: 0,
            };
          });

          dispatch(getContacts(res));
        },
      )
      .catch((error) => {
        return console.log(`An error occured while loading contacts ${error}`);
      });
  };
};
