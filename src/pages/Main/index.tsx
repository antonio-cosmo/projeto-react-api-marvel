import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Comic } from '../../components/Comic';
import { ModalComic } from '../../components/ModalComic';
import { ComicContext } from '../../context';
import { getComics } from '../../services/ApiMarvel';
import { IComic } from '../../types/IComic';
import { Container, CardList, Content, Button } from './style';

export function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalComicId, setModalComicId] = useState(0);
  const [comics, setComics] = useState<IComic[]>([]);
  const [nullResponse, setNullResponse] = useState(false);
  const { debounceTitleComic } = useContext(ComicContext);
  const limit = 9;
  const newLimit = comics.length + limit;

  // Responsavel pelo o carregamneto dos quadrinhos quando a pagina é carregada ou quando é feita uma busca

  useEffect(() => {
    async function loader() {
      try {
        !debounceTitleComic.length
          ? setComics(await getComics(limit))
          : setComics(await getComics(limit, debounceTitleComic));
      } catch (e) {
        console.log('error');
      }
    }

    loader();
    return () => setComics([]);
  }, [debounceTitleComic]);

  // Responsavel por carregar mais quadrinhos
  const handleMore = useCallback(async () => {
    try {
      !debounceTitleComic
        ? setComics(await getComics(newLimit))
        : setComics(await getComics(newLimit, debounceTitleComic));
    } catch (e) {
      console.log('error');
    }
  }, [comics, debounceTitleComic]);

  // Pega as informações do quadrinho que sera mostrado no modal
  const clickedComic = useCallback(
    (index: number) => setModalComicId(index),
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
      comics.length ? setNullResponse(false) : setNullResponse(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [comics.length]);

  return (
    <Container>
      <ModalComic
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        comicId={comics[modalComicId]}
      />
      <Content>
        {!comics.length ? (
          nullResponse && <p id="msg">Quadrinhos não encontrado</p>
        ) : (
          <>
            <Link to="send">
              <Button type="button" onClick={handleMore}>
                {' '}
                Enviar-me{' '}
              </Button>
            </Link>
            <CardList>
              {comics.map((comic: IComic, index: number) => {
                return (
                  <Comic
                    key={comic.id}
                    comic={comic}
                    onOpenModal={handleOpenModal}
                    clickedComic={clickedComic}
                    index={index}
                  />
                );
              })}
            </CardList>

            <Button id="more" type="button" onClick={handleMore}>
              {' '}
              Carregar mais{' '}
            </Button>
          </>
        )}
      </Content>
    </Container>
  );
}
