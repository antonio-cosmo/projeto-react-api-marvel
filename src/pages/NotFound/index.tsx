import { Link } from 'react-router-dom';

import { Container } from './style';

export function NotFound() {
  return (
    <Container>
      <h1>Page 404</h1>

      <p>Opps! Desculpe, mas a página que procura não existe!</p>
      <Link to="/">
        <button type="button">Voltar para à página inicial</button>
      </Link>
    </Container>
  );
}
