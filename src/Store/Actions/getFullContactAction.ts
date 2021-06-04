import { Dispatch } from 'redux';
import {
  GetFullContactActionTypes,
  FullContactActions,
} from '../../Types/getFullContactAction';
import { GetStateType } from '../../Types/contactAction';

const findContact = (arr: any, item: string) => {
  const result = [...arr.listOfContacts.contacts].filter(
    contact => (contact.id === item),
  );
  return result;
};

const getFullContact = (id: string) => (
  dispatch: Dispatch<FullContactActions>, getState: () => GetStateType,
) => {
  dispatch({
    type: GetFullContactActionTypes.GET_FULL_CONTACT,
  });
  const state = getState();
  const res = findContact(state, id);
  dispatch({
    type: GetFullContactActionTypes.GET_FULL_CONTACT_SUCCESS,
    payload: res,
  });
};

export default getFullContact;
