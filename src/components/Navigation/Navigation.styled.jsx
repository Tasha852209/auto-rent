import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header``;

export const Nav = styled.nav`
  display: flex;
  gap: 100px;
`;

export const Link = styled(NavLink)`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: #000000;
  text-decoration: none;

  &.active {
    color: #3470ff;
  }
`;
