import React, { FC } from 'react';
import Container from './Container';
import LowHeader, { ILowHeader } from './PageHeader/LowHeader';

const LowLayout: FC<ILowHeader> = ({ children, RightButton, color }) => {
  return (
    <Container color={color}>
      <LowHeader RightButton={RightButton} />
      {children}
    </Container>
  );
};

export default LowLayout;
