import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';

import Loader from 'components/kit/Loader/Loader';

import './Layout.scss';

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
