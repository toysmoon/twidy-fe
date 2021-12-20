import { FC } from 'react';

const AddCircle: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <circle cx="16" cy="16" r="16" fill="#1D1D1F" />
    <rect x="14.5" y="7.5" width="3" height="17" rx="1.5" fill="white" />
    <rect
      x="24.5"
      y="14.5"
      width="3"
      height="17"
      rx="1.5"
      transform="rotate(90 24.5 14.5)"
      fill="white"
    />
  </svg>
);

export default AddCircle;
