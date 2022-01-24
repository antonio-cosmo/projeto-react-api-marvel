// import closeImg from '../../../assets/botao-fechar.svg';
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
  // handleCloseModal(): void;
}

export function Description({ comicId }: IDescriptionProps) {
  // Abre as informacoes do quadrinho clicado

  return (
    <Contain imagem={comicId.thumbnail}>
      {/* <button className="closeModal" type="button" onClick={handleCloseModal}>
        <img src={closeImg} alt="fechar" />
      </button> */}

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
