import { useCallback } from "react";
import { useQuery, useQueryClient } from "react-query";
import getUnclassifiedCards from "../api/getUnclassifiedCards";

export function useUnclassifiedQuery() {
  return useQuery(
    ["cards", "list", { unclassifed: true }],
    getUnclassifiedCards,
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );
}

export function useRefreshCardList() {
  const queryClient = useQueryClient();

  return useCallback(
    () =>
      queryClient.invalidateQueries(["cards", "list", { unclassifed: true }]),
    [queryClient]
  );
}

export function useIsLastCard() {
  const query = useUnclassifiedQuery();
  return query.data?.length === 1;
}

export function useSavedCardRemove() {
  const queryClient = useQueryClient();
  const { data: cards, refetch: refetchCards } = useUnclassifiedQuery();

  return useCallback(
    (tweetId: string) => {
      if (cards!.length === 1) {
        return refetchCards();
      }

      const index = cards!.findIndex((c) => c.tweetId === tweetId);
      if (index === -1) {
        return;
      }

      queryClient.setQueryData(
        ["cards", "list", { unclassifed: true }],
        [...cards!.slice(0, index), ...cards!.slice(index + 1)]
      );

      queryClient.invalidateQueries(["collection"]);
    },
    [queryClient, cards, refetchCards]
  );
}
