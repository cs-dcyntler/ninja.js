import { mount } from 'enzyme';
import { DataTablePaginationPage } from './DataTablePaginationPage';

let onChangeHandler;

beforeEach(() => {
  onChangeHandler = jest.fn();
});

it('displays page number', () => {
  const pageNumber = 2;

  const wrapper = mount(
    <DataTablePaginationPage
      pageNumber={pageNumber}
      isActivePage={false}
      onChange={onChangeHandler}
    />
  );

  expect(wrapper.find('button').text()).toBe(pageNumber.toString());
});

it('actives page', () => {
  const wrapper = mount(
    <DataTablePaginationPage
      pageNumber={1}
      isActivePage={true}
      onChange={onChangeHandler}
    />
  );

  expect(wrapper.find('button').hasClass('button-outline')).toBeTruthy();
});

it('calls on change handler', () => {
  const wrapper = mount(
    <DataTablePaginationPage
      pageNumber={1}
      isActivePage={true}
      onChange={onChangeHandler}
    />
  );

  wrapper.find('button').simulate('click');

  expect(onChangeHandler).toHaveBeenCalled();
});
