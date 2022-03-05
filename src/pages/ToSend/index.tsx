import { FormEvent, useEffect, useState } from 'react';

import { CharacterSelected } from '../../components/CharactersSelected';
import { Map } from '../../components/Map';
import { useCharacters } from '../../hooks/useCharacters';
import { getMap } from '../../services/ApiMaps';
import { Address, Container, Content, Form, ItemLink, ListCard } from './style';

interface ILocation {
  lat: number;
  lng: number;
}

export function ToSend() {
  const [location, setLocation] = useState<ILocation>({ lat: 0, lng: 0 });
  const [address, setAddress] = useState('');
  const [addressSend, setAddressSend] = useState('');
  const [zoom, setZoom] = useState(4);
  const [marker, setMarker] = useState(false);
  const zoomOfSearch = 16;
  const { selectedCharacters, handleRemove } = useCharacters();
  useEffect(() => {
    async function loader() {
      const response = await getMap();

      const [
        {
          geometry: { location },
        },
      ] = response.results;
      setLocation(location);
    }

    loader();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!address) return;

    const response = await getMap(address);
    console.log(response.results[0].formatted_address);
    const latLng = response.results[0].geometry.location;
    const formatAdrress = response.results[0].formatted_address;
    setAddressSend(formatAdrress);
    setLocation(latLng);
    setZoom(zoomOfSearch);
    setMarker(true);
  };

  const handleSearch = (address: string) => {
    setAddress(address);
  };

  const click = async (lat: number, lng: number) => {
    const clickLocation = { lat, lng };
    setLocation(clickLocation);
    setZoom(zoomOfSearch);
    setMarker(true);

    const response = await getMap(`${lat},${lng}`);

    const formatAdrress = response.results[0].formatted_address;
    setAddressSend(formatAdrress);
  };

  return (
    <Container>
      <ItemLink to="/">
        <p>Voltar</p>
      </ItemLink>
      <Content>
        <ListCard>
          {selectedCharacters.length !== 0 ? (
            selectedCharacters.map((character) => {
              return (
                <CharacterSelected
                  key={character.id}
                  character={character}
                  handleRemove={handleRemove}
                />
              );
            })
          ) : (
            <span>Selecione os quadrinhos para envio</span>
          )}
        </ListCard>
        <Address>
          <p>Endereço para envio:</p>
          <input
            type="text"
            placeholder="Endereço para envio"
            defaultValue={addressSend}
          />
        </Address>
      </Content>

      <Form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquisar endereço..."
          onChange={(event) => handleSearch(event.target.value)}
        />
        <button type="submit">Buscar</button>
      </Form>
      <Map clickMap={click} marker={marker} location={location} zoom={zoom} />
    </Container>
  );
}
