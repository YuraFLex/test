import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 45px;
  line-height: 1.2;
  font-weight: 700;

  text-align: center;
  margin-bottom: 50px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  list-style: none;
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  text-decoration: none;
  color: inherit;
  padding: 16px 32px;
  color: #fff;
  font-weight: 600;
  background-color: #3a6ef6;

  &.active {
    color: #3a6ef6;
    background-color: #fff;
  }
`;
