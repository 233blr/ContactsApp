import { ContactType } from '../../Types/contactsReducer';
import LocalStorage from '../LocalStorage';

const ratingHandler = (
  id: string | undefined,
  rating: number,
  arr: ContactType[],
) => {
  const filtered = [...arr];
  filtered.forEach(
    (contact) => {
      if (contact.id === id) {
        contact.rating = rating;
      }
    },
  );
  LocalStorage.set(LocalStorage.parse(filtered));
  return filtered;
};

export default ratingHandler;
