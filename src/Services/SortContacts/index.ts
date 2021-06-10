import { ContactType } from '../../Types/contactsReducer';
import ValuesTypes from '../../Types/sortContacts';

const sortContacts = (value: ValuesTypes, arr: ContactType[]) => {
  const contacts = [...arr];
  if (value === 'rating') {
    contacts.sort(
      (a, b) => (a[value] < b[value] ? 1 : -1),
    );
  } else {
    contacts.sort(
      (a, b) => {
        if (a[value] > b[value]) return 1;
        if (a[value] < b[value]) return -1;
        return 0;
      },
    );
  }
  return contacts;
};

export default sortContacts;
