import { Collection } from 'features/collections/types';
import React, { FC } from 'react';
import { ArrowRight, Lock } from 'shared/components/Icons';
import TwitterEmoji from 'shared/components/TwitterEmoji';

interface IFolderProps {
  folder: Collection;
  onClick: () => void;
}

const FolderItem: FC<IFolderProps> = ({ folder, onClick }) => {
  const { name, emoji, color, isPrivate } = folder;

  return (
    <div
      onClick={onClick}
      className="flex py-5 mx-5 items-center justify-between border-b border-gray6"
    >
      <div className="flex items-center">
        <div
          className={`w-6 h-6 shrink-0 rounded-full relative flex justify-center items-center text-base bg-${color}`}
        >
          <TwitterEmoji value={emoji} size={12} />
        </div>
        <p className="text-base leading-5 text-black ml-2 mr-1">{name}</p>
        {isPrivate && <Lock color="black" width={16} height={16} />}
      </div>
      <ArrowRight />
    </div>
  );
};

export default FolderItem;
