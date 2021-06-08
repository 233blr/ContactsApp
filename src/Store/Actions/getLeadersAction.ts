import { Dispatch } from 'redux';
import {
  LeadersActionTypes,
  LeadersActions,
} from '../../Types/getLeadersAction';
import { GetStateType } from '../../Types/contactAction';
import sortLeaders from '../../Services/SortLeaders';

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
