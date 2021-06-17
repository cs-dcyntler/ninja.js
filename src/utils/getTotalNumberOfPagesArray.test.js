import { getTotalNumberOfPagesArray } from './getTotalNumberOfPagesArray';

it('gets total numer of pages as array', () => {
  const result = getTotalNumberOfPagesArray(10);

  expect(result.toString()).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].toString());
});
