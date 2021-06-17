import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { DataTablePaginationPageListItem } from './DataTablePaginationPage.styles';

export const DataTablePaginationPage = ({
  pageNumber,
  isActivePage,
  onChange,
}) => {
  const handleClick = useCallback(() => onChange(pageNumber), []);

  return (
    <DataTablePaginationPageListItem className="page-item">
      <button
        type="button"
        className={`page-link ${isActivePage && 'button-outline'}`}
        onClick={handleClick}
      >
        {pageNumber}
      </button>
    </DataTablePaginationPageListItem>
  );
};

DataTablePaginationPage.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  isActivePage: PropTypes.bool.isRequired,
};
