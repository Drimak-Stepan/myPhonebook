import styled from '@emotion/styled';

export const Stats = styled.ul`
  list-style: none;
  display: block;
  padding: 10px 0 0 0;
  margin: 16px 0 10px;
  border-radius: 32px;
  border: 4px solid #9cb0b3;
  max-height: 290px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.1px;
  }
`;

export const StatsLi = styled.li`
  position: relative;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Item = styled.span`
  position: relative;
  font-size: 18px;
  font-weight: 700;
  padding: 8px 8px 8px 32px;
  background-color: white;
  border-radius: 16px;
  border: 1px solid #9cb0b3;
`;

export const Btn = styled.button`
  position: absolute;
  display: block;
  width: 45px;
  height: 40px;
  top: 0;
  right: 10px;
  font-weight: 700;
  font-size: 20px;
  padding: 8px;
  border-radius: 24px;
  border: 1px solid #9cb0b3;
  cursor: pointer;
  color: white;
  background-color: #1976d2;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #1565c0;
  }
`;
