import { ICharacter } from '../../../types/ICharacter';
import { Contain } from './style';

interface IDescriptionProps {
  characterId: ICharacter;
}

export function Description({ characterId }: IDescriptionProps) {
  return (
    <Contain imagem={characterId.thumbnail}>
      <div id="img" />

      <div id="infor">
        <h3>{characterId.name}</h3>
        <p>
          {characterId.description ? characterId.description : 'Sem descrição'}
        </p>

        <h3>Historias:</h3>
        {characterId.stories.items.length > 0
          ? characterId.stories.items.map((historia) => (
              <p key={historia.name}>{historia.name}</p>
            ))
          : 'Sem descrição'}
        <h3>Series:</h3>
        {characterId.series.items.length > 0
          ? characterId.series.items.map((serie) => (
              <p key={serie.name}>{serie.name}</p>
            ))
          : 'Sem descrição'}
      </div>
    </Contain>
  );
}
