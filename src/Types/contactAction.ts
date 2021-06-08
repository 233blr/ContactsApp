import { ContactType } from './contactsReduser';

export interface GetStateType {
  listOfContacts: {
    contacts: ContactType[],
    loading: boolean;
    error: null | string;
    category: string | null;
  }
}
