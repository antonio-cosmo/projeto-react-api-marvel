import { Routes, Route } from 'react-router-dom';

import { Page404 } from '../pages/Page404';

export function Routers() {
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
