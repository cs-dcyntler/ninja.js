export const searchFilter =
  (searchQuery) =>
  ({ name, email }) => {
    if (searchQuery) {
      return (
        name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
        (email &&
          email.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
      );
    }

    return true;
  };
