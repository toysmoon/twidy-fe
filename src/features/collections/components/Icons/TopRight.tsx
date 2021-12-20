import { IIconProps } from 'shared/components/Icons';

export default function TopRight({ size = 20 }: IIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 16.25L16.25 3.75M16.25 3.75V12.5M16.25 3.75H7.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
