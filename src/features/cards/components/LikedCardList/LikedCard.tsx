import skipCard from 'features/cards/api/skipCard';
import { useSavedCardRemove } from 'features/cards/queries/useUnclassifiedQuery';
import type CardType from 'features/cards/types/Card';
import React, { Suspense, useCallback } from 'react';
import Button from 'shared/components/Button';
import Skip from 'shared/components/Button/Skip';
import CardThumbnail from 'shared/components/Thumbnail';
import ReferDetail from './ReferDetail';
import Twit from './Twit';
import TwitterUser from './TwitterUser';

interface ICardProps {
  card: CardType;
  onClick: (t: CardType) => void;
}

export default function LikedCard({ card, onClick }: ICardProps) {
  const { author, text, media, url, refers } = card;
  const isHaveMedia = media && media.length > 0;
  const isHaveRefer = refers && refers.length > 0;
  const removeCardFromList = useSavedCardRemove();

  const handleSkip = useCallback(async () => {
    removeCardFromList(card.tweetId);
    await skipCard(card.tweetId);
  }, [card, removeCardFromList]);

  const handleClick = useCallback(() => onClick(card), [card, onClick]);

  return (
    <div className="p-5 my-3 mx-4 relative bg-white rounded-2xl">
      <article>
        <TwitterUser profileImage={author.profileImageUrl} twitterId={author.username} name={author.name} url={url} />
        <Twit twit={text} />
        {isHaveMedia && <CardThumbnail images={media} tweetUrl={card.url} />}
        {isHaveRefer && (
          <Suspense fallback={null}>
            <ReferDetail refer={refers[0]} />
          </Suspense>
        )}
      </article>
      <div className="flex justify-between items-center mt-5">
        <Skip onClick={handleSkip} />
        <Button label="SAVE" onClick={handleClick} type="confirm" />
      </div>
    </div>
  );
}
