import { ContactType } from './contactsReducer';

export interface GetStateType {
  listOfContacts: {
    contacts: ContactType[],
    loading: boolean;
    error: null | string;
    category: null | string;
  }
}
