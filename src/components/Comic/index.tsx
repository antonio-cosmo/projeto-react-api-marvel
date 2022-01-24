import { Card } from './style';

interface IComicProps {
  onOpenModal: () => void;
  clickedComic: (id: number) => void;
  index: number;
  comic: {
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

export function Comic({
  comic,
  onOpenModal,
  clickedComic,
  index,
}: IComicProps) {
  return (
    <Card imagem={comic.thumbnail}>
      <div id="img" />
      <button
        id="details"
        type="button"
        onClick={() => {
          onOpenModal();
          clickedComic(index);
        }}
      >
        Detalhes
      </button>

      <p>{comic.title}</p>
    </Card>
  );
}
