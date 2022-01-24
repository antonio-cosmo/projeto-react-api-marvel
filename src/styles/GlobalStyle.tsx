import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {

    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    /* font-family: 'Marvel', sans-serif; */
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  .react-modal-content{
    width: 700px;
    background-color: #202020 ;
    color: #ffffff;
    @media (min-width: 880px){
      width: 550px;
    }
    @media (min-width: 650px) and (max-width:879px){
      width: 480px;
    }
    @media (min-width: 500px) and (max-width:649px){
      max-width: 440px;
    }

    @media (min-width:350px) and (max-width:499px){
      max-width: 300px;
    }

    @media (max-width:349px){
      max-width: 250px;
    }
  }
  .react-modal-overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: rgba(255, 255, 255, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;

  }

`;
