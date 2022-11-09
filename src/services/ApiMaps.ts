import axios from 'axios';

const key = import.meta.env.VITE_APP_GOOGLE_KEY; // use sua chave google aqui ou crie um arquivo .env e crie variaveis de ambiente

export const ApiMaps = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/',
  params: {
    key,
  },
});

export async function getMap(address = 'brasil', latlng?: string) {
  const response = await ApiMaps.get('json', { params: { address, latlng } });

  return response.data;
}
