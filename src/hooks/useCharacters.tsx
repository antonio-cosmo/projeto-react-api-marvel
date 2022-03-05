import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getCharacters } from '../services/ApiMarvel';
import { ICharacter, ICharacterContextData } from '../types';
import { useDebounceInput } from './useDebounceInput';

interface ICharacterContextProviderProps {
  children: ReactNode;
}

const CharacterContext = createContext<ICharacterContextData>(
  {} as ICharacterContextData
);

export function CharacterContexProvider({
  children,
}: ICharacterContextProviderProps) {
  const [selectedCharacters, setSelectedCharacters] = useState<ICharacter[]>(
    () => {
      const storaged = localStorage.getItem('Character:selected');

      if (storaged) {
        return JSON.parse(storaged);
      }
      return [];
    }
  );
  const [nameCharacter, setNameCharacter] = useState('');
  const [removeLoading, setRemoveLoading] = useState(false);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const offset = 0;
  const debounceNameCharacter = useDebounceInput(nameCharacter, 300);

  // Responsavel pelo o carregamneto dos quadrinhos quando a pagina é carregada ou quando é feita uma busca
  useEffect(() => {
    async function loader() {
      try {
        let results;
        let total;
        if (!debounceNameCharacter.length) {
          [results, total] = await getCharacters(offset);
        } else {
          [results, total] = await getCharacters(offset, debounceNameCharacter);
        }
        setCharacters(results);
        setTotalCharacters(total);
        setRemoveLoading(true);
      } catch (e) {
        console.log('error');
      }
    }

    loader();
    return () => {
      setCharacters([]);
      setRemoveLoading(false);
    };
  }, [debounceNameCharacter]);

  // Responsavel por carregar mais quadrinhos
  const handleMore = useCallback(async () => {
    try {
      let results;
      let total;
      if (!debounceNameCharacter.length) {
        [results, total] = await getCharacters(characters.length);
      } else {
        [results, total] = await getCharacters(
          characters.length,
          debounceNameCharacter
        );
      }
      setCharacters([...characters, ...results]);
      setTotalCharacters(total);
    } catch (e) {
      console.log('error');
    }
  }, [characters, debounceNameCharacter]);

  const handleSearch = (name: string) => setNameCharacter(name);

  const handleSelect = (character: ICharacter) => {
    const updateCharacterSelected = [...selectedCharacters];

    const characterIndex = updateCharacterSelected.findIndex(
      (value) => value.id === character.id
    );
    if (characterIndex >= 0) {
      updateCharacterSelected.splice(characterIndex, 1);

      setSelectedCharacters(updateCharacterSelected);

      localStorage.setItem(
        'Character:selected',
        JSON.stringify(updateCharacterSelected)
      );
    } else {
      setSelectedCharacters([...updateCharacterSelected, character]);

      localStorage.setItem(
        'Character:selected',
        JSON.stringify([...updateCharacterSelected, character])
      );
    }
  };

  const handleRemove = (id: number) => {
    const updateCharacterSelected = [...selectedCharacters];

    const characterIndex = updateCharacterSelected.findIndex(
      (value) => value.id === id
    );
    if (characterIndex >= 0) {
      updateCharacterSelected.splice(characterIndex, 1);
      setSelectedCharacters(updateCharacterSelected);

      localStorage.setItem(
        'Character:selected',
        JSON.stringify(updateCharacterSelected)
      );
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        selectedCharacters,
        characters,
        removeLoading,
        totalCharacters,
        handleSelect,
        handleSearch,
        handleRemove,
        handleMore,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacters() {
  const context = useContext(CharacterContext);
  return context;
}
