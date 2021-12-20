import React, { ReactNode } from 'react';
import Container from './Container';

export default function EmptyLayout({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}) {
  return <Container color={color}>{children}</Container>;
}
