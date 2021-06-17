import { render } from 'react-dom';
import { UserDataContextProvider } from './contexts/userDataContext';
import { App } from './components/App/App';

render(
  <UserDataContextProvider>
    <App />
  </UserDataContextProvider>,
  document.getElementById('root')
);
