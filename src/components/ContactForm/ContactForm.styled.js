import styled from 'styled-components';

export const Form = styled.form`
  padding: 24px;
  width: 350px;
  border: 2px solid rgb(154, 141, 238);
  border-radius: 8px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  min-height: 20px;
  margin-top: 10px;
  margin-bottom: 8px;
  background-color: #92c0f7;

  border: 2px solid rgb(154, 141, 238);
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  width: 120px;
  min-height: 30px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  margin-top: 10px;
  background-color: transparent;
  border: 2px solid rgb(154, 141, 238);
  border-radius: 4px;
  padding-top: 4px;
  padding-bottom: 4px;

  &:hover,
  &:focus {
    background-color: rgb(154, 141, 238);
  }
`;
