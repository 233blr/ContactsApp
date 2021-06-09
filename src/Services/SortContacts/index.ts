import { ContactType } from '../../Types/contactsReducer';

const sortContacts = (value: string, arr: ContactType[]) => {
  const contacts = [...arr];
  if (value === 'rating') {
    contacts.sort(
      (a: any, b: any) => (a[value] < b[value] ? 1 : -1),
    );
  } else {
    contacts.sort(
      (a: any, b: any) => {
        if (a[value] > b[value]) return 1;
        if (a[value] < b[value]) return -1;
        return 0;
      },
    );
  }
  return contacts;
};

export default sortContacts;
