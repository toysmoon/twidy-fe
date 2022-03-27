import React, { FC } from 'react';
import { SkipIcon } from '../Icons';

interface ISkipProps {
  onClick: () => void;
}

const Skip: FC<ISkipProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="h-10 bg-transparent flex items-center justify-center"
    >
      <SkipIcon />
      <label className="font-nunito mx-2 font-extrabold text-base leading-5 text-gray1 pt-1">
        Skip this tweet
      </label>
    </button>
  );
};

export default Skip;
