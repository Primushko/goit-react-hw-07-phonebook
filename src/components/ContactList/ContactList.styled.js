import styled, { keyframes } from 'styled-components';

export const List = styled.ul`
  padding-left: 0px;
`;

export const Item = styled.li`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  justify-content: space-between;
`;

export const Text = styled.p`
  display: inline-block;
  min-width: 230px;
  font-size: 17px;
`;

export const Button = styled.button`
  width: 70px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  background-color: transparent;

  border: 2px solid rgb(154, 141, 238);
  border-radius: 6px;

  &:hover,
  &:focus {
    background-color: rgb(154, 141, 238);
  }
`;
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: auto;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
`;
