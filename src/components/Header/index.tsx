import { useContext } from 'react';

// import logoMarvel from '../../assets/logomarvel.jpg';
import { GenericContext } from '../../context';
import { Container, Contain, Form, ItemLink } from './style';

export function Header() {
  const { handleSubmit, handleSearch } = useContext(GenericContext);
  return (
    <Container>
      <Contain>
        <ItemLink to="/">
          <h1>MARVEL</h1>
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
