import { ContactType } from './contactsReducer';

export type ContactItemType = {
  key: string,
  data: ContactType,
}

export interface RatingType {
  rating: number,
}
