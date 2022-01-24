import { useCallback, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import getLikes from '../api/getLikes';
import getUnclassifiedCards from '../api/getUnclassifiedCards';

export function useUnclassifiedQuery() {
  return useQuery(
    ['cards', 'list', { unclassifed: true }],
    getUnclassifiedCards,
    {
      refetchOnWindowFocus: false,
    }
  );
}

export function useGetLikesMutation() {
  const queryClient = useQueryClient();
  return useMutation(getLikes, {
    onSuccess: () => {
      return queryClient.invalidateQueries([
        'cards',
        'list',
        { unclassifed: true },
      ]);
    },
  });
}

export function useSavedCardRemove() {
  const queryClient = useQueryClient();
  const cards = useUnclassifiedCard();

  return useCallback(
    (cardId: number) => {
      if (!cards) {
        return;
      }

      const index = cards.findIndex((c) => c.cardId === cardId);
      if (index === -1) {
        return;
      }

      queryClient.setQueryData(
        ['cards', 'list', { unclassifed: true }],
        [...cards.slice(0, index), ...cards.slice(index + 1)]
      );
    },
    [queryClient, cards]
  );
}

export function useUnclassifiedCard() {
  const { data, isLoading } = useUnclassifiedQuery();
  const { mutate } = useGetLikesMutation();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    mutate();
  }, [isLoading, mutate]);

  return data;
}
