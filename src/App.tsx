import { VFC } from 'react';
import { SiteLayout } from './layouts/SiteLayout';
import Router from './Router';
import { GlobalContextProvider } from '@/contexts/globalContext';

const App: VFC = () => {
  return (
    <GlobalContextProvider>
      <SiteLayout>
        <Router />
      </SiteLayout>
    </GlobalContextProvider>
  );
};

export default App;
