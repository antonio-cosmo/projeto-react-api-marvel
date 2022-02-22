import { useContext } from 'react';

import logoMarvel from '../../assets/logomarvel.jpg';
import { CharacterContext } from '../../context';
import { Container, Contain, Form, ItemLink } from './style';

export function Header() {
  const { handleSubmit, handleSearch } = useContext(CharacterContext);
  return (
    <Container>
      <Contain>
        <ItemLink to="/">
          {/* <h1>MARVEL</h1> */}
          <img src={logoMarvel} alt="logo marvel" />
        </ItemLink>
        <Form onSubmit={handleSubmit} action="#">
          <input
            type="text"
            placeholder="Pesquisar..."
            onChange={(event) => handleSearch(event.target.value)}
          />
        </Form>
      </Contain>
    </Container>
  );
}
