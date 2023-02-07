import { type ReactNode } from 'react';

import Header from '../components/Header';
import Nav from '../components/Nav';

interface Props {
  children?: ReactNode;
}

function DefaultLayout({ children }: Props) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Nav />
    </>
  );
}

export default DefaultLayout;
