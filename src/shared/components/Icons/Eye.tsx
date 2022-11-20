import { FC } from 'react';
import { colors } from 'shared/styles';
import { IIconProps } from '.';

const Eye: FC<IIconProps> = ({ width = 16, height = 16, color = colors.white }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99998 3.61768C4.96507 3.61768 2.38317 5.44691 1.42627 8.0001C2.38313 10.5534 4.96506 12.3827 8.00003 12.3827C11.0349 12.3827 13.6168 10.5534 14.5737 8.00023C13.6169 5.44698 11.0349 3.61768 7.99998 3.61768ZM8 11.2869C9.81529 11.2869 11.2869 9.81529 11.2869 8C11.2869 6.18471 9.81529 4.71313 8 4.71313C6.18471 4.71313 4.71313 6.18471 4.71313 8C4.71313 9.81529 6.18471 11.2869 8 11.2869Z"
        fill={color}
      />
      <circle cx="8" cy="8" r="1.5" fill="white" />
    </svg>
  );
};

export default Eye;
