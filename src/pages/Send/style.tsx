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
  }
`;

export const ListCard = styled.div`
  width: 100%;
`;

export const Address = styled.div`
  input {
    width: 600px;
    padding: 10px 5px;
    margin-bottom: 5px;
    margin-top: 10px;
    border: 1px solid #b3b3b3;
    outline: none;
    border-radius: 5px;
  }
`;

export const Form = styled.form`
  input {
    width: 400px;
    padding: 10px 5px;
    margin-bottom: 5px;
    margin-top: 10px;
    border: 1px solid #b3b3b3;
    outline: none;
    border-radius: 5px;
  }

  button {
    padding: 10px 5px;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem 1.5rem;
    margin-left: 10px;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    background-color: #ff3333;

    &:hover {
      background-color: #ff9999;
    }
  }
`;
