import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { CharacterContexProvider } from './hooks/useCharacters';
import { Routers } from './routes';
import { GlobalStyle } from './styles/GlobalStyle';

Modal.setAppElement('#root');

export function App() {
  return (
    <BrowserRouter>
      <CharacterContexProvider>
        <Header />
        <Routers />
        <GlobalStyle />
      </CharacterContexProvider>
    </BrowserRouter>
  );
}
