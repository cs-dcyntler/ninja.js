import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { UserDataContext } from '../../contexts/userDataContext';
import { calculateTotalNumberOfPages } from '../../utils/calculateTotalNumberOfPages';
import { DataTablePagination } from './DataTablePagination/DataTablePagination';
import { DataTableRow } from './DataTableRow/DataTableRow';
import { DataTableSearch } from './DataTableSearch/DataTableSearch';
import { searchFilter } from '../../utils/filters/searchFilter';

const initialPageNumber = 1;

export const DataTable = ({ rowsPerPage }) => {
  const rows = useContext(UserDataContext);

  const [currentPageNumber, setCurrentPageNumber] = useState(initialPageNumber);
  const [searchQuery, setSearchQuery] = useState('');

  const totalNumberOfPages = useMemo(
    () => calculateTotalNumberOfPages(rows, rowsPerPage),
    [rows]
  );
  const startIndex = useMemo(
    () => (currentPageNumber - 1) * rowsPerPage,
    [currentPageNumber, rowsPerPage]
  );

  const handleSearch = useCallback(
    (event) => setSearchQuery(event.target.value),
    []
  );

  const handleChangePageNumber = useCallback(
    (pageNumber) => setCurrentPageNumber(pageNumber),
    []
  );

  const getRows = useCallback(
    () =>
      rows
        .filter(searchFilter(searchQuery))
        .slice(startIndex, startIndex + rowsPerPage)
        .map(({ perId, name, email, editPath }) => (
          <DataTableRow
            key={perId}
            name={name}
            email={email}
            editPath={editPath}
          />
        )),
    [searchQuery, startIndex, rowsPerPage]
  );

  useEffect(() => {
    if (searchQuery) {
      setCurrentPageNumber(initialPageNumber);
    }
  }, [searchQuery]);

  return (
    <div>
      <DataTableSearch onSearch={handleSearch} />
      <table>
        <tbody>{getRows()}</tbody>
      </table>
      <DataTablePagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={handleChangePageNumber}
      />
    </div>
  );
};

DataTable.propTypes = {
  rowsPerPage: PropTypes.number,
};

DataTable.defaultProps = {
  rowsPerPage: 40,
};
