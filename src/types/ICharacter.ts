export interface ICharacter {
  id: number;
  name: string;
  description: string;
  stories: { items: { name: string }[] };
  series: { items: { name: string }[] };
  thumbnail: {
    path: string;
    extension: string;
  };
}
