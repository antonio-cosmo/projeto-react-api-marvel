import { FormEvent, useEffect, useState } from 'react';

import { Map } from '../../components/Map';
import { ApiMaps } from '../../services/ApiMaps';
import { Address, Container, Content, Form } from './style';

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
        console.log(response.data.results);
      }
    );
  };

  return (
    <Container>
      <Content>
        <Address>
          <input
            type="text"
            placeholder="Enderço para envio"
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
