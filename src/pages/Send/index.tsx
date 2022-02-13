import { FormEvent, useContext, useEffect, useState } from 'react';

import { ComicSelected } from '../../components/Character/CharactersSelected';
import { Map } from '../../components/Map';
import { CharacterContext } from '../../context';
import { getMap } from '../../services/ApiMaps';
import { Address, Container, Content, Form, ItemLink, ListCard } from './style';

interface ILocation {
  lat: number;
  lng: number;
}

export function Send() {
  const [location, setLocation] = useState<ILocation>({ lat: 0, lng: 0 });
  const [address, setAddress] = useState('');
  const [addressSend, setAddressSend] = useState('');
  const [zoom, setZoom] = useState(4);
  const [marker, setMarker] = useState(0);
  const zoomOfSearch = 16;
  const { charactersSelected, handleSelect } = useContext(CharacterContext);

  useEffect(() => {
    async function loader() {
      const response = await getMap();

      const [
        {
          geometry: { location },
        },
      ] = response.data.results;
      setLocation(location);
    }

    loader();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!address) return;

    const response = await getMap(address);

    const latLng = response.data.results[0].geometry.location;
    const formatAdrress = response.data.results[0].formatted_address;
    setAddressSend(formatAdrress);
    setLocation(latLng);
    setZoom(zoomOfSearch);
    setMarker(1);
  };

  const handleSearch = (address: string) => {
    setAddress(address);
  };

  const click = async (lat: number, lng: number) => {
    const clickLocation = { lat, lng };
    setLocation(clickLocation);
    setZoom(zoomOfSearch);
    setMarker(1);

    const response = await getMap(`${lat},${lng}`);

    const formatAdrress = response.data.results[0].formatted_address;
    setAddressSend(formatAdrress);
  };

  return (
    <Container>
      <ItemLink to="/">
        <p>Voltar</p>
      </ItemLink>
      <Content>
        <ListCard>
          {charactersSelected.length !== 0 ? (
            charactersSelected.map((character) => {
              return (
                <ComicSelected
                  key={character.id}
                  character={character}
                  handleSelect={handleSelect}
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
