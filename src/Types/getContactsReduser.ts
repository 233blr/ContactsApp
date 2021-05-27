export interface Contact {
  id: string;
  foto: string;
  fullfoto: string;
  name: string;
  login: string;
  phone: string;
  rauting: number;
}

export enum ContactsActionTypes {
  // eslint-disable-next-line no-unused-vars
  GET_CONTACTS = 'GET_CONTACTS'
}

export interface FetchContactsAction {
  type: ContactsActionTypes.GET_CONTACTS;
  payload: Contact[];
}

export type ContactActions = FetchContactsAction;

// interface ContactAction {
//   type: string;
//   payload?: any;
// }

export interface ContactState {
  contacts: Contact[];
}
