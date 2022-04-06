<h1 align="center">
  API MARVEL REACTJS
</h1>

Este projeto conecta-se com a API oficial da Marvel [https://developer.marvel.com/docs#](https://developer.marvel.com/docs#) e possui as seguintes funcionalidades;

### Funcionalidades

  - Campo de busca de personagens (o nome inserido do personagem deve ser em inglês);

  - Selecionar personagens para envio dos quadrinhos
  
  - Opção de detalhes do personagem

  - Pesquisar endereço de envio no mapa

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

Antes de iniciar aplicação, insira as chaves de API do google-maps e api-marvel nos arquivos `ApiMaps.ts` e `ApiMarvel.ts` que se encontra no derietorio `src/services`. 

Apos a inserção das chaves das API execute o comando `npm start` para executar a aplicação no modo desenvolvimento. A aplicação estara execuntado no seu navegador no endereço http://localhost:3000.

Com o comando `npm run build` a aplicação é compilada para produção e gerado um diretorio `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho. O aplicativo está pronto para ser implantado!


