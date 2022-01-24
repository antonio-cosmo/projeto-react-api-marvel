import styled from 'styled-components';

interface IUrlImageProps {
  imagem: {
    path: string;
    extension: string;
  };
}
const urlImg = ({ imagem }: IUrlImageProps) =>
  `${imagem.path}.${imagem.extension}`;

export const Contain = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  overflow: auto;
  position: relative;
  div#img {
    background: url(${urlImg}) no-repeat center;
    background-size: cover;
    width: 300px;
    margin: 1rem;
  }
  div#infor {
    width: 300px;
    padding: 1rem;

    p {
      & + h3 {
        margin-top: 1rem;
      }
    }
  }

  .closeModal {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 99;

    img {
      width: 40px;
    }
  }

  @media (min-width: 880px) {
    height: 400px;

    div#img {
      width: 200px;
      margin: 1rem;
    }
    div#infor {
      width: 200px;
      padding: 1rem;

      p {
        & + h3 {
          margin-top: 0.6rem;
        }
      }
    }

    .closeModal {
      img {
        width: 30px;
      }
    }
  }

  @media (min-width: 650px) and (max-width: 879px) {
    height: 350px;

    div#img {
      width: 200px;
      margin: 1rem;
    }
    div#infor {
      width: 200px;
      padding: 1rem;

      p {
        & + h3 {
          margin-top: 0.6rem;
        }
      }
    }

    .closeModal {
      img {
        width: 30px;
      }
    }
  }

  @media (min-width: 500px) and (max-width: 649px) {
    height: 300px;

    div#img {
      width: 180px;
      margin: 1rem;
    }
    div#infor {
      width: 200px;
      padding: 1rem;

      p {
        & + h3 {
          margin-top: 0.6rem;
        }
      }
    }

    .closeModal {
      img {
        width: 25px;
      }
    }
  }

  @media (min-width: 350px) and (max-width: 499px) {
    height: 200px;

    div#img {
      width: 100px;
      margin: 1rem;
    }
    div#infor {
      width: 100px;
      padding: 1rem;

      p {
        & + h3 {
          margin-top: 0.6rem;
        }
      }
    }

    .closeModal {
      img {
        width: 20px;
      }
    }
  }

  @media (max-width: 349px) {
    height: 150px;

    div#img {
      display: none;
      width: 100px;
      margin: 1rem;
    }
    div#infor {
      width: 90%;
      padding: 1rem;

      p {
        margin-top: 0.6rem;
      }

      p {
        & + h3 {
          margin-top: 0.6rem;
        }
      }
    }

    .closeModal {
      img {
        width: 20px;
      }
    }
  }
`;
