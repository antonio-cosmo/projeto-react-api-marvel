import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { Character } from '../../components/Character';
import { Loading } from '../../components/Loading';
import { ModalCharacter } from '../../components/ModalCharacter';
import { useCharacters } from '../../hooks/useCharacters';
import { CardList, Content, Button } from './style';

export function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [characterIndex, setCharacterIndex] = useState(0);
  const { characters, handleMore, totalCharacters, removeLoading } =
    useCharacters();

  // Indice do personagem clicado no button detalhes
  const clickedDetails = useCallback((index: number) => {
    setCharacterIndex(index);
  }, []);

  // fechar ou abrir modal
  const handleToggleModal = useCallback(
    () => setModalIsOpen((prevModalIsOpen) => !prevModalIsOpen),
    []
  );

  return (
    <main>
      <ModalCharacter
        isOpen={modalIsOpen}
        onRequestClose={handleToggleModal}
        characterInfor={characters[characterIndex]}
      />
      <Content>
        {characters.length > 0 && (
          <>
            <Link to="tosend">
              <Button type="button">Enviar-me</Button>
            </Link>
            <CardList>
              {characters.map((character, index) => {
                return (
                  <Character
                    key={character.id}
                    character={character}
                    onOpenModal={handleToggleModal}
                    clickedDetails={clickedDetails}
                    index={index}
                  />
                );
              })}
            </CardList>
            {characters.length >= totalCharacters ? (
              <div>
                <Button id="more" type="button" onClick={handleMore} disabled>
                  Carregar mais
                </Button>
              </div>
            ) : (
              <div>
                <Button id="more" type="button" onClick={handleMore}>
                  Carregar mais
                </Button>
              </div>
            )}
          </>
        )}
        {removeLoading && characters.length === 0 && (
          <p id="msg">Personagem não encontrado</p>
        )}
      </Content>
      {!removeLoading && <Loading />}
    </main>
  );
}
