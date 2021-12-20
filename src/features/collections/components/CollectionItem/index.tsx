import classNames from 'classnames';
import CollectionIcon from 'features/collections/components/CollectionIcon';
import { Collection } from 'features/collections/types';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { ArrowRight } from 'shared/components/Icons';

interface ICollection {
  data: Collection;
  isDragging?: boolean;
  onClickCollection?: (collectionId: number) => void;
}

export default function CollectionItem({
  data,
  isDragging,
  onClickCollection,
}: ICollection) {
  const router = useRouter();
  const { collectionId, name } = data;
  const handleClick = useCallback(
    () =>
      onClickCollection
        ? onClickCollection(collectionId)
        : router.push(`/collections/${collectionId}`),
    [router, collectionId, onClickCollection]
  );

  const containerClass = classNames(
    containerDefaultClass,
    isDragging ? 'opacity-50' : 'opacity-100'
  );

  const count = data.count ?? 0;

  return (
    <div className={containerClass} onClick={handleClick}>
      <CollectionIcon collections={data} />
      <div className="px-3 w-full">
        <p className="font-roboto font-bold text-lg leading-5 m-0">{name}</p>
        <p className="font-roboto text-sm leading-4 text-gray3 m-0">{`${count} tweets`}</p>
      </div>
      <ArrowRight width={20} height={20} />
    </div>
  );
}

export const containerDefaultClass = [
  'w-full',
  'h-20',
  'bg-white',
  'rounded-2xl',
  'flex',
  'items-center',
  'p-5',
];
