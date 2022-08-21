import { useMutation, useQueryClient } from 'react-query';
import deleteCard from '../api/deleteCard';
import updateCard from '../api/updateCard';
import Card from '../types/Card';
import useCardsQuery from './useCardsQuery';

export default function useUpdateCardMutation(collectionId?: number) {
  const queryClient = useQueryClient();
  const { cards } = useCardsQuery(collectionId);

  return useMutation((card: Card) => updateCard(card), {
    onSuccess: (_, card) => {
      const i = cards.findIndex(c => c.cardId === card.cardId);
      queryClient.setQueryData(['cards', collectionId], [...cards.slice(0, i), card, ...cards.slice(i + 1)]);
    },
  });
}

export function useMoveCardMutation(collectionId?: number) {
  const queryClient = useQueryClient();
  const { cards } = useCardsQuery(collectionId);

  return useMutation((card: Card) => updateCard(card), {
    onSuccess: (_, card) => {
      const i = cards.findIndex(c => c.cardId === card.cardId);
      queryClient.setQueryData(['cards', collectionId], [...cards.slice(0, i), ...cards.slice(i + 1)]);
      queryClient.invalidateQueries(['collection']);
    },
  });
}

export function useDeleteCardMutation(collectionId?: number) {
  const queryClient = useQueryClient();
  const { cards } = useCardsQuery(collectionId);

  return useMutation((cardId: number) => deleteCard(cardId), {
    onSuccess: (_, cardId) => {
      const i = cards.findIndex(c => c.cardId === cardId);
      queryClient.setQueryData(['cards', collectionId], [...cards.slice(0, i), ...cards.slice(i + 1)]);
      queryClient.invalidateQueries(['collection']);
    },
  });
}
