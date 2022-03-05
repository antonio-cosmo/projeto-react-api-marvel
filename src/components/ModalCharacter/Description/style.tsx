import styled from 'styled-components';

interface IUrlImageProps {
  imagem: {
    path: string;
    extension: string;
  };
}
const urlImg = ({ imagem }: IUrlImageProps) =>
  `${imagem.path.replace(/http/, 'https')}.${imagem.extension}`;

export const Contain = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  position: relative;
  div#img {
    background: url(${urlImg}) no-repeat center;
    background-size: cover;
    width: 40%;
    margin: 1rem;
  }
  div#infor {
    width: 60%;
    padding: 1rem;
    overflow: auto;
    &::-webkit-scrollbar-track {
      background-color: #f4f4f4;
    }
    &::-webkit-scrollbar {
      width: 9px;
    }
    &::-webkit-scrollbar-thumb {
      background: #acaaaa;
      border-radius: 5px;
    }

    h3 + p {
      margin-top: 0.5rem;
    }

    p + h3 {
      margin-top: 1rem;
    }
  }

  .closeModal {
    position: absolute;
    right: 0.8rem;
    top: 0.8rem;
    border: none;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (min-width: 880px) {
    height: 500px;

    div#img {
      /* width: 300px; */
      margin: 1rem;
    }
    div#infor {
      /* width: 500px; */
      padding: 1rem;

      h3 + p {
        margin-top: 0.6rem;
      }
      p + h3 {
        margin-top: 0.6rem;
      }
    }
  }

  @media (min-width: 650px) and (max-width: 879px) {
    height: 350px;

    div#img {
      /* width: 200px; */
      margin: 1rem;
    }
    div#infor {
      /* width: 200px; */
      padding: 1rem;

      h3 + p {
        margin-top: 0.6rem;
      }
      p + h3 {
        margin-top: 0.6rem;
      }
    }

    .closeModal {
      img {
        width: 14px;
      }
    }
  }

  @media (min-width: 500px) and (max-width: 649px) {
    height: 300px;

    div#img {
      /* width: 180px; */
      margin: 1rem;
    }
    div#infor {
      /* width: 200px; */
      padding: 1rem;

      h3 + p {
        margin-top: 0.3rem;
      }

      p + h3 {
        margin-top: 0.6rem;
      }
    }

    .closeModal {
      img {
        width: 12px;
      }
    }
  }

  @media (min-width: 350px) and (max-width: 499px) {
    height: 200px;

    div#img {
      /* width: 100px; */
      margin: 1rem;
    }
    div#infor {
      /* width: 100px; */
      padding: 1rem;

      h3 + p {
        margin-top: 0.3rem;
      }

      p + h3 {
        margin-top: 0.6rem;
      }
    }

    .closeModal {
      img {
        width: 10px;
      }
    }
  }

  @media (max-width: 349px) {
    height: 150px;
    div#img {
      display: none;
      /* margin: 1rem; */
    }
    div#infor {
      width: 100%;
      padding: 1rem;
      h3 + p {
        margin-top: 0.3rem;
      }

      p + h3 {
        margin-top: 0.6rem;
      }
    }

    .closeModal {
      img {
        width: 8px;
      }
    }
  }
`;
