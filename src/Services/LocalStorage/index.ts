import { ContactType } from '../../Types/contactsReducer';
import StorageType from '../../Types/localStorageService';
import ratingHandler from '../AddRating';

const LocalStorage = {
  get() {
    const json = localStorage.getItem('rating');
    return json !== null ? JSON.parse(json) : null;
  },
  set(data: StorageType[]) {
    const json = JSON.stringify(data);
    localStorage.setItem('rating', json);
  },
  init(data: ContactType[]) {
    const localRating: StorageType[] = this.get();
    if (localRating) {
      const localRatingColection = new Map(
        localRating.map(loc => [loc.id, loc.rating]),
      );
      const dataColection = data.map(({
        id,
        image,
        fullImage,
        name,
        lastName,
        login,
        email,
        phone,
        rating,
      }) => {
        return {
          id,
          image,
          fullImage,
          name,
          lastName,
          login,
          email,
          phone,
          rating: localRatingColection.get(id) || rating,
        };
      });
      const result = this.parse(dataColection);
      result.forEach((contact) => {
        ratingHandler(contact.rating, dataColection, contact.id);
      });
    } else {
      this.set([]);
    }
  },
  parse(data: ContactType[] | StorageType[]) {
    const filtered = data.filter(item => item.rating > 0);
    const parsedData = filtered.map((item) => {
      return {
        id: item.id,
        rating: item.rating,
      };
    });
    return parsedData;
  },
};

export default LocalStorage;
