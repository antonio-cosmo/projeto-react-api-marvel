import axios from 'axios';
import md5 from 'md5';

// as chaves forao deixadas no projeto para que se possa rodar a aplicação sem precisar se cadastrar na api da marvel.
// assim que for avaliado o projeto irei remover as chaves

const publicKey = 'PUBLIC_KEY';

const privateKey = 'PRIVATE_KEY';

const ts = new Date().toString;

const hash = md5(ts + privateKey + publicKey);

// parametros nessarios para se conectar a api
export const Api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});
