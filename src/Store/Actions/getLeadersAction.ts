import { Dispatch } from 'redux';
import {
  LeadersActionTypes,
  LeadersActions,
} from '../../Types/getLeadersAction';
import { GetStateType } from '../../Types/contactAction';

const getLeaders = () => (
  dispatch: Dispatch<LeadersActions>, getState: () => GetStateType,
) => {
  dispatch({
    type: LeadersActionTypes.GET_LEADERS,
  });
  const state = getState();
  const filtered = [...state.listOfContacts.contacts].filter(
    contact => (contact.rating > 2),
  );
  const leaders = [...filtered].sort((a, b) => {
    if (a.rating < b.rating) return 1;
    if (a.rating > b.rating) return -1;
    return a.name.localeCompare(b.name);
  });
  dispatch({
    type: LeadersActionTypes.GET_LEADERS_SUCCESS,
    payload: leaders,
  });
};

export default getLeaders;
