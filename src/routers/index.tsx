import { Routes, Route } from 'react-router-dom';

import { Main } from '../pages/Main';
import { NotFound } from '../pages/NotFound';
import { Send } from '../pages/Send';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="send" element={<Send />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
