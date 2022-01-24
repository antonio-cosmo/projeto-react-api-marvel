import axios from 'axios';

const key = process.env.REACT_APP_GOOGLE_KEY; // use sua chave google aqui ou crie um arquivo .env e crie variaveis de ambiente

export const ApiMaps = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/',
  params: {
    key,
  },
});
