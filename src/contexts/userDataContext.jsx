import { createContext } from 'react';
import PropTypes from 'prop-types';
import userData from '../userData.json';
import { userDataRowsMock } from '../mocks/userDataRowsMock';

export const UserDataContext = createContext(userDataRowsMock);
const { Provider } = UserDataContext;

export const UserDataContextProvider = ({ children }) => (
  <Provider value={userData}>{children}</Provider>
);

UserDataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
