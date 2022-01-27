import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Comic } from '../../components/Comic';
import { ModalComic } from '../../components/ModalComic';
import { GenericContext } from '../../context';
import { getComics } from '../../services/ApiMarvel';
import { Container, CardList, Content, Button } from './style';

interface IComic {
  id: number;
  title: string;
  description: string;
  stories: { items: { name: string }[] };
  series: { name: string };
  thumbnail: {
    path: string;
    extension: string;
  };
}

export function Main() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalComicId, setModalComicId] = useState<number>(0);
  const [comics, setComics] = useState<IComic[]>([]);
  const [nullResonse, setNullResponse] = useState(false);
  const limit = 9;
  const { debounceTitleComic } = useContext(GenericContext);

  // Responsavel pelo o carregamneto dos quadrinhos quando a pagina é carregada ou quando é feita uma busca
  useEffect(() => {
    async function loader() {
      try {
        let response;
        let results;

        if (debounceTitleComic.length !== 0) {
          response = await getComics(limit, debounceTitleComic);

          results = response.data.data.results;

          setComics(results);
        } else {
          response = await getComics(limit);

          results = response.data.data.results;

          setComics(results);
        }
      } catch (e) {
        console.log(e);
      }
    }
    loader();

    return () => {
      console.log('"unmount"');
    };
  }, [debounceTitleComic]);

  // Responsavel por carregar mais quadrinhos
  const handleMore = useCallback(async () => {
    try {
      if (!debounceTitleComic) {
        const limit = comics.length + 9;

        const response = await getComics(limit);

        const { results } = response.data.data;

        setComics(results);
      } else {
        const limit = comics.length + 9;

        const response = await getComics(limit, debounceTitleComic);

        const { results } = response.data.data;

        setComics(results);
      }
    } catch (e) {
      console.log(e);
    }
  }, [comics, debounceTitleComic]);

  // Pega as informações do quadrinho que sera mostrado no modal
  const clickedComic = useCallback((id: number) => {
    setModalComicId(id);
  }, []);

  // Abre o modal
  const handleOpenModal = useCallback(() => {
    setModalIsOpen(true);
  }, []);

  // Fecha o modal
  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  // responsavel pela renderização condicional
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!comics.length) {
        setNullResponse(true);
      } else {
        setNullResponse(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [comics]);

  return (
    <Container>
      <ModalComic
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        comicId={comics[modalComicId]}
      />
      <Content>
        {!comics.length ? (
          nullResonse && <p>Quadrinhos não encontrado</p>
        ) : (
          <>
            <Link to="send">
              <Button id="more" type="button" onClick={handleMore}>
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
