/* eslint-disable no-unused-vars */
import { ContactType } from './contactsReducer';

export enum GetFullContactActionTypes {
  GET_FULL_CONTACT = 'GET_FULL_CONTACT',
  GET_FULL_CONTACT_SUCCESS = 'GET_FULL_CONTACT_SUCCESS',
}

export interface GetFullContactAction {
  type: GetFullContactActionTypes.GET_FULL_CONTACT;
}

export interface LinkToFullContactPageAction {
  type: GetFullContactActionTypes.GET_FULL_CONTACT_SUCCESS;
  payload: ContactType | undefined;
}

export type FullContactActions = GetFullContactAction
  | LinkToFullContactPageAction;

export interface FullContactState {
  contact: ContactType | undefined;
  loading: boolean;
}

export interface ContactPageParams {
  id: string,
}
