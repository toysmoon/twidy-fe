import DetailedCard from 'features/cards/components/DetailedCard';
import { cardState } from 'features/cards/states/tweetState';
import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';

export default function GlobalTweet() {
  const [{ open, card, isViewMode }, setCard] = useRecoilState(cardState);
  const handleClose = useCallback(() => {
    setCard({ open: false, isViewMode });
  }, [open, isViewMode]);

  if (!open) {
    return null;
  }

  return (
    <DetailedCard card={card} onClose={handleClose} isViewMode={isViewMode} />
  );
}
