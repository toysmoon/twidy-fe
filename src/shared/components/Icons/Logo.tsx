import { IIconProps } from '.';

export default function Logo({ onClick }: IIconProps) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M18.7767 25.7084C4.23311 18.9407 12.994 9.88117 17.8622 15.2567C21.5265 9.13461 31.7276 16.5353 18.7767 25.7084Z"
        fill="url(#paint0_radial_2328_1079)"
      />
      <g filter="url(#filter0_d_2328_1079)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.88893 11.0994C1.61168 7.9303 3.95594 5.13651 7.125 4.85926L10.8445 4.53385C12.2676 4.40934 13.6768 4.89463 14.7214 5.86904L16.2682 7.31171L26.0561 6.45537C29.6213 6.14346 32.7643 8.78076 33.0763 12.3459L34.0489 23.4635C34.3608 27.0287 31.7235 30.1717 28.1583 30.4836L10.2268 32.0524C6.66165 32.3643 3.51864 29.727 3.20673 26.1618L1.88893 11.0994ZM18.7768 25.7086C4.23318 18.9409 12.994 9.88131 17.8623 15.2568C21.5266 9.13475 31.7277 16.5354 18.7768 25.7086Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2328_1079"
          x="1.86667"
          y="4.51465"
          width="33.6473"
          height="29.0027"
          filterUnits="userSpaceOnUse"
          colorInterpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.72" dy="0.72" />
          <feGaussianBlur stdDeviation="0.36" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2328_1079"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2328_1079"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_2328_1079"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(14.7255 17.3843) rotate(39.1186) scale(8.27413 7.24923)"
        >
          <stop stopColor="white" stopOpacity="0.6" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
