import { useUnclassifiedQuery } from 'features/cards/queries/useUnclassifiedQuery';
import Card from 'features/cards/types/Card';
import React, { Suspense, useEffect, useState } from 'react';
import LikedCard from './LikedCard';
import LikedCardSkeleton from './LikedCardSkeleton';
import LoadNewTweets from './LoadNewTweets';

interface LikedCardListProps {
  onClickCard: (c: Card) => void;
}

export default function LikedCardList({ onClickCard }: LikedCardListProps) {
  return (
    <Suspense fallback={<CardListsSkeleton />}>
      <Resolved onClickCard={onClickCard} />
    </Suspense>
  );
}

function Resolved({ onClickCard }: LikedCardListProps) {
  const { data: cards, isRefetching } = useUnclassifiedQuery();
  const [initialLength, setInitialLength] = useState(cards!.length);

  useEffect(() => {
    if (!isRefetching) {
      setInitialLength(cards!.length);
    }
  }, [isRefetching]);

  if (isRefetching) {
    return <CardListsSkeleton />;
  }

  if (initialLength === 0) {
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
      {cards!.map((item, i) => (
        <LikedCard key={i} card={item} onClick={onClickCard} />
      ))}
      {isRefetching && <CardListsSkeleton />}
      {cards!.length < 16 && !isRefetching && <LoadNewTweets />}
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
