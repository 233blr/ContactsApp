import { Dispatch } from 'redux';
// import axios from 'axios';
import {
  ContactsActionTypes,
  ContactsActions,
} from '../../Types/contactsReduser';

// const URL = 'https://randomuser.me/api/?results=50';

const fetchContacts = () => async (dispatch: Dispatch<ContactsActions>) => {
  try {
    dispatch({ type: ContactsActionTypes.FETCH_CONTACTS });
    const response = [
      {
        id: '3b83bf69-0af5-4980-bc5e-05f443c99104',
        foto: 'https://randomuser.me/api/portraits/med/women/29.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/women/29.jpg',
        name: 'Christy',
        lastName: 'Reynolds',
        login: 'tinybird395',
        email: 'christy.reynolds@example.com',
        phone: '(275)-610-2652',
        rating: 1,
      },
      {
        id: '3f2eb2d1-8bae-4e6e-97b8-1126b80622fb',
        foto: 'https://randomuser.me/api/portraits/med/men/57.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/men/57.jpg',
        name: 'Franklino',
        lastName: 'Novaes',
        login: 'crazyfrog235',
        email: 'franklino.novaes@example.com',
        phone: '(45) 8559-0293',
        rating: 3,
      },
      {
        id: 'f1c6ee45-2f99-478d-99f0-4f5bb0bb15eb',
        foto: 'https://randomuser.me/api/portraits/med/women/87.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/women/87.jpg',
        name: 'Hasibe',
        lastName: 'Van de Belt',
        login: 'purpleleopard368',
        email: 'hasibe.vandebelt@example.com',
        phone: '(886)-424-9768',
        rating: 2,
      },
      {
        id: 'a5bbccd7-113f-4a9c-8ba2-9842ceeda737',
        foto: 'https://randomuser.me/api/portraits/med/men/68.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/men/68.jpg',
        name: 'Aehmet',
        lastName: 'Kumcuoğlu',
        login: 'angrytiger844',
        email: 'mehmet.kumcuoglu@example.com',
        phone: '(725)-236-2693',
        rating: 0,
      },
      {
        id: 'bc6c970c-025b-4947-a704-be2a87ff58b6',
        foto: 'https://randomuser.me/api/portraits/med/men/69.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/men/69.jpg',
        name: 'Austafa',
        lastName: 'Gümüşpala',
        login: 'tinyrabbit614',
        email: 'mustafa.gumuspala@example.com',
        phone: '(572)-470-9788',
        rating: 0,
      },
      {
        id: '3eeb300e-d0bb-4c38-b6a4-bf47c8170dc7',
        foto: 'https://randomuser.me/api/portraits/med/women/22.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/women/22.jpg',
        name: 'مهرسا',
        lastName: 'کوتی',
        login: 'bigswan371',
        email: 'mhrs.khwty@example.com',
        phone: '047-27260101',
        rating: 0,
      },
      {
        id: 'f1e66352-54f1-4ff4-9fc3-33fe78fe62d2',
        foto: 'https://randomuser.me/api/portraits/med/women/33.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/women/33.jpg',
        name: 'Viola',
        lastName: 'Moreau',
        login: 'bigrabbit857',
        email: 'viola.moreau@example.com',
        phone: '077 237 85 40',
        rating: 0,
      },
      {
        id: '1dbae6b3-c061-4ee9-b05e-82a845eb14d4',
        foto: 'https://randomuser.me/api/portraits/med/women/11.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/women/11.jpg',
        name: 'Megan',
        lastName: 'Hansen',
        login: 'smallsnake803',
        email: 'megan.hansen@example.com',
        phone: '00-7005-1449',
        rating: 5,
      },
    ];
    // const response = await axios.get(URL)
    //   .then(
    //     ({ data }) => {
    //       const contacts = data.results.map((contact: any) => {
    //         return {
    //           id: contact.login.uuid,
    //           foto: contact.picture.medium,
    //           fullFoto: contact.picture.large,
    //           name: contact.name.first,
    //           lastName: contact.name.last,
    //           login: contact.login.username,
    //           email: contact.email,
    //           phone: contact.phone,
    //           rating: 0,
    //         };
    //       });
    //       console.log(contacts);
    //       return contacts;
    //     },
    //   );
    dispatch({
      type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: ContactsActionTypes.FETCH_CONTACTS_ERROR,
      payload: `😱 request failed ${error}`,
    });
  }
};

export default fetchContacts;
