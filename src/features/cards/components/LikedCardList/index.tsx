import React from 'react';
import LikedCard from './LikedCard';
import Card from 'features/cards/types/Card';
import LikedCardSkeleton from './LikedCardSkeleton';
import { useUnclassifiedCard } from 'features/cards/queries/useUnclassifiedQuery';

interface LikedCardListProps {
  onClickCard: (c: Card) => void;
}

export default function LikedCardList({ onClickCard }: LikedCardListProps) {
  const cards = useUnclassifiedCard();

  console.log(cards);

  return (
    <>
      {cards?.map((item, i) => (
        <LikedCard key={i} card={item} onClick={onClickCard} />
      ))}
    </>
  );
}

export function CardListsSkeleton() {
  return (
    <>
      <LikedCardSkeleton />
      <LikedCardSkeleton />
    </>
  );
}
