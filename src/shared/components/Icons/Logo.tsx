import { IIconProps } from '.';

export default function Logo({ width = 25, height = 24, onClick }: IIconProps) {
  return (
    <svg
      onClick={onClick}
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.87425 6.84451C1.87425 4.49823 3.77628 2.59619 6.12256 2.59619H8.261C9.29745 2.59619 10.2883 3.02218 11.0014 3.77432L12.1106 4.94423H17.4873C20.0943 4.94423 22.2076 7.0576 22.2076 9.66458V16.0857C22.2076 18.6927 20.0943 20.806 17.4873 20.806H6.59437C3.9874 20.806 1.87402 18.6927 1.87402 16.0857V9.66457L1.87425 9.61807V6.84451ZM12.0889 17.2827C2.56787 11.7959 9.08749 5.66374 12.0888 9.85947C14.955 5.66364 21.4747 11.7959 12.0889 17.2827Z"
        fill="white"
      />
    </svg>
  );
}
