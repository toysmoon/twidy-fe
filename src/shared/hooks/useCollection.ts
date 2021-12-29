import useCollecitonQuery from 'features/collections/queries/useCollectionQuery';
import { useMemo } from 'react';

export default function useCollection(collectionId: number) {
  const collections = useCollecitonQuery();
  const collection = useMemo(
    () => collections.find((c) => c.collectionId === collectionId),
    [collections]
  );

  return collection;
}
