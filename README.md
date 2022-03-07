<h1 align="center">
  API MARVEL REACTJS
</h1>

Este projeto conecta-se com a API oficial da Marvel [https://developer.marvel.com/docs#](https://developer.marvel.com/docs#) e possui as seguintes funcionalidades;

### Funcionalidades

  - Criação de uma lista de cards para exibir os quadrinhos mostrando a imagem e o nome;

  - Possibilidade de buscar novos quadrinhos;

  - Selecionar quadrinhos para ser enviado

  - Pesquisar um endereço no mapa




### Principais Tecnlogias utilizadas

  - ReactJS utilizando create-react-app como base;

  - React-router-dom para navegação;

  - Axios para conectar na API;

  - Styled-Components para estilização;

  - React-modal para criação do modal

  - @react-google-maps/api para criar o mapa

#### A aplicação esta funcional e disponivel em:
[https://cosmo-api-marvel.vercel.app/](https://cosmo-api-marvel.vercel.app/)

#### Link do projeto no GitHub:
[https://github.com/antonio-cosmo/projeto-react-api-marvel](https://github.com/antonio-cosmo/projeto-react-api-marvel)

# Executando a aplicação

No diretório do projeto deve-se exeutar o comando  `npm install` para instalação das dependencias do projeto.

Antes de executar os comando `npm start`; no derietorio do projeto na pasta `src/services` nos arquivos de `ApiMaps.ts` e `ApiMarvel.ts` deve-se colocar suas chaves de API do google-maps e api-marvel. Sem as chaves o projeto não irar renderizar as informações.

Após o carregamento das dependencias e inserção da chaves de API; execute o comando: `npm start` :

O comando executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo em seu navegador.
A página será recarregada quando você fizer alterações.\
Você também pode ver erros de lint no console.

Com o comando: `npm run build`; O aplicativo é compilado para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho. O aplicativo está pronto para ser implantado!


