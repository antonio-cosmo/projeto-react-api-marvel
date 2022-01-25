import { useContext, useState } from 'react';

import { GenericContext } from '../../context';
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

export function Comic({
  comic,
  onOpenModal,
  clickedComic,
  index,
}: IComicProps) {
  const [isChecked, setIsChecked] = useState(false);
  const { handleSelect } = useContext(GenericContext);

  return (
    <Card imagem={comic.thumbnail}>
      <div
        id="img"
        onClick={() => {
          setIsChecked(!isChecked);
          handleSelect(comic);
        }}
        aria-hidden="true"
      >
        <label htmlFor="checkded" className="checkbox-container">
          <input type="checkbox" checked={isChecked} readOnly />
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
