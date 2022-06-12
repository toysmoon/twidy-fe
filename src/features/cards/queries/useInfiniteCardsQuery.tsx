import { useCallback } from 'react';
import { useInfiniteQuery } from 'react-query';
import getCards from '../api/getCards';

export default function useInfiniteCardsQuery(collectionId?: number) {
  const fetchCards = useCallback(
    ({ pageParam = 0 }: { pageParam?: number }) => {
      return getCards(collectionId!, { offset: pageParam * 20 });
    },
    [collectionId]
  );

  return useInfiniteQuery(['cards', collectionId, 'infinite'], fetchCards, {
    enabled: collectionId !== undefined,
    getNextPageParam: (_, pages) => {
      const lastPage = pages[pages.length - 1];
      return lastPage.length === 0 ? pages.length : undefined;
    },
  });
}
