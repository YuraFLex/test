import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  list-style: none;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    color: red;
  }
`;
