import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { HeaderContextProvider } from './context';
import { Routers } from './routers';
import { GlobalStyle } from './styles/GlobalStyle';

Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <HeaderContextProvider>
        <Header />
        <Routers />
        <GlobalStyle />
      </HeaderContextProvider>
    </BrowserRouter>
  );
}

export default App;
