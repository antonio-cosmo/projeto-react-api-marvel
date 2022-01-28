import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.2rem;
  }
  h1,
  p {
    margin: 2rem;
  }

  button {
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
  }
`;
