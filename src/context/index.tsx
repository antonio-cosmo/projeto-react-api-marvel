import { createContext, FormEvent, ReactNode, useState } from 'react';

import { useDebounceInput } from '../hooks/useDebounceInput';
import { IComic, IGenericContextData } from './type';

interface IGenericContextProviderProps {
  children: ReactNode;
}

export const GenericContext = createContext<IGenericContextData>(
  {} as IGenericContextData
);

export function GenericContexProvider({
  children,
}: IGenericContextProviderProps) {
  const [titleComic, setTitleComic] = useState('');

  const [comicsSelected, setComicsSelected] = useState<IComic[]>([]);

  const debounceTitleComic = useDebounceInput(titleComic, 300);

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

  const handleSearch = (name: string) => setTitleComic(name);

  console.log(debounceTitleComic);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <GenericContext.Provider
      value={{
        debounceTitleComic,
        handleSelect,
        handleSearch,
        handleSubmit,
        comicsSelected,
      }}
    >
      {children}
    </GenericContext.Provider>
  );
}
