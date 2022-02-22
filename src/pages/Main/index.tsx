import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Character } from '../../components/Character';
import { Loading } from '../../components/Loading';
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
  const [removeLoading, setRemoveLoading] = useState(false);
  const { debounceNameCharacter } = useContext(CharacterContext);
  const offset = 0;

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
        setRemoveLoading(true);
      } catch (e) {
        console.log('error');
      }
    }

    loader();
    return () => {
      setCharacters([]);
      setRemoveLoading(false);
    };
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

  return (
    <Container>
      <ModalCharacter
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        characterId={characters[modalCharacterId]}
      />
      <Content>
        {characters.length > 0 && (
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
        {!removeLoading && <Loading />}
        {removeLoading && characters.length === 0 && (
          <p id="msg">Personagem não encontrado</p>
        )}
      </Content>
    </Container>
  );
}
