import { userDataRowsMock } from '../../mocks/userDataRowsMock';
import { searchFilter } from './searchFilter';

it('filters records without search query', () => {
  const result = userDataRowsMock.filter(searchFilter(''));

  expect(result.toString()).toBe(userDataRowsMock.toString());
});

it('filters records with search query', () => {
  const result = userDataRowsMock.filter(searchFilter('Alfred'));

  expect(result.length).toBe(2);
});
