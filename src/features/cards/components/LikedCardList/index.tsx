import React, { useEffect } from 'react';
import LikedCard from './LikedCard';
import Card from 'features/cards/types/Card';
import LikedCardSkeleton from './LikedCardSkeleton';
import {
  useGetLikesMutation,
  useUnclassifiedCard,
} from 'features/cards/queries/useUnclassifiedQuery';
import FetchingStatus from './FetchingStatus';

interface LikedCardListProps {
  onClickCard: (c: Card) => void;
}

export default function LikedCardList({ onClickCard }: LikedCardListProps) {
  const cards = useUnclassifiedCard();
  const { isLoading: isFetching, mutate } = useGetLikesMutation();

  useEffect(() => {
    mutate();
  }, []);

  if (cards!.length === 0 && !isFetching) {
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
      {isFetching && <FetchingStatus />}
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
