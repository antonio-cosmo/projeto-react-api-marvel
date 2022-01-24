import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Comic } from '../../components/Comic';
import { ModalComic } from '../../components/ModalComic';
import { HeaderContext } from '../../context';
import { Api } from '../../services/ApiMarvel';
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
  const limit = 8;
  const { nameComic } = useContext(HeaderContext);

  useEffect(() => {
    async function loader() {
      try {
        let response;
        let results;

        if (nameComic.length !== 0) {
          response = await Api.get('comics', {
            params: { limit, titleStartsWith: nameComic },
          });

          results = response.data.data.results;

          setComics(results);
        } else {
          response = await Api.get('comics', { params: { limit } });

          results = response.data.data.results;

          setComics(results);
        }
      } catch (e) {
        console.log(e);
      }
    }
    loader();
  }, [nameComic]);

  const handleMore = useCallback(async () => {
    try {
      if (!nameComic) {
        const limit = comics.length + 8;

        const response = await Api.get('comics', {
          params: {
            limit,
          },
        });

        const { results } = response.data.data;

        setComics(results);
      } else {
        const limit = comics.length + 8;

        const response = await Api.get('comics', {
          params: {
            limit,
            titleStartsWith: nameComic,
          },
        });

        const { results } = response.data.data;

        setComics(results);
      }
    } catch (e) {
      console.log(e);
    }
  }, [comics, nameComic]);

  const clickedComic = (id: number) => {
    setModalComicId(id);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Container>
      <ModalComic
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        comicId={comics[modalComicId]}
      />
      <Content>
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
          carregar mais{' '}
        </Button>
      </Content>
    </Container>
  );
}
