import React, { FC } from 'react';
import Spacer from 'shared/components/Spacer';
import Container from './Container';
import PageHeader from './PageHeader';

interface ILayout {}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Container>
      <PageHeader />
      <Spacer size={16} />
      {children}
    </Container>
  );
};

export default Layout;
