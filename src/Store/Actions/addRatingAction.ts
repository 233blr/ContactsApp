import { Dispatch } from 'redux';
import {
  ContactsActionTypes,
  ContactsActions,
} from '../../Types/contactsReducer';
import { GetStateType } from '../../Types/contactAction';
import ratingHandler from '../../Services/AddRating';

const addRating = (id: string | undefined, rating: number) => (
  dispatch: Dispatch<ContactsActions>, getState: () => GetStateType,
) => {
  const state = getState();
  dispatch({
    type: ContactsActionTypes.ADD_RATING,
    payload: ratingHandler(id, rating, state.listOfContacts.contacts),
  });
};

export default addRating;
