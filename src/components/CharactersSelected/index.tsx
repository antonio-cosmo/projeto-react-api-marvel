import { ICharacter } from '../../types';
import { Card } from './style';

interface ICharacterProps {
  handleRemove: (id: number) => void;
  character: ICharacter;
}

export function CharacterSelected({
  character,
  handleRemove,
}: ICharacterProps) {
  return (
    <Card imagem={character.thumbnail}>
      <div id="imgComic" />
      <p>{character.name}</p>
      <button type="button" onClick={() => handleRemove(character.id)}>
        remover
      </button>
    </Card>
  );
}
