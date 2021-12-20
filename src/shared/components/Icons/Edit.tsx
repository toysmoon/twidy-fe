import { FC } from 'react';
import { IIconProps } from '.';

const Edit: FC<IIconProps> = ({ width = 12, height = 12 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7.99992V6.45703C2 6.32442 2.05268 6.19725 2.14645 6.10348L7.89645 0.353478C8.09171 0.158216 8.40829 0.158216 8.60355 0.353478L10.1464 1.89637C10.3417 2.09163 10.3417 2.40822 10.1464 2.60348L4.39645 8.35348C4.30268 8.44725 4.1755 8.49992 4.04289 8.49992H2.5C2.22386 8.49992 2 8.27607 2 7.99992ZM1 10.2499C0.585786 10.2499 0.25 10.5857 0.25 10.9999C0.25 11.4141 0.585786 11.7499 1 11.7499H11C11.4142 11.7499 11.75 11.4141 11.75 10.9999C11.75 10.5857 11.4142 10.2499 11 10.2499H1Z"
        fill="white"
      />
    </svg>
  );
};

export default Edit;
