import { createContext, FormEvent, ReactNode, useState } from 'react';

interface IGenericContextProviderProps {
  children: ReactNode;
}

interface IGenericContextData {
  nameComic: string;
  handleSubmit: (event: FormEvent) => void;
  handleSearch: (name: string) => void;
  handleSelect: (comic: IComic) => void;
  comicsSelected: IComic[];
}

interface IComic {
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
export const GenericContext = createContext<IGenericContextData>(
  {} as IGenericContextData
);

export function GenericContexProvider({
  children,
}: IGenericContextProviderProps) {
  const [nameComic, setNameComic] = useState<string>('');
  const [comicsSelected, setComicsSelected] = useState<IComic[]>([]);

  const handleSelect = (comic: IComic) => {
    const nova = comicsSelected.filter((value) => value.id !== comic.id);
    if (comicsSelected.length > nova.length) {
      setComicsSelected(nova);
    } else {
      setComicsSelected([...comicsSelected, comic]);
    }
  };

  const handleSearch = (name: string) => {
    if (name.length >= 3) {
      setNameComic(name);
    } else {
      setNameComic('');
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <GenericContext.Provider
      value={{
        handleSelect,
        handleSearch,
        handleSubmit,
        nameComic,
        comicsSelected,
      }}
    >
      {children}
    </GenericContext.Provider>
  );
}
