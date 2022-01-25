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
    width: 160px;
    margin-bottom: 1.5rem;
    div#imgComic {
      height: 200px;
    }
  }

  @media (min-width: 650px) and (max-width: 879px) {
    width: 140px;
    margin-bottom: 1.5rem;
    div#imgComic {
      height: 180px;
    }
  }

  @media (min-width: 500px) and (max-width: 649px) {
    width: 120px;
    margin-bottom: 1.2rem;
    div#imgComic {
      height: 150px;
    }
  }

  @media (min-width: 350px) and (max-width: 499px) {
    width: 100px;
    div#imgComic {
      height: 120px;
    }
  }

  @media (max-width: 349px) {
    width: 80px;
    div#imgComic {
      height: 100px;
    }
    p {
      font-size: 12px;
    }
  }
`;
