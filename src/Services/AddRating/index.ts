import { ContactType } from '../../Types/contactsReducer';
import LocalStorage from '../LocalStorage';

const ratingHandler = (
  rating: number,
  arr: ContactType[],
  id?: string,
) => {
  const filtered = arr.map(
    contact => (contact.id === id ? { ...contact, rating } : contact),
  );
  LocalStorage.set(LocalStorage.parse(filtered));
  return filtered;
};

export default ratingHandler;
