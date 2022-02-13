import { createContext, FormEvent, ReactNode, useState } from 'react';

import { useDebounceInput } from '../hooks/useDebounceInput';
import { ICharacter } from '../types/ICharacter';

interface ICharacterContextProviderProps {
  children: ReactNode;
}

export interface ICharacterContextData {
  debounceNameCharacter: string;
  handleSubmit: (event: FormEvent) => void;
  handleSearch: (name: string) => void;
  handleSelect: (character: ICharacter) => void;
  charactersSelected: ICharacter[];
}

export const CharacterContext = createContext<ICharacterContextData>(
  {} as ICharacterContextData
);

export function CharacterContexProvider({
  children,
}: ICharacterContextProviderProps) {
  const [nameCharacter, setNameCharacter] = useState('');
  const [charactersSelected, setCharactersSelected] = useState<ICharacter[]>(
    []
  );

  const debounceNameCharacter = useDebounceInput(nameCharacter, 300);

  const handleSearch = (name: string) => setNameCharacter(name);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  };

  const handleSelect = (character: ICharacter) => {
    const auxCharactersSelected = charactersSelected.filter(
      (value) => value.id !== character.id
    );

    if (charactersSelected.length > auxCharactersSelected.length) {
      setCharactersSelected(auxCharactersSelected);
    } else {
      setCharactersSelected([...charactersSelected, character]);
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        debounceNameCharacter,
        handleSelect,
        handleSearch,
        handleSubmit,
        charactersSelected,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
