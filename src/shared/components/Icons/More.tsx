import { IIconProps } from '.';

export default function More({ onClick, size = 40, color = 'white' }: IIconProps) {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20.5" cy="10.5" r="2.5" fill={color} />
      <circle cx="20.5" cy="20.5" r="2.5" fill={color} />
      <circle cx="20.5" cy="30.5" r="2.5" fill={color} />
    </svg>
  );
}
