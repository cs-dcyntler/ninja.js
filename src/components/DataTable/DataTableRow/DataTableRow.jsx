import PropTypes from 'prop-types';
import { DataTableRowParagraph } from './DataTableRow.styles';

export const DataTableRow = ({ name, email, editPath }) => (
  <tr>
    <td>
      <DataTableRowParagraph>
        <a href={editPath}>{name}</a>
      </DataTableRowParagraph>
      <DataTableRowParagraph>
        <small>{email}</small>
      </DataTableRowParagraph>
    </td>
  </tr>
);

DataTableRow.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  editPath: PropTypes.string.isRequired,
};
