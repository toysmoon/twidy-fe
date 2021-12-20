import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import type Card from 'features/cards/types/Card';
import { cardState } from '../states/tweetState';
import { dimState } from 'shared/states/dimState';

export default function useGlobalCard(card: Card) {
  const [, setDim] = useRecoilState(dimState);
  const [globalCard, setCard] = useRecoilState(cardState);

  useEffect(() => {
    setDim(globalCard.open);
  }, [globalCard]);

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
