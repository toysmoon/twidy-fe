import type Card from 'features/cards/types/Card';
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import useDim from 'shared/hooks/useDim';
import { cardState } from '../states/tweetState';

export default function useGlobalCard(card: Card) {
  const [globalCard, setCard] = useRecoilState(cardState);
  useDim(globalCard.open);

  return useCallback(() => {
    setCard({ ...globalCard, open: true, card });
  }, [card]);
}

export function useGlobalCardViewMode() {
  const [card, setCard] = useRecoilState(cardState);
  useEffect(() => {
    setCard({ ...card, isViewMode: true });
    return () => setCard({ ...card, isViewMode: false });
  }, []);
}
