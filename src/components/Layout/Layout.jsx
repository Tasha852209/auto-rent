import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Wrapper } from './Layout.styled';
import { Loader } from '../Loader/Loader';
import Header from './Header/Header';

export default function Layout() {
  return (
    <>
      <Wrapper>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
}
