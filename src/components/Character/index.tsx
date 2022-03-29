import { useEffect, useState } from 'react';

import { useCharacters } from '../../hooks/useCharacters';
import { ICharacter } from '../../types';
import { Card, Content } from './style';

interface ICharacterProps {
  onOpenModal: () => void;
  clickedDetails: (id: number) => void;
  character: ICharacter;
  index: number;
}

export function Character({
  character,
  onOpenModal,
  clickedDetails,
  index,
}: ICharacterProps) {
  const [isChecked, setIsChecked] = useState(false);
  const { handleSelect, selectedCharacters } = useCharacters();

  useEffect(() => {
    const isSelected = selectedCharacters.find(
      (selectedCharacter) => selectedCharacter.id === character.id
    );
    if (isSelected) setIsChecked(true);
  }, []);

  return (
    <Content>
      <Card imagem={character.thumbnail}>
        <div
          id="imgCharacter"
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
              readOnly
            />
            <label htmlFor="checkbox" className="checkBox" />
          </div>
        </div>
        <button
          id="details"
          type="button"
          onClick={() => {
            onOpenModal();
            clickedDetails(index);
          }}
        >
          Detalhes
        </button>

        <p>{character.name}</p>
      </Card>
    </Content>
  );
}
