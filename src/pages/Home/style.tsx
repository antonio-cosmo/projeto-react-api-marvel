import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1020px;
  margin: 0 auto;
  padding: 2.4rem 1rem;
  margin-top: 6rem;

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
    max-width: 350;
  }

  @media (max-width: 349px) {
    max-width: 300px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #msg {
    font-style: italic;
    font-size: 1.2rem;
  }

  @media (min-width: 650px) and (max-width: 879px) {
    max-width: 650px;
  }

  @media (min-width: 500px) and (max-width: 649px) {
    max-width: 500px;
  }

  @media (min-width: 350px) and (max-width: 499px) {
    max-width: 499px;
  }

  @media (max-width: 349px) {
    max-width: 300px;
  }
`;

export const CardList = styled.ul`
  margin-top: 40px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (min-width: 880px) {
    /* grid-template-columns: repeat(4, 1fr);
    gap: 0.8rem; */
    gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
  @media (min-width: 650px) and (max-width: 879px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: 500px) and (max-width: 649px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }

  @media (min-width: 350px) and (max-width: 499px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }

  @media (max-width: 349px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: #ff3333;

  &:hover {
    background-color: #ff9999;
  }
`;
