import { FormEvent, useContext, useEffect, useState } from 'react';

import { ComicSelected } from '../../components/Comic/ComicsSelected';
import { Map } from '../../components/Map';
import { HeaderContext } from '../../context';
import { ApiMaps } from '../../services/ApiMaps';
import { Address, Container, Content, Form, LinkItem, ListCard } from './style';

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
  const { comicsSelected, handleSelect } = useContext(HeaderContext);

  useEffect(() => {
    ApiMaps.get('json', { params: { address: 'brasil' } }).then((response) => {
      const [
        {
          geometry: { location },
        },
      ] = response.data.results;
      setLocation(location);
    });
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!address) return;

    const response = await ApiMaps.get('json', { params: { address } });

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

  const click = (lat: number, lng: number) => {
    const clickLocation = { lat, lng };
    setLocation(clickLocation);
    setZoom(zoomOfSearch);
    setMarker(1);
    ApiMaps.get('json', { params: { latlng: `${lat},${lng}` } }).then(
      (response) => {
        const formatAdrress = response.data.results[0].formatted_address;
        setAddressSend(formatAdrress);
      }
    );
  };

  return (
    <Container>
      <LinkItem to="/">
        <p>Voltar</p>
      </LinkItem>
      <Content>
        <ListCard>
          {comicsSelected.length !== 0 ? (
            comicsSelected.map((comic) => {
              return (
                <ComicSelected
                  key={comic.id}
                  comic={comic}
                  handleSelect={handleSelect}
                />
              );
            })
          ) : (
            <p>Selecione os quadrinos para envio</p>
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
      <Map click={click} marker={marker} location={location} zoom={zoom} />
    </Container>
  );
}
