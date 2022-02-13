import { ICharacter } from '../../../types/ICharacter';
import { Card } from './style';

interface IComicProps {
  handleSelect: (character: ICharacter) => void;
  character: ICharacter;
}

export function ComicSelected({ character, handleSelect }: IComicProps) {
  return (
    <Card imagem={character.thumbnail}>
      <div id="imgComic" />
      <p>{character.name}</p>
      <button type="button" onClick={() => handleSelect(character)}>
        remover
      </button>
    </Card>
  );
}
