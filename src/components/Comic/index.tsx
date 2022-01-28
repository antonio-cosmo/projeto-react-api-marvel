import { useContext, useState } from 'react';

import { ComicContext } from '../../context';
import { IComic } from '../../types/IComic';
import { Card } from './style';

interface IComicProps {
  onOpenModal: () => void;
  clickedComic: (id: number) => void;
  index: number;
  comic: IComic;
}

export function Comic({
  comic,
  onOpenModal,
  clickedComic,
  index,
}: IComicProps) {
  const [isChecked, setIsChecked] = useState(false);
  const { handleSelect } = useContext(ComicContext);

  return (
    <Card imagem={comic.thumbnail}>
      <div
        id="imgComic"
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
