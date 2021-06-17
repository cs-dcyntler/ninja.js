import { mount } from 'enzyme';
import { DataTable } from './DataTable';

it('renders 5 rows', () => {
  const wrapper = mount(<DataTable locale="da" rowsPerPage={5} />);

  expect(wrapper.find('tr').length).toBe(5);
});

it('filters rows based on input', () => {
  const wrapper = mount(<DataTable locale="da" rowsPerPage={5} />);

  wrapper.find('input').simulate('change', { target: { value: 'k' } });

  expect(wrapper.find('tr').length).toBe(2);
});
