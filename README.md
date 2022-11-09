# Mervel Characters

Lista e mostra detalhes dos personagens da marvel.

Este projeto conecta-se com a API oficial da Marvel [https://developer.marvel.com/docs#](https://developer.marvel.com/docs#) e possui as seguintes funcionalidades;


## Demonstração

[https://personagensmarvel.vercel.app](https://personagensmarvel.vercel.app)


## Funcionalidades

  - Campo de busca de personagens (o nome inserido do personagem deve ser em inglês);

  - Seleção de personagens
  
  - Opção de detalhes do personagem

  - Pesquisar endereço de envio no mapa



## Rodando localmente

Clone o projeto

```bash
  https://github.com/antonio-cosmo/appCashFlow.git
```

Entre no diretório do projeto

```bash
  cd appCashFlow

```

Instale as dependências

```bash
  npm install ou yarn add
```

Antes de iniciar aplicação, insira as chaves de API do google-maps e api-marvel nos arquivos `ApiMaps.ts` e `ApiMarvel.ts` que se encontra no derietorio `src/services`. 

Inicie a aplicação no modo de desenvolvimento

```bash
  npm run dev ou yarn dev
```


## Stack utilizada

  - ReactJS utilizando vite como base;

  - React-router-dom para navegação;

  - Axios para conectar na API;

  - Styled-Components para estilização;

  - React-modal para criação do modal

  - @react-google-maps/api para criar o mapa


