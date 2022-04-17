const googleSearch = require('./script');

dbMock = [
  'cats.com',
  'souprrecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavoritecats.com',
];

it('this is a silly test ', () => {
  expect('hello').toBe('hello');
});

it('this is searching google', () => {
  expect(googleSearch('testtest', dbMock)).toEqual([]);
});
