export const getTotalNumberOfPagesArray = (totalNumberOfPages) =>
  Array.from(Array(totalNumberOfPages).keys()).map((val) => val + 1);
