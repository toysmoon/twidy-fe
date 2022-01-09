import React, { FC } from 'react';
import Container from './Container';
import LowHeader, { ILowHeader } from './PageHeader/LowHeader';

const LowLayout: FC<ILowHeader> = ({ children, color, ...props }) => {
  return (
    <Container color={color}>
      <LowHeader {...props} />
      {children}
    </Container>
  );
};

export default LowLayout;
