export const calculateTotalNumberOfPages = (rows, rowsPerPage) => {
  if (!rowsPerPage) return 0;
  return Math.ceil(rows.length / rowsPerPage);
};
