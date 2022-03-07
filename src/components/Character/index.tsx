import { useEffect, useState } from 'react';

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
  const { handleSelect, selectedCharacters } = useCharacters();

  useEffect(() => {
    const characterSelectedIndex = selectedCharacters.findIndex(
      (element) => element.id === character.id
    );

    if (characterSelectedIndex >= 0) setIsChecked(true);
  }, []);
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
        <div className="fieldCheckBox">
          <input
            type="checkbox"
            className="field"
            id="checkbox"
            checked={isChecked}
          />
          <label htmlFor="checkbox" className="checkBox" />
        </div>
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
