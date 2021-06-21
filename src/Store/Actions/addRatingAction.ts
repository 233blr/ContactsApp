import { Dispatch } from 'redux';
import {
  ContactsActionTypes,
  ContactsActions,
} from '../../Types/contactsReducer';
import { GetStateType } from '../../Types/contactAction';
import ratingHandler from '../../Services/AddRating';

const addRating = (rating: number, id?: string) => (
  dispatch: Dispatch<ContactsActions>, getState: () => GetStateType,
) => {
  const state = getState();
  if (id) {
    dispatch({
      type: ContactsActionTypes.ADD_RATING,
      payload: ratingHandler(rating, state.listOfContacts.contacts, id),
    });
  }
};

export default addRating;
