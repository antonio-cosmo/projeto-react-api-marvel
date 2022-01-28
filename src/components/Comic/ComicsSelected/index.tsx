import { IComic } from '../../../types/IComic';
import { Card } from './style';

interface IComicProps {
  handleSelect: (comic: IComic) => void;
  comic: IComic;
}

export function ComicSelected({ comic, handleSelect }: IComicProps) {
  return (
    <Card imagem={comic.thumbnail}>
      <div id="imgComic" />
      <p>{comic.title}</p>
      <button type="button" onClick={() => handleSelect(comic)}>
        remover
      </button>
    </Card>
  );
}
