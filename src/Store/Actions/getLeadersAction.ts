import { Dispatch } from 'redux';
import {
  LeadersActionTypes,
  LeadersActions,
} from '../../Types/getLeadersAction';
import { GetStateType } from '../../Types/contactAction';
import { ContactType } from '../../Types/contactsReduser';

const sortLeaders = (arr: ContactType[]) => {
  const stateCopy = [...arr];
  const sorted = stateCopy.sort((a, b) => {
    if (a.rating < b.rating) return 1;
    if (a.rating > b.rating) return -1;
    return a.name.localeCompare(b.name);
  });
  if (sorted.length > 5) {
    return sorted.slice(0, 5);
  }
  return sorted;
};

const getLeaders = () => (
  dispatch: Dispatch<LeadersActions>, getState: () => GetStateType,
) => {
  dispatch({
    type: LeadersActionTypes.GET_LEADERS,
  });
  const state = getState();
  const leaders = sortLeaders(state.listOfContacts.contacts);
  dispatch({
    type: LeadersActionTypes.GET_LEADERS_SUCCESS,
    payload: leaders,
  });
};

export default getLeaders;
