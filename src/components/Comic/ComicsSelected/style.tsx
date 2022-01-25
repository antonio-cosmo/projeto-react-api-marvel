import styled from 'styled-components';

interface IUrlImage {
  imagem: {
    path: string;
    extension: string;
  };
}
const urlImg = ({ imagem }: IUrlImage) => `${imagem.path}.${imagem.extension}`;

export const Card = styled.li`
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 300ms ease-in-out;
  margin-bottom: 2rem;

  div#imgComic {
    width: 100%;
    height: 250px;
    background: url(${urlImg}) no-repeat center;
    background-size: cover;
    border-radius: 5px;
  }

  p {
    align-self: center;
  }

  button {
    font-size: 1rem;
    font-weight: 700;
    padding: 0.2rem 1rem;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    background-color: #ff3333;
    &:hover {
      background-color: #ff9999;
    }
  }

  @media (min-width: 880px) and (max-width: 1019px) {
    width: 200px;
    margin-bottom: 1.5rem;
    &:hover {
      transform: translate(1%) scale(1.05);
    }
    div#img {
      height: 250px;
    }
  }

  @media (min-width: 650px) and (max-width: 879px) {
    width: 240px;
    margin-bottom: 1.5rem;
    &:hover {
      transform: translate(1%) scale(1.05);
    }
    div#img {
      height: 300px;
    }
  }

  @media (min-width: 500px) and (max-width: 649px) {
    width: 200px;
    margin-bottom: 1.2rem;
    &:hover {
      transform: translate(1%) scale(1.05);
    }
    div#img {
      height: 250px;
    }
  }

  @media (min-width: 350px) and (max-width: 499px) {
    width: 150px;
    &:hover {
      transform: translate(1%) scale(1.05);
    }
    div#img {
      height: 200px;
    }
  }

  @media (max-width: 349px) {
    width: 100px;
    &:hover {
      transform: translate(1%) scale(1.05);
    }
    div#img {
      height: 130px;
    }
  }
`;
