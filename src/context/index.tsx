import { createContext, FormEvent, ReactNode, useState } from 'react';

interface IHeaderContextProviderProps {
  children: ReactNode;
}

interface IHearderContextData {
  nameComic: string;
  handleSubmit: (event: FormEvent) => void;
  handleSearch: (name: string) => void;
}
export const HeaderContext = createContext<IHearderContextData>(
  {} as IHearderContextData
);

export function HeaderContextProvider({
  children,
}: IHeaderContextProviderProps) {
  const [nameComic, setNameComic] = useState<string>('');

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
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <HeaderContext.Provider value={{ handleSearch, handleSubmit, nameComic }}>
      {children}
    </HeaderContext.Provider>
  );
}
