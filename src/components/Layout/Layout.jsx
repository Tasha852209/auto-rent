import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
