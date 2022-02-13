import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Character } from '../../components/Character';
import { ModalCharacter } from '../../components/ModalCharacter';
import { CharacterContext } from '../../context';
import { getCharacters } from '../../services/ApiMarvel';
import { ICharacter } from '../../types/ICharacter';
import { Container, CardList, Content, Button } from './style';

export function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCharacterId, setModalCharacterId] = useState(0);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [total, setTotal] = useState(0);
  const [nullResponse, setNullResponse] = useState(false);
  const { debounceNameCharacter } = useContext(CharacterContext);
  const offset = 0;
  // const newLimit = comics.length + limit;

  // Responsavel pelo o carregamneto dos quadrinhos quando a pagina é carregada ou quando é feita uma busca

  useEffect(() => {
    async function loader() {
      try {
        let results;
        let total;
        if (!debounceNameCharacter.length) {
          [results, total] = await getCharacters(offset);
        } else {
          [results, total] = await getCharacters(offset, debounceNameCharacter);
        }
        setCharacters(results);
        setTotal(total);
      } catch (e) {
        console.log('error');
      }
    }

    loader();
    return () => setCharacters([]);
  }, [debounceNameCharacter]);

  // Responsavel por carregar mais quadrinhos
  const handleMore = useCallback(async () => {
    try {
      let results;
      let total;
      if (!debounceNameCharacter.length) {
        [results, total] = await getCharacters(characters.length);
      } else {
        [results, total] = await getCharacters(
          characters.length,
          debounceNameCharacter
        );
      }
      setCharacters([...characters, ...results]);
      setTotal(total);
    } catch (e) {
      console.log('error');
    }
  }, [characters, debounceNameCharacter]);

  // Pega as informações do quadrinho que sera mostrado no modal
  const clickedCharacter = useCallback(
    (index: number) => setModalCharacterId(index),
    []
  );

  // Abre o modal
  const handleOpenModal = useCallback(
    () => setModalIsOpen(!modalIsOpen),
    [modalIsOpen]
  );

  // Fecha o modal
  const handleCloseModal = useCallback(
    () => setModalIsOpen(!modalIsOpen),
    [modalIsOpen]
  );

  // responsavel pela mensagem na renderizacao condicional

  useEffect(() => {
    const timer = setTimeout(() => {
      characters.length ? setNullResponse(false) : setNullResponse(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [characters.length]);

  return (
    <Container>
      <ModalCharacter
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        characterId={characters[modalCharacterId]}
      />
      <Content>
        {!characters.length ? (
          nullResponse && <p id="msg">Personagem não encontrado</p>
        ) : (
          <>
            <Link to="send">
              <Button type="button" onClick={handleMore}>
                {' '}
                Enviar-me{' '}
              </Button>
            </Link>
            <CardList>
              {characters.map((comic: ICharacter, index: number) => {
                return (
                  <Character
                    key={comic.id}
                    character={comic}
                    onOpenModal={handleOpenModal}
                    clickedCharacter={clickedCharacter}
                    index={index}
                  />
                );
              })}
            </CardList>
            {total === characters.length ? (
              <></>
            ) : (
              <Button id="more" type="button" onClick={handleMore}>
                Carregar mais
              </Button>
            )}
          </>
        )}
      </Content>
    </Container>
  );
}
