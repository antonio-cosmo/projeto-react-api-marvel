import { createContext, FormEvent, ReactNode, useState } from 'react';

import { useDebounceInput } from '../hooks/useDebounceInput';
import { IComic } from '../types/IComic';

interface IComicContextProviderProps {
  children: ReactNode;
}

export interface IComicContextData {
  debounceTitleComic: string;
  handleSubmit: (event: FormEvent) => void;
  handleSearch: (name: string) => void;
  handleSelect: (comic: IComic) => void;
  comicsSelected: IComic[];
}

export const ComicContext = createContext<IComicContextData>(
  {} as IComicContextData
);

export function ComicContexProvider({ children }: IComicContextProviderProps) {
  const [titleComic, setTitleComic] = useState('');
  const [comicsSelected, setComicsSelected] = useState<IComic[]>([]);

  const debounceTitleComic = useDebounceInput(titleComic, 300);

  const handleSearch = (name: string) => setTitleComic(name);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  };

  const handleSelect = (comic: IComic) => {
    const auxComicsSelected = comicsSelected.filter(
      (value) => value.id !== comic.id
    );

    if (comicsSelected.length > auxComicsSelected.length) {
      setComicsSelected(auxComicsSelected);
    } else {
      setComicsSelected([...comicsSelected, comic]);
    }
  };

  return (
    <ComicContext.Provider
      value={{
        debounceTitleComic,
        handleSelect,
        handleSearch,
        handleSubmit,
        comicsSelected,
      }}
    >
      {children}
    </ComicContext.Provider>
  );
}
