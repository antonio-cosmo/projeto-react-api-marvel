import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { ToSend } from './pages/ToSend';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="tosend" element={<ToSend />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
