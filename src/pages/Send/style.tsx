import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1020px;
  margin: 0 auto;
  padding: 2.4rem 1rem;
  margin-top: 6rem;

  @media (min-width: 880px) {
    max-width: 860px;
  }

  @media (min-width: 650px) and (max-width: 879px) {
    max-width: 650px;
  }

  @media (min-width: 500px) and (max-width: 649px) {
    max-width: 500px;
  }

  @media (min-width: 350px) and (max-width: 499px) {
    max-width: 350;
  }

  @media (max-width: 349px) {
    max-width: 300px;
  }
`;

export const Content = styled.div`
  margin-bottom: 1.5rem;
  input {
    width: 400px;
    padding: 10px 5px;
    margin-bottom: 5px;
    margin-top: 10px;
    border: 1px solid #b3b3b3;
    outline: none;
    border-radius: 5px;

    @media (min-width: 650px) and (max-width: 879px) {
      width: 300px;
    }

    @media (min-width: 500px) and (max-width: 649px) {
      width: 250px;
    }

    @media (min-width: 350px) and (max-width: 499px) {
      width: 200px;
    }

    @media (max-width: 349px) {
      max-width: 150px;
    }
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  p {
    margin-bottom: 2rem;
    color: #202020;
    text-decoration-line: underline;
  }
`;

export const ListCard = styled.ul`
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;

  span {
    font-style: italic;
    color: #202020;
  }
`;

export const Address = styled.div`
  input {
    width: 600px;
    font-size: 1rem;
    padding: 10px 5px;
    margin-bottom: 10px;
    margin-top: 10px;
    border: 1px solid #b3b3b3;
    outline: none;
    border-radius: 5px;

    @media (min-width: 650px) and (max-width: 879px) {
      width: 500px;
    }

    @media (min-width: 500px) and (max-width: 649px) {
      width: 400px;
    }

    @media (min-width: 350px) and (max-width: 499px) {
      width: 300px;
    }

    @media (max-width: 349px) {
      max-width: 250px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 10px;
  input {
    width: 400px;
    padding: 10px 5px;
    font-size: 1rem;
    border: 1px solid #b3b3b3;
    outline: none;
    border-radius: 5px;

    @media (min-width: 650px) and (max-width: 879px) {
      width: 300px;
    }

    @media (min-width: 500px) and (max-width: 649px) {
      width: 250px;
    }

    @media (min-width: 350px) and (max-width: 499px) {
      width: 200px;
    }

    @media (max-width: 349px) {
      max-width: 150px;
    }
  }

  button {
    padding: 10px 10px;
    font-size: 1rem;
    font-weight: 700;
    margin-left: 10px;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    background-color: #ff3333;

    &:hover {
      background-color: #ff9999;
    }

    @media (min-width: 350px) and (max-width: 499px) {
      padding: 10px 5px;
      font-size: 0.8rem;
    }

    @media (max-width: 349px) {
      padding: 10px 5px;
      font-size: 0.8rem;
    }
  }
`;
