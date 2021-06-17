import { calculateTotalNumberOfPages } from './calculateTotalNumberOfPages';

it('calculates total number of pages of 4 rows', () => {
  const rows = [1, 2, 3, 4];

  const result = calculateTotalNumberOfPages(rows, 3);

  expect(result).toBe(2);
});

it('calculates total number of pages of 5 rows', () => {
  const rows = [1, 2, 3, 4, 5];

  const result = calculateTotalNumberOfPages(rows, 5);

  expect(result).toBe(1);
});
