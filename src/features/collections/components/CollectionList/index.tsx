import { useCollectionQueryById } from 'features/collections/queries/useCollectionQuery';
import React from 'react';
import CollectionItem from '../CollectionItem';
import Skeleton from '../CollectionListSkeleton';

interface CollectionListProps {
  userId: string;
  onClickCollection?: (collectionId: number) => void;
}

export default function CollectionList({ userId, onClickCollection }: CollectionListProps) {
  const collections = useCollectionQueryById(userId);

  if (collections.length === 0) {
    return <Skeleton />;
  }

  return (
    <div className="flex p-4 flex-col gap-3">
      {collections.map(c => (
        <CollectionItem data={c} key={c.collectionId} onClickCollection={onClickCollection} />
      ))}
    </div>
  );
}
