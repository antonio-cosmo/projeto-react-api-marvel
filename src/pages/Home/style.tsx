import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.4rem 1rem;
  margin-top: 5.5rem;
  text-align: center;

  #msg {
    font-style: italic;
    font-size: 1.2rem;
  }
`;

export const CardList = styled.ul`
  width: 100%;
  margin-top: 40px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.5rem;
`;

export const Button = styled.button`
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 2px;
  color: #ffffff;
  background-color: #ff3333;

  &:hover {
    background-color: #ff9999;
  }

  &:disabled {
    background: rgb(85, 80, 80);
    cursor: not-allowed;
  }
`;
