import classNames from 'classnames';
import React from 'react';

interface ToggleProps {
  isChecked: boolean;
  onClick: () => void;
  label?: string;
}

export default function Toggle({ isChecked, onClick, label }: ToggleProps) {
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
