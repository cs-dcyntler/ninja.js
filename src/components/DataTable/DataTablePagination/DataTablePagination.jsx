import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { getTotalNumberOfPagesArray } from '../../../utils/getTotalNumberOfPagesArray';
import { DataTablePaginationPage } from '../DataTablePaginationPage/DataTablePaginationPage';
import { DataTablePaginationContainer } from './DataTablePagination.styles';

export const DataTablePagination = ({
  currentPageNumber,
  totalNumberOfPages,
  onChange,
}) => {
  const pages = useMemo(() =>
    getTotalNumberOfPagesArray(totalNumberOfPages).map((pageNumber) => {
      return (
        <DataTablePaginationPage
          key={pageNumber}
          isActivePage={pageNumber === currentPageNumber}
          pageNumber={pageNumber}
          onChange={onChange}
        />
      );
    })
  );

  if (!pages.length) {
    return null;
  }

  return <DataTablePaginationContainer>{pages}</DataTablePaginationContainer>;
};

DataTablePagination.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  totalNumberOfPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
