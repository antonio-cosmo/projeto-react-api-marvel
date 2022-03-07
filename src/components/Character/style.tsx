import styled from 'styled-components';

interface IUrlImage {
  imagem: {
    path: string;
    extension: string;
  };
}
const urlImg = ({ imagem }: IUrlImage) =>
  `${imagem.path.replace(/http/, 'https')}.${imagem.extension}`;

export const Card = styled.li`
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 300ms ease-in-out;
  margin-bottom: 2rem;

  div#imgComic {
    width: 100%;
    height: 300px;
    background: url(${urlImg}) no-repeat center;
    background-size: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;

    .field {
      display: none;
    }
    .fieldCheckBox {
      position: relative;
    }
    .fieldCheckBox .field:not(:checked) + .checkBox::before {
      display: none;
    }

    .fieldCheckBox .field:checked + .checkBox::before {
      content: '✔';
      width: 20px;
      height: 20px;
      color: #fff;
      background-color: #ff3333;
      border-top-left-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &:hover {
    transform: translate(1%) scale(1.05);
  }

  #details {
    font-size: 1rem;
    font-weight: 700;
    background-color: #202020;
    color: #fff;
    border: 0;
    padding: 0 2rem;
    height: 3rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    &:hover {
      background-color: #666666;
    }
  }

  p {
    align-self: center;
  }

  @media (min-width: 880px) and (max-width: 1019px) {
    width: 200px;
    margin-bottom: 1.5rem;
    &:hover {
      transform: translate(1%) scale(1.05);
    }
    div#imgComic {
      height: 250px;
    }
  }

  @media (min-width: 650px) and (max-width: 879px) {
    width: 240px;
    margin-bottom: 1.5rem;
    &:hover {
      transform: translate(1%) scale(1.05);
    }
    div#imgComic {
      height: 300px;
    }
  }

  @media (min-width: 500px) and (max-width: 649px) {
    width: 200px;
    margin-bottom: 1.2rem;
    &:hover {
      transform: translate(1%) scale(1.05);
    }
    div#imgComic {
      height: 250px;
    }
  }

  @media (min-width: 350px) and (max-width: 499px) {
    width: 150px;
    &:hover {
      transform: translate(1%) scale(1.05);
    }
    div#imgComic {
      height: 200px;
    }
  }

  @media (max-width: 349px) {
    width: 100px;
    &:hover {
      transform: translate(1%) scale(1.05);
    }
    div#imgComic {
      height: 130px;
    }
  }
`;
