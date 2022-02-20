import useUserQuery from 'features/users/queries/useUserQuery';
import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import deleteCollections from '../api/deleteCollections';
import getCollections from '../api/getCollections';
import putCollections from '../api/putCollections';
import { Collection } from '../types';

export default function useCollecitonQuery() {
  const user = useUserQuery();
  const collectionUserId = user!.userId;

  const result = useQuery<Collection[]>(
    ['collection', collectionUserId],
    () => (collectionUserId ? getCollections(collectionUserId) : []),
    { staleTime: Infinity, cacheTime: Infinity }
  );

  return useMemo(() => {
    if (!result.data) {
      return [];
    }

    return result.data.sort((a, b) => a.ordVal - b.ordVal);
  }, [result.data]);
}

export function useCollecitonQueryById(userId: string) {
  const result = useQuery<Collection[]>(
    ['collection', userId],
    () => getCollections(userId, false),
    { staleTime: Infinity, cacheTime: Infinity }
  );

  return useMemo(() => {
    if (!result.data) {
      return [];
    }

    return result.data.sort((a, b) => a.ordVal - b.ordVal);
  }, [result.data]);
}

export function useDeleteCollectionsMutation() {
  const queryClient = useQueryClient();
  const user = useUserQuery();
  const collections = useCollecitonQuery();

  return useMutation(
    ['collection', user?.userId],
    (collectionIds: number[]) => deleteCollections(collectionIds),
    {
      onSuccess: (_, collectionIds) => {
        const newCollections = collections.filter(
          ({ collectionId }) => !collectionIds.some((id) => id === collectionId)
        );

        queryClient.setQueryData(
          ['collection', user?.userId],
          [...newCollections]
        );
      },
      onSettled: () => {
        queryClient.invalidateQueries(['collection', user?.userId]);
      },
    }
  );
}

export function useUpdateCollectionOrderMutation() {
  const queryClient = useQueryClient();
  const user = useUserQuery();

  return useMutation(
    ['collection', user?.userId],
    (collections: Collection[]) =>
      putCollections(
        collections
          .map((c, i) => ({ ...c, ordVal: i + 1 }))
          .filter((c, i) => c.ordVal !== collections[i].ordVal)
      ),
    {
      onSuccess: (_, collections) => {
        queryClient.setQueryData(
          ['collection', user?.userId],
          [...collections]
        );
      },
      onSettled: () => {
        queryClient.invalidateQueries(['collection', user?.userId]);
      },
    }
  );
}

export function useUpdateCollection() {
  const user = useUserQuery();
  const queryClient = useQueryClient();
  const collections = useCollecitonQuery();

  return useMutation(
    ['collection', user?.userId],
    (collection: Collection) => putCollections([collection]),
    {
      onSuccess: (_, collection) => {
        const index = collections.findIndex(
          (c) => c.collectionId === collection.collectionId
        );

        queryClient.setQueryData(
          ['collection', user?.userId],
          [
            ...collections.slice(0, index),
            collection,
            ...collections.slice(index + 1),
          ]
        );
      },
      onSettled: () => {
        queryClient.invalidateQueries(['collection', user?.userId]);
      },
    }
  );
}
