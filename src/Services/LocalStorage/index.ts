import { ContactType } from '../../Types/contactsReducer';

const LocalStorage = {
  get() {
    const json = localStorage.getItem('rating');
    return json !== null ? JSON.parse(json) : null;
  },
  set(data: ContactType[]) {
    let ratingStorage = LocalStorage.get();
    if (!ratingStorage) {
      ratingStorage = data.map((item: ContactType) => {
        return {
          id: item.id,
          rating: item.rating,
        };
      });
    } else {
      ratingStorage = data.map((item: ContactType) => {
        return {
          id: item.id,
          rating: item.rating,
        };
      });
    }
    const json = JSON.stringify(ratingStorage);
    localStorage.setItem('rating', json);
  },
};

export default LocalStorage;
