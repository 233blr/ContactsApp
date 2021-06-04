/* eslint-disable no-unused-vars */
import { ContactType } from './contactsReduser';

export enum GetFullContactActionTypes {
  GET_FULL_CONTACT = 'GET_FULL_CONTACT',
  GET_FULL_CONTACT_SUCCESS = 'GET_FULL_CONTACT_SUCCESS',
}

export interface GetFullContactAction {
  type: GetFullContactActionTypes.GET_FULL_CONTACT;
}

export interface LinkToFullContactPageAction {
  type: GetFullContactActionTypes.GET_FULL_CONTACT_SUCCESS;
  payload: ContactType[];
}

export type FullContactActions = GetFullContactAction
| LinkToFullContactPageAction;

export interface FullContactState {
  contact: ContactType[];
  loading: boolean;
}

export interface ContactPageParams {
  id: string,
}
