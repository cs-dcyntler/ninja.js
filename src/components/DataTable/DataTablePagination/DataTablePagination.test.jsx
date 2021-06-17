import { mount } from 'enzyme';
import { DataTablePagination } from './DataTablePagination';

let onChangeHandler;

beforeEach(() => {
  onChangeHandler = jest.fn();
});

it('displays pagination', () => {
  const wrapper = mount(
    <DataTablePagination
      currentPageNumber={1}
      totalNumberOfPages={5}
      onChange={onChangeHandler}
    />
  );

  expect(wrapper.find('li').length).toBe(5);
});

it('displays pagination with no pages', () => {
  const wrapper = mount(
    <DataTablePagination
      currentPageNumber={1}
      totalNumberOfPages={0}
      onChange={onChangeHandler}
    />
  );

  expect(wrapper.text()).toBe('');
});

it('calls on change handler', () => {
  const wrapper = mount(
    <DataTablePagination
      currentPageNumber={1}
      totalNumberOfPages={5}
      onChange={onChangeHandler}
    />
  );

  wrapper.find('li').at(2).find('button').simulate('click');

  expect(onChangeHandler).toHaveBeenCalled();
});
