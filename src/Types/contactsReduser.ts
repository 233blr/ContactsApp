/* eslint-disable no-unused-vars */
export interface ContactType {
  id: string;
  image: string;
  fullImage: string;
  name: string;
  lastName: string;
  login: string;
  email: string;
  phone: string;
  rating: number;
}

export enum ContactsActionTypes {
  FETCH_CONTACTS = 'FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR',
  FILTER_CONTACTS = 'FILTER_CONTACTS',
  FILTER_CONTACTS_SUCCESS = 'FILTER_CONTACTS_SUCCESS',
  DELETE_CONTACT = 'DELETE_CONTACT',
  ADD_RATING = 'ADD_RATING',
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

export interface FilterContactsAction {
  type: ContactsActionTypes.FILTER_CONTACTS;
  payload: string;
}

export interface FilterContactsSuccessAction {
  type: ContactsActionTypes.FILTER_CONTACTS_SUCCESS;
  payload: ContactType[];
}

export interface DeleteContactsAction {
  type: ContactsActionTypes.DELETE_CONTACT;
  payload: ContactType[];
}

export interface AddRatingAction {
  type: ContactsActionTypes.ADD_RATING;
  payload: ContactType[];
}

export type ContactsActions = FetchContactsAction
| FetchContactsSuccessAction
| FetchContactsErrorAction
| FilterContactsAction
| FilterContactsSuccessAction
| DeleteContactsAction
| AddRatingAction;

export interface ContactsState {
  contacts: ContactType[];
  loading: boolean;
  error: null | string;
  category: string;
}
