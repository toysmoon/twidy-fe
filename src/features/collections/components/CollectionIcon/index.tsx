import classNames from 'classnames';
import { Collection } from 'features/collections/types';
import React from 'react';
import { Lock } from 'shared/components/Icons';
import TwitterEmoji from 'shared/components/TwitterEmoji';

interface ICollectionIconProps {
  collections: Collection;
  hasBorder?: boolean;
}

export default function CollectionIcon({
  collections,
  hasBorder = false,
}: ICollectionIconProps) {
  const { emoji, color, isPrivate } = collections;
  const iconClass = classNames(
    [
      'w-12',
      'h-12',
      'rounded-full',
      'shrink-0',
      'relative',
      'flex',
      'items-center',
      'justify-center',
    ],
    `bg-${color}`,
    hasBorder && 'border-white border-3'
  );

  return (
    <div className={iconClass}>
      <TwitterEmoji value={emoji} />
      {isPrivate && <LockIcon />}
    </div>
  );
}

const LockIcon = () => (
  <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full flex items-center justify-center bg-gray1">
    <Lock />
  </div>
);
