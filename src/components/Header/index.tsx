import logoMarvel from '../../assets/logomarvel.jpg';
import { useCharacters } from '../../hooks/useCharacters';
import { Container, Contain, Search, ItemLink } from './style';

export function Header() {
  const { handleSearch } = useCharacters();

  return (
    <Container>
      <Contain>
        <ItemLink to="/">
          <img src={logoMarvel} alt="logo marvel" />
        </ItemLink>
        <Search onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Pesquisar..."
            onChange={(event) => handleSearch(event.target.value)}
          />
        </Search>
      </Contain>
    </Container>
  );
}
