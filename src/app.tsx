// Navigation
import { RoutesProvider } from './navigation';
// Providers
import { AppProviders } from './providers';
// Components
import { NavigationBar } from './components';

const App: React.FC = () => {
  return (
    <AppProviders>
      <NavigationBar />
      <RoutesProvider />
    </AppProviders>
  );
};

export default App;
