import { FormEvent } from 'react';

export interface IGenericContextData {
  debounceTitleComic: string;
  handleSubmit: (event: FormEvent) => void;
  handleSearch: (name: string) => void;
  handleSelect: (comic: IComic) => void;
  comicsSelected: IComic[];
}

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
