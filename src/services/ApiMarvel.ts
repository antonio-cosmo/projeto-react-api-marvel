import axios from 'axios';
import md5 from 'md5';

// use suas chaves publica e privada aqui ou crie um arquivo .env e crie variaveis de ambiente
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const ts = new Date().toString;

const hash = md5(ts + privateKey! + publicKey!);

const Api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export async function getCharacters(offset: number, nameStartsWith?: string) {
  const response = await Api.get('characters', {
    params: { offset, limit: 12, nameStartsWith },
  });
  const { results, total } = response.data.data;

  return [results, total];
}

