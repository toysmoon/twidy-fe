import React, { FC } from 'react';
import { Dislike } from '../Icons';

interface IUndoProps {
  onClick: () => void;
}

const Undo: FC<IUndoProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="h-10 bg-transparent flex items-center">
      <Dislike />
      <label className="mx-2 font-bold text-lg leading-5 text-black">
        Delete
      </label>
    </button>
  );
};

export default Undo;
