import iconDelete from '../../assets/excluir.svg';
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
      <div id="imgComic">
        <button type="button" onClick={() => handleRemove(character.id)}>
          <img src={iconDelete} alt="excluir" />
        </button>
      </div>
      <p>{character.name}</p>
    </Card>
  );
}
