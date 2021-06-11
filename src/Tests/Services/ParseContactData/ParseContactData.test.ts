import parseContactsData from '../../../Services/ParseContactsData';

describe("parseContactsData function", () => {
  const state = [
    {
      login: {
        uuid: "001",
        username: "happykoala365",
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/73.jpg",
        large: "https://randomuser.me/api/portraits/men/73.jpg",
      },
      name: {
        first: "Isaac",
        last: "Williams",
      },
      email: "isaac.williams@example.com",
      phone: "(058)-396-1659",
    },
  ];

  test("should parse the object", () => {
    const fn = parseContactsData(state);
    expect(fn).toStrictEqual([{
      "id": "001",
      "image": "https://randomuser.me/api/portraits/med/men/73.jpg",
      "fullImage": "https://randomuser.me/api/portraits/men/73.jpg",
      "name": "Isaac",
      "lastName": "Williams",
      "login": "happykoala365",
      "email": "isaac.williams@example.com",
      "phone": "(058)-396-1659",
      "rating": 0
    }]);
  });
});
