import { ContactType } from '../../Types/contactsReducer';

const sortContactsByRating = (contacts: ContactType[]) => (
  contacts.sort(
    (a, b) => (a.rating < b.rating ? 1 : -1),
  )
);

const sortContacts = (sortBy: string, contacts: ContactType[]) => {
  if (sortBy === 'rating') sortContactsByRating(contacts);
  else {
    contacts.sort(
      (a: any, b: any) => {
        if (a[sortBy] > b[sortBy]) return 1;
        if (a[sortBy] < b[sortBy]) return -1;
        return 0;
      },
    );
  }
  return contacts;
};

export default sortContacts;
