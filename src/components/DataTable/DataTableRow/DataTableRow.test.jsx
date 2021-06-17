import { render } from 'enzyme';
import { DataTableRow } from './DataTableRow';

it('displays name and email', () => {
  const name = 'John';
  const email = 'john@example.com';
  const editPath = 'https://example.com';

  const wrapper = render(
    <DataTableRow name={name} email={email} editPath={editPath} />
  );
  const nameEl = wrapper.find('a');
  const emailEl = wrapper.find('small');

  expect(nameEl.prop('href')).toBe(editPath);
  expect(nameEl.text()).toBe(name);
  expect(emailEl.text()).toBe(email);
});
