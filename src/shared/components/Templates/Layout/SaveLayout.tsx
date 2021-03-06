import React, { FC } from 'react';
import Container from './Container';
import SaveHeader, { ISaveProps } from './PageHeader/SaveHeader';

interface ISaveLayout extends ISaveProps {
  color?: string;
  isLoading?: boolean;
}

const SaveLayout: FC<ISaveLayout> = ({
  children,
  onApply,
  color,
  isLoading = false,
}) => {
  return (
    <Container color={color}>
      <SaveHeader onApply={onApply} isLoading={isLoading} />
      {children}
    </Container>
  );
};

export default SaveLayout;
