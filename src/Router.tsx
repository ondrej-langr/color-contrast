import { VFC } from 'react';
import { Route, Routes } from 'react-router';
import FrontPage from './pages';

const Router: VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route
        path="/:backgroundHexColor/:textHexColor"
        element={<FrontPage />}
      />
    </Routes>
  );
};

export default Router;
