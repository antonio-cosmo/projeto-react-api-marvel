import { Card } from './style';

interface IComicProps {
  handleSelect: (comic: IComic) => void;
  comic: {
    id: number;
    title: string;
    description: string;
    stories: { items: { name: string }[] };
    series: { name: string };
    thumbnail: {
      path: string;
      extension: string;
    };
  };
}

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
