import ContactsReduser from '../../Store/Reducers/contactsReducer';
import { ContactsActionTypes } from '../../Types/contactsReducer';

describe("ContactsReduser test", () => {
  const initialState = {
    contacts: [],
    loading: false,
    error: null,
    category: null,
  };

  test("should call FETCH_CONTACTS_SUCCESS", () => {
    const fn = ContactsReduser(
      initialState,
      {
        type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS,
        payload: {
          "id": "001",
          "image": "https://randomuser.me/api/portraits/med/men/73.jpg",
          "fullImage": "https://randomuser.me/api/portraits/men/73.jpg",
          "name": "Isaac",
          "lastName": "Williams",
          "login": "happykoala365",
          "email": "isaac.williams@example.com",
          "phone": "(058)-396-1659",
          "rating": 0
        },
      },
    );
    expect(fn).toEqual({
      contacts: {
        "id": "001",
        "image": "https://randomuser.me/api/portraits/med/men/73.jpg",
        "fullImage": "https://randomuser.me/api/portraits/men/73.jpg",
        "name": "Isaac",
        "lastName": "Williams",
        "login": "happykoala365",
        "email": "isaac.williams@example.com",
        "phone": "(058)-396-1659",
        "rating": 0
      },
      loading: false,
      error: null,
      category: null,
    });
  });

  test("should call DELETE_CONTACT", () => {
    const fn = ContactsReduser(
      initialState,
      {
        type: ContactsActionTypes.DELETE_CONTACT,
        payload: {
          "id": "001",
          "image": "https://randomuser.me/api/portraits/med/men/73.jpg",
          "fullImage": "https://randomuser.me/api/portraits/men/73.jpg",
          "name": "Isaac",
          "lastName": "Williams",
          "login": "happykoala365",
          "email": "isaac.williams@example.com",
          "phone": "(058)-396-1659",
          "rating": 0
        },
      },
    );
    expect(fn).toStrictEqual({
      contacts: {
        "id": "001",
        "image": "https://randomuser.me/api/portraits/med/men/73.jpg",
        "fullImage": "https://randomuser.me/api/portraits/men/73.jpg",
        "name": "Isaac",
        "lastName": "Williams",
        "login": "happykoala365",
        "email": "isaac.williams@example.com",
        "phone": "(058)-396-1659",
        "rating": 0
      },
      loading: false,
      error: null,
      category: null,
    });
  });

  test("should call ADD_RATING", () => {
    const fn = ContactsReduser(
      initialState,
      {
        type: ContactsActionTypes.ADD_RATING,
        payload: {
          "id": "001",
          "image": "https://randomuser.me/api/portraits/med/men/73.jpg",
          "fullImage": "https://randomuser.me/api/portraits/men/73.jpg",
          "name": "Isaac",
          "lastName": "Williams",
          "login": "happykoala365",
          "email": "isaac.williams@example.com",
          "phone": "(058)-396-1659",
          "rating": 5
        },
      },
    );
    expect(fn).toStrictEqual({
      contacts: {
        "id": "001",
        "image": "https://randomuser.me/api/portraits/med/men/73.jpg",
        "fullImage": "https://randomuser.me/api/portraits/men/73.jpg",
        "name": "Isaac",
        "lastName": "Williams",
        "login": "happykoala365",
        "email": "isaac.williams@example.com",
        "phone": "(058)-396-1659",
        "rating": 5
      },
      loading: false,
      error: null,
      category: null,
    });
  });

  test("should call FETCH_CONTACTS_ERROR", () => {
    const fn = ContactsReduser(
      initialState,
      {
        type: ContactsActionTypes.FETCH_CONTACTS_ERROR,
        payload: "error",
      },
    );
    expect(fn).toStrictEqual({
      contacts: [],
      loading: false,
      error: "error",
      category: null,
    });
  });
});
