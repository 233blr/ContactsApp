import { Dispatch } from 'redux';
// import axios from 'axios';
import {
  ContactsActionTypes,
  ContactsActions,
} from '../../Types/getContactsReduser';

// const URL = 'https://randomuser.me/api/?results=50';

const fetchContacts = () => async (dispatch: Dispatch<ContactsActions>) => {
  try {
    dispatch({ type: ContactsActionTypes.FETCH_CONTACTS });
    const response = [
      {
        id: '3b83bf69-0af5-4980-bc5e-05f443c99104',
        foto: 'https://randomuser.me/api/portraits/med/women/29.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/women/29.jpg',
        firstName: 'Christy',
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
        firstName: 'Franklino',
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
        firstName: 'Hasibe',
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
        firstName: 'Mehmet',
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
        firstName: 'Mustafa',
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
        firstName: 'مهرسا',
        lastName: 'کوتی',
        login: 'bigswan371',
        email: 'mhrs.khwty@example.com',
        phone: '047-27260101',
        rating: 0,
      },
      {
        id: '7b695594-1fc1-46d3-9e3d-c9b4b8c37c1e',
        foto: 'https://randomuser.me/api/portraits/med/women/14.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/women/14.jpg',
        firstName: 'Siiri',
        lastName: 'Heinonen',
        login: 'beautifulrabbit174',
        email: 'siiri.heinonen@example.com',
        phone: '02-544-640',
        rating: 5,
      },
      {
        id: '6acbdf67-40b0-4770-b5db-23628aeaad58',
        foto: 'https://randomuser.me/api/portraits/med/women/65.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/women/65.jpg',
        firstName: 'Leah',
        lastName: 'Harris',
        login: 'lazyfish525',
        email: 'leah.harris@example.com',
        phone: '(575)-862-3262',
        rating: 2,
      },
      {
        id: '5cbcff23-5746-4b0c-989b-88d9afb5c643',
        foto: 'https://randomuser.me/api/portraits/med/men/28.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/men/28.jpg',
        firstName: 'Lucas',
        lastName: 'Clark',
        login: 'tinyswan325',
        email: 'lucas.clark@example.com',
        phone: '484-394-4869',
        rating: 0,
      },
      {
        id: 'fd364304-8cb8-495c-aae3-6002f5d330ae',
        foto: 'https://randomuser.me/api/portraits/med/women/96.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/women/96.jpg',
        firstName: 'Luna',
        lastName: 'Blanchard',
        login: 'heavytiger963',
        email: 'luna.blanchard@example.com',
        phone: '01-61-21-60-02',
        rating: 4,
      },
      {
        id: '477a5572-9e0e-4fea-969c-ff085174bad2',
        foto: 'https://randomuser.me/api/portraits/med/men/29.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/men/29.jpg',
        firstName: 'Dylan',
        lastName: 'Noel',
        login: 'beautifulrabbit529',
        email: 'dylan.noel@example.com',
        phone: '075 110 01 18',
        rating: 2,
      },
      {
        id: 'c254bc6d-f556-419f-a9c2-f50605677839',
        foto: 'https://randomuser.me/api/portraits/med/men/88.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/men/88.jpg',
        firstName: 'Romano',
        lastName: 'Vincent',
        login: 'silverdog354',
        email: 'romano.vincent@example.com',
        phone: '075 898 67 01',
        rating: 0,
      },
      {
        id: 'f1e66352-54f1-4ff4-9fc3-33fe78fe62d2',
        foto: 'https://randomuser.me/api/portraits/med/women/33.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/women/33.jpg',
        firstName: 'Viola',
        lastName: 'Moreau',
        login: 'bigrabbit857',
        email: 'viola.moreau@example.com',
        phone: '077 237 85 40',
        rating: 0,
      },
      {
        id: '6a5ab8d1-7178-4633-ae87-f19cada5cbc5',
        foto: 'https://randomuser.me/api/portraits/med/men/61.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/men/61.jpg',
        firstName: 'Clifford',
        lastName: 'Vasquez',
        login: 'purplebutterfly917',
        email: 'clifford.vasquez@example.com',
        phone: '00-5457-0399',
        rating: 0,
      },
      {
        id: 'adcce8cb-f776-42fa-8371-550021a9d9e3',
        foto: 'https://randomuser.me/api/portraits/med/men/93.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/men/93.jpg',
        firstName: 'Rene',
        lastName: 'Harrison',
        login: 'smallwolf856',
        email: 'rene.harrison@example.com',
        phone: '(390)-261-0165',
        rating: 3,
      },
      {
        id: '9d128287-1f72-4134-9828-10f4f5680622',
        foto: 'https://randomuser.me/api/portraits/med/men/93.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/men/93.jpg',
        firstName: 'Frederick',
        lastName: 'Bowman',
        login: 'angrycat829',
        email: 'frederick.bowman@example.com',
        phone: '011-698-9665',
        rating: 0,
      },
      {
        id: '1dbae6b3-c061-4ee9-b05e-82a845eb14d4',
        foto: 'https://randomuser.me/api/portraits/med/women/11.jpg',
        fullFoto: 'https://randomuser.me/api/portraits/women/11.jpg',
        firstName: 'Megan',
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
    //           firstName: contact.name.first,
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
