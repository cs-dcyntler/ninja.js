import { DataTable } from '../DataTable/DataTable';
import { AppContainer } from './App.styles';

export const App = () => (
  <AppContainer className="container">
    <DataTable locale="da" rowsPerPage={5} />
  </AppContainer>
);
