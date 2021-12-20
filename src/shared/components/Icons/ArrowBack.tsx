import { FC } from 'react';
import { IIconProps } from '.';

const ArrowBack: FC<IIconProps> = ({
  width = 24,
  height = 24,
  color = '#1D1D1F',
  onClick,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M15 5L8 12L15 19"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowBack;
