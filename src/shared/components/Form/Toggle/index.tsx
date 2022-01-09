import classNames from 'classnames';
import React from 'react';

interface ToggleProps {
  isChecked: boolean;
  onClick: () => void;
  label?: string;
  isLoading?: boolean;
}

export default function Toggle({
  isChecked,
  isLoading,
  onClick,
  label,
}: ToggleProps) {
  const bgColor = isChecked ? 'bg-twitter' : 'bg-gray-400';

  const bgClassName = classNames(`${bgColor} block w-14 h-8 rounded-full`);
  const dotClassName = classNames([
    'dot',
    'absolute',
    'left-1',
    'top-1',
    'bg-white',
    'w-6',
    'h-6',
    'rounded-full',
    'transition',
    'transform',
    isChecked ? 'translate-x-full' : '',
  ]);

  const handleClick = (e: React.MouseEvent) => {
    onClick();
    e.preventDefault();
  };

  if (isLoading) {
    return (
      <div>
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div onClick={handleClick} className="full">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" className="sr-only" />
          <div className={bgClassName}></div>
          <div className={dotClassName}></div>
        </div>
        {label && (
          <div className="ml-3 text-gray-700 font-medium">Toggle Me!</div>
        )}
      </label>
    </div>
  );
}
