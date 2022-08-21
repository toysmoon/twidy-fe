import deleteCard from 'features/cards/api/deleteCard';
import updateCard from 'features/cards/api/updateCard';
import useInfiniteCardsQuery from 'features/cards/queries/useInfiniteCardsQuery';
import Card from 'features/cards/types/Card';
import { useMutation, useQueryClient } from 'react-query';

export function useUpdateCardMutation(collectionId?: number) {
  const queryClient = useQueryClient();
  const { data: infiniteData } = useInfiniteCardsQuery(collectionId);

  return useMutation((card: Card) => updateCard(card), {
    onSuccess: (_, card) => {
      if (infiniteData?.pages === undefined) {
        return;
      }

      const pageIndex = infiniteData.pages.findIndex(cards => cards.map(c => c.cardId === card.cardId));
      const page = infiniteData?.pages?.[pageIndex];
      const cardIndex = page.findIndex(c => c.cardId === card.cardId);

      queryClient.setQueryData(['cards', collectionId, 'infinite'], {
        pages: [
          ...infiniteData.pages.slice(0, pageIndex),
          [...page.slice(0, cardIndex), card, ...page.slice(cardIndex + 1)],
          ...infiniteData.pages.slice(pageIndex + 1),
        ],
        pageParams: infiniteData.pageParams,
      });
    },
  });
}

export function useMoveCardMutation(collectionId?: number) {
  const queryClient = useQueryClient();
  const { data: infiniteData } = useInfiniteCardsQuery(collectionId);

  return useMutation((card: Card) => updateCard(card), {
    onSuccess: (_, card) => {
      if (infiniteData?.pages === undefined) {
        return;
      }

      const pageIndex = infiniteData.pages.findIndex(cards => cards.map(c => c.cardId === card.cardId));
      const page = infiniteData?.pages?.[pageIndex];
      const cardIndex = page.findIndex(c => c.cardId === card.cardId);

      queryClient.setQueryData(['cards', collectionId, 'infinite'], {
        pages: [
          ...infiniteData.pages.slice(0, pageIndex),
          [...page.slice(0, cardIndex), ...page.slice(cardIndex + 1)],
          ...infiniteData.pages.slice(pageIndex + 1),
        ],
        pageParams: infiniteData.pageParams,
      });
    },
  });
}

export function useDeleteCardMutation(collectionId?: number) {
  const queryClient = useQueryClient();
  const { data: infiniteData } = useInfiniteCardsQuery(collectionId);

  return useMutation((cardId: number) => deleteCard(cardId), {
    onSuccess: (_, cardId) => {
      if (infiniteData?.pages === undefined) {
        return;
      }

      const pageIndex = infiniteData.pages.findIndex(cards => cards.map(c => c.cardId === cardId));
      const page = infiniteData?.pages?.[pageIndex];
      const cardIndex = page.findIndex(c => c.cardId === cardId);

      queryClient.setQueryData(['cards', collectionId, 'infinite'], {
        pages: [
          ...infiniteData.pages.slice(0, pageIndex),
          [...page.slice(0, cardIndex), ...page.slice(cardIndex + 1)],
          ...infiniteData.pages.slice(pageIndex + 1),
        ],
        pageParams: infiniteData.pageParams,
      });
    },
  });
}
