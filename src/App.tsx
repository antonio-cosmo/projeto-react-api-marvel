import { useEffect, useState } from 'react';

import { Api } from './services/Api';
import { GlobalStyle } from './styles/GlobalStyle';

interface ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export function App() {
  const [loadCharacters, setLoadCharacters] = useState<ICharacter[]>([]);
  const limit = 8;

  useEffect(() => {
    async function loader() {
      try {
        const response = await Api.get('characters', { params: { limit } });
        const { results } = response.data.data;
        setLoadCharacters(results);
      } catch (e) {
        console.log(e);
      }
    }
    loader();
  }, []);
  console.log(loadCharacters);

  return <GlobalStyle />;
}
