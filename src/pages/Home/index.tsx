import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { Character } from '../../components/Character';
import { Loading } from '../../components/Loading';
import { ModalCharacter } from '../../components/ModalCharacter';
import { useCharacters } from '../../hooks/useCharacters';
import { Container, CardList, Content, Button } from './style';

export function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [characterInfor, setCharacterInfor] = useState(0);
  const { characters, handleMore, totalCharacters, removeLoading } =
    useCharacters();

  // Indice do personagem clicado no button detalhes
  const clickedCharacter = useCallback((index: number) => {
    setCharacterInfor(index);
  }, []);

  // Abrir o modal
  const handleOpenModal = useCallback(
    () => setModalIsOpen(!modalIsOpen),
    [modalIsOpen]
  );

  // Fechar o modal
  const handleCloseModal = useCallback(
    () => setModalIsOpen(!modalIsOpen),
    [modalIsOpen]
  );

  return (
    <Container>
      <ModalCharacter
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        characterInfor={characters[characterInfor]}
      />
      <Content>
        {characters.length > 0 && (
          <>
            <Link to="tosend">
              <Button type="button" onClick={handleMore}>
                Enviar-me
              </Button>
            </Link>
            <CardList>
              {characters.map((comic, index) => {
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
            {totalCharacters === characters.length ? (
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
