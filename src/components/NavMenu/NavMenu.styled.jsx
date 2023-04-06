import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const NavMenuLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  padding: 20px;
  padding-top: 46px;
  border-bottom: 4px solid #fff;
  height: 100%;

  cursor: pointer;
  transition: color 200ms ease;
  &:hover, &:focus {
    border-bottom: 4px solid #d6bbd3;
  }
  
`;
