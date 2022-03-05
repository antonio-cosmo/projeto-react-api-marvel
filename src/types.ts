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

export interface ICharacterContextData {
  selectedCharacters: ICharacter[];
  characters: ICharacter[];
  removeLoading: boolean;
  totalCharacters: number;
  handleSearch: (name: string) => void;
  handleSelect: (character: ICharacter) => void;
  handleRemove: (id: number) => void;
  handleMore: () => Promise<void>;
}
