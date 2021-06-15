import sortContacts from '../../../Services/SortContacts';

describe("Sort contacts function", () => {
  const state = [
    {
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
    {
      "id": "002",
      "image": "https://randomuser.me/api/portraits/med/women/61.jpg",
      "fullImage": "https://randomuser.me/api/portraits/women/61.jpg",
      "name": "Jrin",
      "lastName": "Morrison",
      "login": "brownwolf324",
      "email": "erin.morrison@example.com",
      "phone": "015396 35342",
      "rating": 5
    },
    {
      "id": "003",
      "image": "https://randomuser.me/api/portraits/med/women/61.jpg",
      "fullImage": "https://randomuser.me/api/portraits/women/61.jpg",
      "name": "Arin",
      "lastName": "Morrison",
      "login": "brownwolf324",
      "email": "erin.morrison@example.com",
      "phone": "015396 35342",
      "rating": 5
    },
  ];

  test("should return a array of objects sorted by rating", () => {
    const fn = sortContacts('rating', state);
    expect(fn).toStrictEqual([{
      "id": "003",
      "image": "https://randomuser.me/api/portraits/med/women/61.jpg",
      "fullImage": "https://randomuser.me/api/portraits/women/61.jpg",
      "name": "Arin",
      "lastName": "Morrison",
      "login": "brownwolf324",
      "email": "erin.morrison@example.com",
      "phone": "015396 35342",
      "rating": 5
    }, {
      "id": "002",
      "image": "https://randomuser.me/api/portraits/med/women/61.jpg",
      "fullImage": "https://randomuser.me/api/portraits/women/61.jpg",
      "name": "Jrin",
      "lastName": "Morrison",
      "login": "brownwolf324",
      "email": "erin.morrison@example.com",
      "phone": "015396 35342",
      "rating": 5
      }, {
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
    ]);
  });

  test("should return a array of objects sorted by name", () => {
    const fn = sortContacts('name', state);
    expect(fn).toStrictEqual([{
      "id": "003",
      "image": "https://randomuser.me/api/portraits/med/women/61.jpg",
      "fullImage": "https://randomuser.me/api/portraits/women/61.jpg",
      "name": "Arin",
      "lastName": "Morrison",
      "login": "brownwolf324",
      "email": "erin.morrison@example.com",
      "phone": "015396 35342",
      "rating": 5
    }, {
        "id": "001",
        "image": "https://randomuser.me/api/portraits/med/men/73.jpg",
        "fullImage": "https://randomuser.me/api/portraits/men/73.jpg",
        "name": "Isaac",
        "lastName": "Williams",
        "login": "happykoala365",
        "email": "isaac.williams@example.com",
        "phone": "(058)-396-1659",
        "rating": 0
      }, {
        "id": "002",
        "image": "https://randomuser.me/api/portraits/med/women/61.jpg",
        "fullImage": "https://randomuser.me/api/portraits/women/61.jpg",
        "name": "Jrin",
        "lastName": "Morrison",
        "login": "brownwolf324",
        "email": "erin.morrison@example.com",
        "phone": "015396 35342",
        "rating": 5
      },
    ]);
  });
});
