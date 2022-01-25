import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { GenericContexProvider } from './context';
import { Routers } from './routers';
import { GlobalStyle } from './styles/GlobalStyle';

Modal.setAppElement('#root');

export function App() {
  return (
    <BrowserRouter>
      <GenericContexProvider>
        <Header />
        <Routers />
        <GlobalStyle />
      </GenericContexProvider>
    </BrowserRouter>
  );
}
