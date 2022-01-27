import { Contain } from './style';

interface IDescriptionProps {
  comicId: {
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

export function Description({ comicId }: IDescriptionProps) {
  return (
    <Contain imagem={comicId.thumbnail}>
      <div id="img" />

      <div id="infor">
        <h3>{comicId.title}</h3>
        <p>{comicId.description ? comicId.description : 'Sem descrição'}</p>

        <h3>Historias:</h3>
        {comicId.stories.items.map((historia) => {
          return <p key={historia.name}>{historia.name}</p>;
        })}
        <h3>Serie:</h3>
        <p>{comicId.series.name}</p>
      </div>
    </Contain>
  );
}
