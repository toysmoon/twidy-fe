export default function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-6 right-2 w-14 h-14 rounded-full bg-white flex justify-center items-center drop-shadow-xl text-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
      >
        <g clip-path="url(#clip0_2136_34446)">
          <path
            d="M14.1421 22.9809V5.30326M14.1421 5.30326L20.3293 11.4904M14.1421 5.30326L7.95493 11.4904"
            stroke="#1D1D1F"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2136_34446">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(0 14.1421) rotate(-45)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
