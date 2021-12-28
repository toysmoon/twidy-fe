import Dragable from 'features/collections/components/CollectionItem/Dragable';
import useCollecitonQuery, {
  useDeleteCollectionsMutation,
  useUpdateCollectionOrderMutation,
} from 'features/collections/queries/useCollectionQuery';
import { Collection } from 'features/collections/types';
import Profile from 'features/users/components/Profile';
import useUserQuery from 'features/users/queries/useUserQuery';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SaveLayout from 'shared/components/Templates/Layout/SaveLayout';
import useToast from 'shared/hooks/useToast';

export default function Folders() {
  const toast = useToast();
  const router = useRouter();
  const user = useUserQuery();
  const { mutateAsync: deleteCollections } = useDeleteCollectionsMutation();
  const { mutateAsync: updateOrder } = useUpdateCollectionOrderMutation();

  const initialCollections = useCollecitonQuery(user!.userId);
  const [removedCollection, setRemovedCollections] = useState<Collection[]>([]);
  const [collections, setCollections] =
    useState<Collection[]>(initialCollections);

  useEffect(() => {
    setCollections(initialCollections);
  }, [initialCollections]);

  const moveCollection = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const collection = collections[dragIndex];
      const except = [
        ...collections.slice(0, dragIndex),
        ...collections.slice(dragIndex + 1),
      ];

      setCollections([
        ...except.slice(0, hoverIndex),
        collection,
        ...except.slice(hoverIndex),
      ]);
    },
    [collections]
  );

  const removeCollection = useCallback(
    (removeIndex: number) => {
      setRemovedCollections([...removedCollection, collections[removeIndex]]);
      setCollections([
        ...collections.slice(0, removeIndex),
        ...collections.slice(removeIndex + 1),
      ]);
    },
    [collections, removedCollection]
  );

  const onApply = useCallback(async () => {
    const collectionIds = removedCollection.map(
      ({ collectionId }) => collectionId
    );
    await deleteCollections(collectionIds);
    await updateOrder(collections);

    router.back();
    toast('Your change has been applied!');
  }, [router, toast, removedCollection, collections]);

  if (!user) {
    return null;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <SaveLayout onApply={onApply}>
        <Profile />
        <div className="p-4 flex flex-col gap-3">
          {collections.map((c, i) => (
            <Dragable
              data={c}
              id={c.collectionId}
              key={c.collectionId}
              index={i}
              move={moveCollection}
              remove={removeCollection}
            />
          ))}
        </div>
      </SaveLayout>
    </DndProvider>
  );
}
