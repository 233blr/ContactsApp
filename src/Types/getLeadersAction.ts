import { ContactType } from './contactsReducer';

export enum LeadersActionTypes {
  GET_LEADERS = 'GET_LEADERS',
  GET_LEADERS_SUCCESS = 'GET_LEADERS_SUCCESS',
}

export interface GetLeadersAction {
  type: LeadersActionTypes.GET_LEADERS;
}

export interface GetLeadersActionSuccessAction {
  type: LeadersActionTypes.GET_LEADERS_SUCCESS;
  payload: ContactType[];
}

export type LeadersActions = GetLeadersAction
  | GetLeadersActionSuccessAction;

export interface LeadersState {
  leaders: ContactType[];
  loading: boolean;
}
