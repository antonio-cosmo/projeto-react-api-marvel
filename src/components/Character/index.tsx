import { useContext, useState } from 'react';

import { CharacterContext } from '../../context';
import { ICharacter } from '../../types/ICharacter';
import { Card } from './style';

interface IComicProps {
  onOpenModal: () => void;
  clickedCharacter: (id: number) => void;
  index: number;
  character: ICharacter;
}

export function Character({
  character,
  onOpenModal,
  clickedCharacter,
  index,
}: IComicProps) {
  const [isChecked, setIsChecked] = useState(false);
  const { handleSelect } = useContext(CharacterContext);

  return (
    <Card imagem={character.thumbnail}>
      <div
        id="imgComic"
        onClick={() => {
          setIsChecked(!isChecked);
          handleSelect(character);
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
          clickedCharacter(index);
        }}
      >
        Detalhes
      </button>

      <p>{character.name}</p>
    </Card>
  );
}
