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

  if (cards!.length === 0) {
    return (
      <div className="mt-20">
        <p className="text-center text-white opacity-50 text-lg">
          You haven’t liked
          <br />
          any Tweets yet
        </p>
        <p className="mt-3 text-center text-white opacity-30">
          When you do, we’ll show you here
        </p>
      </div>
    );
  }

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
