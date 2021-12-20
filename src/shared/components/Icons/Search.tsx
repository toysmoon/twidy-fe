import { IIconProps } from '.';

export default function Search({ onClick }: IIconProps) {
  return (
    <svg
      onClick={onClick}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="17.6665"
        cy="17.6667"
        r="8.75"
        stroke="white"
        strokeWidth="3"
      />
      <path
        d="M30.5002 30.4999L24.0835 24.0833"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
