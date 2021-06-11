import sortLeaders from '../../../Services/SortLeaders';

describe("Sort liaders function", () => {
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
      "image": "https://randomuser.me/api/portraits/med/women/19.jpg",
      "fullImage": "https://randomuser.me/api/portraits/women/19.jpg",
      "name": "E",
      "lastName": "Akyürek",
      "login": "blue",
      "email": "afsar.akyurek@example.com",
      "phone": "787-6641",
      "rating": 5
    },
    {
      "id": "004",
      "image": "https://randomuser.me/api/portraits/med/men/73.jpg",
      "fullImage": "https://randomuser.me/api/portraits/men/73.jpg",
      "name": "D",
      "lastName": "Williams",
      "login": "happykoala365",
      "email": "isaac.williams@example.com",
      "phone": "(058)-396-1659",
      "rating": 5
    },
    {
      "id": "005",
      "image": "https://randomuser.me/api/portraits/med/women/61.jpg",
      "fullImage": "https://randomuser.me/api/portraits/women/61.jpg",
      "name": "C",
      "lastName": "Morrison",
      "login": "brownwolf324",
      "email": "erin.morrison@example.com",
      "phone": "015396 35342",
      "rating": 5
    },
    {
      "id": "006",
      "image": "https://randomuser.me/api/portraits/med/women/19.jpg",
      "fullImage": "https://randomuser.me/api/portraits/women/19.jpg",
      "name": "B",
      "lastName": "Akyürek",
      "login": "blue",
      "email": "afsar.akyurek@example.com",
      "phone": "787-6641",
      "rating": 5
    },
    {
      "id": "007",
      "image": "https://randomuser.me/api/portraits/med/women/19.jpg",
      "fullImage": "https://randomuser.me/api/portraits/women/19.jpg",
      "name": "A",
      "lastName": "Akyürek",
      "login": "blue",
      "email": "afsar.akyurek@example.com",
      "phone": "787-6641",
      "rating": 5
    }
  ];

  test("should return a array of objects with rating > 3", () => {
    const fn = sortLeaders(state);
    expect(fn).toStrictEqual([{
      "id": "007",
      "image": "https://randomuser.me/api/portraits/med/women/19.jpg",
      "fullImage": "https://randomuser.me/api/portraits/women/19.jpg",
      "name": "A",
      "lastName": "Akyürek",
      "login": "blue",
      "email": "afsar.akyurek@example.com",
      "phone": "787-6641",
      "rating": 5
    }, {
      "id": "006",
      "image": "https://randomuser.me/api/portraits/med/women/19.jpg",
      "fullImage": "https://randomuser.me/api/portraits/women/19.jpg",
      "name": "B",
      "lastName": "Akyürek",
      "login": "blue",
      "email": "afsar.akyurek@example.com",
      "phone": "787-6641",
      "rating": 5
    }, {
      "id": "005",
      "image": "https://randomuser.me/api/portraits/med/women/61.jpg",
      "fullImage": "https://randomuser.me/api/portraits/women/61.jpg",
      "name": "C",
      "lastName": "Morrison",
      "login": "brownwolf324",
      "email": "erin.morrison@example.com",
      "phone": "015396 35342",
      "rating": 5
    }, {
      "id": "004",
      "image": "https://randomuser.me/api/portraits/med/men/73.jpg",
      "fullImage": "https://randomuser.me/api/portraits/men/73.jpg",
      "name": "D",
      "lastName": "Williams",
      "login": "happykoala365",
      "email": "isaac.williams@example.com",
      "phone": "(058)-396-1659",
      "rating": 5
    }, {
      "id": "003",
      "image": "https://randomuser.me/api/portraits/med/women/19.jpg",
      "fullImage": "https://randomuser.me/api/portraits/women/19.jpg",
      "name": "E",
      "lastName": "Akyürek",
      "login": "blue",
      "email": "afsar.akyurek@example.com",
      "phone": "787-6641",
      "rating": 5
    },
    ]);
  });
});
