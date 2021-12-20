import React, { FC } from 'react';
import Container from './Container';
import PageHeader from './PageHeader';

interface ILayout {}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Container>
      <PageHeader />
      {children}
    </Container>
  );
};

export default Layout;
