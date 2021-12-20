import { FC } from 'react';
import { IIconProps } from '.';

const ArrowRight: FC<IIconProps> = ({
  width = 16,
  height = 16,
  color = '#6E6E73',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 3L11 8L6 13"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRight;
