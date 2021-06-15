import FullContactReducer from '../../Store/Reducers/getFullContactReducer';
import { GetFullContactActionTypes } from '../../Types/getFullContactAction';

describe("FullContactReducer test", () => {
  const initialState = {
    contact: null,
    loading: false,
  };

  test("should call GET_FULL_CONTACT", () => {
    const fn = FullContactReducer(
      initialState,
      {
        type: GetFullContactActionTypes.GET_FULL_CONTACT,
      },
    );
    expect(fn).toEqual({
      contact: null,
      loading: true,
    });
  });

  test("should call GET_FULL_CONTACT_SUCCESS", () => {
    const fn = FullContactReducer(
      initialState,
      {
        type: GetFullContactActionTypes.GET_FULL_CONTACT_SUCCESS,
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
      contact: {
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
    });
  });
});
