import { FetchContactType } from '../../Types/getContactsAction';
import LocalStorage from '../LocalStorage';

const parseContactsData = (arr: FetchContactType[]) => {
  const result = arr.map((contact: FetchContactType) => {
    return {
      id: contact.login.uuid,
      image: contact.picture.medium,
      fullImage: contact.picture.large,
      name: contact.name.first,
      lastName: contact.name.last,
      login: contact.login.username,
      email: contact.email,
      phone: contact.phone,
      rating: 0,
    };
  });
  LocalStorage.set(result);
  return result;
};

export default parseContactsData;
