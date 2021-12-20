import React, { FC } from 'react';
import Container from './Container';
import SaveHeader, { ISaveProps } from './PageHeader/SaveHeader';

interface ISaveLayout extends ISaveProps {
  color?: string;
}

const SaveLayout: FC<ISaveLayout> = ({ children, onApply, color }) => {
  return (
    <Container color={color}>
      <SaveHeader onApply={onApply} />
      {children}
    </Container>
  );
};

export default SaveLayout;
