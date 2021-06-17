import { mount } from 'enzyme';
import { DataTableSearch } from './DataTableSearch';

it('triggers event', () => {
  const onSearchHandler = jest.fn();
  const wrapper = mount(<DataTableSearch onSearch={onSearchHandler} />);

  wrapper.find('input').simulate('change', { target: { value: 'k' } });

  expect(onSearchHandler).toHaveBeenCalled();
});
