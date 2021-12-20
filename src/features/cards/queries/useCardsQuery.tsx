import { useCallback, useMemo } from 'react';
import { useQuery } from 'react-query';
import getCards from '../api/getCards';
import Card from '../types/Card';

export default function useCardsQuery(collectionId?: number) {
  const callGetCards = useCallback(
    () => (collectionId ? getCards(collectionId) : []),
    [collectionId]
  );

  const { data } = useQuery(['cards', collectionId], callGetCards);
  return useMemo(
    () => ({
      cards: data?.sort(filter) ?? [],
    }),
    [data]
  );
}

const filter = (a: Card, b: Card) => Number(b.modDttm) - Number(a.modDttm);
