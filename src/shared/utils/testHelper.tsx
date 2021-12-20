import { render, screen } from '@testing-library/react';

const setupComponent = <T,>(
  Component: React.FC<T>,
  defaultProps: T,
  overrideProps: Partial<T>
) => {
  const wrapper = render(<Component {...defaultProps} {...overrideProps} />);
  return { wrapper, screen };
};

export { setupComponent };
