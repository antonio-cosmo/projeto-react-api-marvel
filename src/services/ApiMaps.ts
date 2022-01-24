import axios from 'axios';

const key = process.env.REACT_APP_GOOGLE_KEY;

export const ApiMaps = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/',
  params: {
    key,
  },
});
