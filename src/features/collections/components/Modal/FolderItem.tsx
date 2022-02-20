import { Collection } from 'features/collections/types';
import React, { FC } from 'react';
import { ArrowRight, Lock } from 'shared/components/Icons';
import TwitterEmoji from 'shared/components/TwitterEmoji';

interface IFolderProps {
  folder: Collection;
  onClick: () => void;
}

const LockIcon = () => (
  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex justify-center items-center bg-gray1">
    <Lock />
  </div>
);

const FolderItem: FC<IFolderProps> = ({ folder, onClick }) => {
  const { name, emoji, color, isPrivate } = folder;

  return (
    <div onClick={onClick} className="flex my-3 mx-5 items-center">
      <div
        className={`w-8 h-8 shrink-0 rounded-full relative flex justify-center items-center text-base bg-${color}`}
      >
        <TwitterEmoji value={emoji} />
        {isPrivate && <LockIcon />}
      </div>
      <p className="w-full font-bold text-lg leading-5 text-black mx-3">
        {name}
      </p>
      <ArrowRight />
    </div>
  );
};

export default FolderItem;
