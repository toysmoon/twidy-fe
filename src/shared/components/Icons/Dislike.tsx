import { FC } from 'react';
import { colors } from 'shared/styles';
import { IIconProps } from '.';

const Dislike: FC<IIconProps> = ({
  width = 22,
  height = 22,
  color = colors.black,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9998 17.2C-4.41723 8.67876 6.37489 -0.892172 10.9998 4.95721C15.6253 -0.892174 26.4174 8.67876 10.9998 17.2Z"
        stroke={color}
        strokeWidth="2"
      />
      <g filter="url(#filter0_d)">
        <path
          d="M20.2892 3.29053L4.40868 16.6067"
          stroke={color}
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="3.76611"
          y="2.52429"
          width="17.1656"
          height="16.8487"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Dislike;
