import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 0px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  display: inline-block;
  min-width: 230px;
  font-size: 20px;
`;

export const Button = styled.button`
  width: 70px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  background-color: transparent;

  border: 2px solid rgb(154, 141, 238);
  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: rgb(154, 141, 238);
  }
`;
