/* eslint-disable no-unused-vars */
export interface ContactType {
  id: string;
  foto: string;
  fullFoto: string;
  name: string;
  login: string;
  email: string;
  phone: string;
  rating: number;
}

export enum ContactsActionTypes {
  FETCH_CONTACTS = 'FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR',
}

export interface FetchContactsAction {
  type: ContactsActionTypes.FETCH_CONTACTS;
}

export interface FetchContactsSuccessAction {
  type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: ContactType[];
}

export interface FetchContactsErrorAction {
  type: ContactsActionTypes.FETCH_CONTACTS_ERROR;
  payload: string;
}

export type ContactsActions = FetchContactsAction
| FetchContactsSuccessAction
| FetchContactsErrorAction;

export interface ContactsState {
  contacts: ContactType[];
  loading: boolean;
  error: null | string;
}
