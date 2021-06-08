import { ContactType } from '../../Types/contactsReducer';

const sortLeaders = (arr: ContactType[]) => {
  const stateCopy = [...arr];
  const leaders = stateCopy.filter(item => item.rating > 3);
  if (leaders.length) {
    leaders.sort((a, b) => {
      if (a.rating < b.rating) return 1;
      if (a.rating > b.rating) return -1;
      return a.name.localeCompare(b.name);
    });
    if (leaders.length > 5) {
      return leaders.slice(0, 5);
    }
  }
  return leaders;
};

export default sortLeaders;
