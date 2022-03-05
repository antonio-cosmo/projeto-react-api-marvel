import { useState } from 'react';

import { useCharacters } from '../../hooks/useCharacters';
import { ICharacter } from '../../types';
import { Card } from './style';

interface ICharacterProps {
  onOpenModal: () => void;
  clickedCharacter: (id: number) => void;
  character: ICharacter;
  index: number;
}

export function Character({
  character,
  onOpenModal,
  clickedCharacter,
  index,
}: ICharacterProps) {
  const [isChecked, setIsChecked] = useState(false);
  const { handleSelect } = useCharacters();

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
