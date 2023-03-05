import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #9cb0b3;

  &.active {
    color: #e84a5f;
  }
`;
