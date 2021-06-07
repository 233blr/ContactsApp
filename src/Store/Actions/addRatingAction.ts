import { Dispatch } from 'redux';

import {
  ContactsActionTypes,
  ContactsActions,
} from '../../Types/contactsReduser';
import { GetStateType } from '../../Types/contactAction';

const addRating = (id: string | undefined, rating: number) => (
  dispatch: Dispatch<ContactsActions>, getState: () => GetStateType,
) => {
  const state = getState();
  const addedRating = () => {
    const filtered = [...state.listOfContacts.contacts];
    filtered.forEach(
      (contact) => {
        if (contact.id === id) {
          contact.rating = rating;
        }
      },
    );
    return filtered;
  };
  dispatch({
    type: ContactsActionTypes.ADD_RATING,
    payload: addedRating(),
  });
};

export default addRating;
