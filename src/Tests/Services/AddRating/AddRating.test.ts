import ratingHandler from '../../../Services/AddRating';

describe("Rating handler function", () => {
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
  ];

  test("should add rating to the object", () => {
    const fn = ratingHandler('001', 5, state);
    expect(fn).toStrictEqual([{
      "id": "001",
      "image": "https://randomuser.me/api/portraits/med/men/73.jpg",
      "fullImage": "https://randomuser.me/api/portraits/men/73.jpg",
      "name": "Isaac",
      "lastName": "Williams",
      "login": "happykoala365",
      "email": "isaac.williams@example.com",
      "phone": "(058)-396-1659",
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
    },
    ]);
  });
});
