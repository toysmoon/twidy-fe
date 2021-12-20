import { FC } from 'react';
import { colors } from 'shared/styles';
import { IIconProps } from '.';

const Lock: FC<IIconProps> = ({
  width = 10,
  height = 10,
  color = colors.white,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1.6665"
      y="3.75"
      width="6.66667"
      height="5"
      rx="1.66667"
      fill={color}
    />
    <path
      d="M6.66634 4.79167V2.91667C6.66634 1.99619 5.92015 1.25 4.99967 1.25C4.0792 1.25 3.33301 1.99619 3.33301 2.91667V4.79167"
      stroke={color}
      strokeWidth="1.04167"
    />
  </svg>
);

export default Lock;
