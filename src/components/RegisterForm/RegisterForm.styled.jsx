import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 24px;
  border: 4px solid #9cb0b3;
  margin: 0 auto;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 20px;
  color: black;
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 8px 32px 8px 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #9cb0b3;
  outline-color: #1976d2;
`;
export const Btn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
  font-size: 20px;
  padding: 8px;
  border-radius: 24px;
  border: 1px solid #9cb0b3;
  outline-color: #1976d2;
  cursor: pointer;
  color: black;
  background-color: white;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #1976d2;
    color: white;
  }
`;
