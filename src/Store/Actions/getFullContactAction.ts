import { Dispatch } from 'redux';
import {
  GetFullContactActionTypes,
  FullContactActions,
} from '../../Types/getFullContactAction';
import { GetStateType } from '../../Types/contactAction';

const getFullContact = (id: string) => (
  dispatch: Dispatch<FullContactActions>, getState: () => GetStateType,
) => {
  dispatch({
    type: GetFullContactActionTypes.GET_FULL_CONTACT,
  });
  const state = getState();
  dispatch({
    type: GetFullContactActionTypes.GET_FULL_CONTACT_SUCCESS,
    payload: [...state.listOfContacts.contacts].find(
      contact => (contact.id === id),
    ),
  });
};

export default getFullContact;
