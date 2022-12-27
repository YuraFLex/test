import { NavBar } from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

import './Layout.scss';

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
