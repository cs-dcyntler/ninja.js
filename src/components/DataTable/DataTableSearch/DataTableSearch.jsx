import PropTypes from 'prop-types';

export const DataTableSearch = ({ onSearch }) => (
  <div className="p-b-1">
    <input
      type="search"
      className="form-control"
      placeholder="Søg brugere"
      onChange={onSearch}
    />
  </div>
);

DataTableSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
