export interface IComic {
  id: number;
  title: string;
  description: string;
  stories: { items: { name: string }[] };
  series: { name: string };
  thumbnail: {
    path: string;
    extension: string;
  };
}
