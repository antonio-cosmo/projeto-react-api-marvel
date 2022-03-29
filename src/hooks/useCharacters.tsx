import {
  createContext,
  FormEvent,
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
  const [nameCharacter, setNameCharacter] = useState('');
  const [removeLoading, setRemoveLoading] = useState(false);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [selectedCharacters, setSelectedCharacters] = useState<ICharacter[]>(
    () => {
      const storaged = localStorage.getItem('@Selected:character');

      if (storaged) {
        return JSON.parse(storaged);
      }
      return [];
    }
  );

  const debounceNameCharacter = useDebounceInput(nameCharacter, 300);

  const storage = useCallback(<T,>(key: string, data: T) => {
    localStorage.setItem(key, JSON.stringify(data));
  }, []);

  // Carrega os personagens
  useEffect(() => {
    (async () => {
      try {
        const offset = 0;
        const [results, total] =
          debounceNameCharacter.length === 0
            ? await getCharacters(offset)
            : await getCharacters(offset, debounceNameCharacter);

        setCharacters(results);
        setTotalCharacters(total);
        setRemoveLoading(true);
      } catch (e) {
        console.log('error');
      }
    })();

    return () => {
      setCharacters([]);
      setRemoveLoading(false);
    };
  }, [debounceNameCharacter]);

  // Carregar mais quadrinhos
  const handleMore = useCallback(async () => {
    try {
      const nextOffset = characters.length;
      const [results, total] =
        debounceNameCharacter.length === 0
          ? await getCharacters(nextOffset)
          : await getCharacters(nextOffset, debounceNameCharacter);

      setCharacters((prevCharacters) => [...prevCharacters, ...results]);

      setTotalCharacters(total);
    } catch (e) {
      console.log('error');
    }
  }, [characters, debounceNameCharacter]);

  const handleSearch = (e: FormEvent) => {
    const el = e.target as HTMLInputElement;
    setNameCharacter(el.value);
  };

  const handleSelect = useCallback(
    (character: ICharacter) => {
      const updateCharacterSelected = [...selectedCharacters];

      const characterIndex = updateCharacterSelected.findIndex(
        (value) => value.id === character.id
      );

      if (characterIndex >= 0) {
        updateCharacterSelected.splice(characterIndex, 1);
      } else {
        updateCharacterSelected.push(character);
      }

      setSelectedCharacters(updateCharacterSelected);
      storage('@Selected:character', updateCharacterSelected);
    },
    [selectedCharacters]
  );

  const handleRemove = useCallback(
    (id: number) => {
      const updateCharacterSelected = selectedCharacters.filter(
        (value: ICharacter) => {
          return value.id !== id;
        }
      );
      setSelectedCharacters(updateCharacterSelected);
      storage('@Selected:character', updateCharacterSelected);
    },
    [selectedCharacters]
  );

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
