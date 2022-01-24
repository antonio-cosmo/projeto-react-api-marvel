import { Routes, Route } from 'react-router-dom';

import { Main } from '../pages/Main';
import { Page404 } from '../pages/Page404';
import { Send } from '../pages/Send';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="send" element={<Send />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
