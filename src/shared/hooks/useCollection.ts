import useCollecitonQuery from 'features/collections/queries/useCollectionQuery';
import useUserQuery from 'features/users/queries/useUserQuery';
import { useMemo } from 'react';

export default function useCollection(collectionId: number) {
  const user = useUserQuery();
  const collections = useCollecitonQuery(user!.userId);
  const collection = useMemo(
    () => collections.find((c) => c.collectionId === collectionId),
    [collections]
  );

  return collection;
}
