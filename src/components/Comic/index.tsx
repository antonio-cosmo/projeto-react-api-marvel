import { useState } from 'react';

import { Card } from './style';

interface IComicProps {
  onOpenModal: () => void;
  clickedComic: (id: number) => void;
  index: number;
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
interface IcomicData {
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
export function Comic({
  comic,
  onOpenModal,
  clickedComic,
  index,
}: IComicProps) {
  const [comics, setComics] = useState<IcomicData[]>([]);
  const [isAt, setIsAt] = useState(false);

  function handleSelect() {
    setIsAt(!isAt);
    setComics([...comics, comic]);
  }
  console.log(comics);
  return (
    <Card imagem={comic.thumbnail}>
      <div id="img" onClick={() => handleSelect()} aria-hidden="true">
        <label htmlFor="checkded" className="checkbox-container">
          <input type="checkbox" checked={isAt} readOnly />
        </label>
      </div>
      <button
        id="details"
        type="button"
        onClick={() => {
          onOpenModal();
          clickedComic(index);
        }}
      >
        Detalhes
      </button>

      <p>{comic.title}</p>
    </Card>
  );
}
