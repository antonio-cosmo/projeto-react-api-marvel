import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  background-color: #202020;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

export const Contain = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: red;
    font-weight: 700;
  }

  @media (max-width: 880px) {
    max-width: 860px;
  }

  @media (min-width: 650px) and (max-width: 879px) {
    max-width: 650px;
  }

  @media (min-width: 500px) and (max-width: 649px) {
    max-width: 500px;
  }
  @media (min-width: 350px) and (max-width: 499px) {
    max-width: 350px;
  }

  @media (max-width: 349px) {
    max-width: 345px;
  }
`;

export const Search = styled.form`
  input {
    padding: 0.6rem;
    width: 18rem;
    border: none;
    outline: none;
    font-size: 1.2rem;
    border-radius: 5px;

    @media (min-width: 500px) and (max-width: 649px) {
      width: 12rem;
    }

    @media (min-width: 350px) and (max-width: 499px) {
      width: 10rem;
    }

    @media (max-width: 349px) {
      width: 8rem;
    }
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  img {
    width: 100px;
  }
  @media (max-width: 649px) {
    h1 {
      font-size: 28px;
    }
  }
`;
