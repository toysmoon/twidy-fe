import dislikeTweet from 'features/cards/api/dislikeTweet';
import { useSavedCardRemove } from 'features/cards/queries/useUnclassifiedQuery';
import type CardType from 'features/cards/types/Card';
import React, { useCallback } from 'react';
import Save from 'shared/components/Button/Save';
import Undo from 'shared/components/Button/Undo';
import CardThumbnail from 'shared/components/Thumbnail';
import Text from './Text';
import TwitterUser from './TwitterUser';

interface ICardProps {
  card: CardType;
  onClick: (t: CardType) => void;
}

export default function LikedCard({ card, onClick }: ICardProps) {
  const { author, text, media, url } = card;
  const isHaveMedia = media && media.length > 0;
  const removeCardFromList = useSavedCardRemove();

  const handleUndo = useCallback(async () => {
    await dislikeTweet(card.tweetId);
    removeCardFromList(card.tweetId);
  }, [card]);

  const handleClick = useCallback(() => onClick(card), [card, onClick]);

  return (
    <div className="p-5 my-3 mx-4 relative bg-white rounded-2xl">
      <article>
        <TwitterUser
          profileImage={author.profile_image_url}
          twitterId={author.username}
          name={author.name}
          url={url}
        />
        <Text>{text}</Text>
        {isHaveMedia && <CardThumbnail images={media} />}
      </article>
      <div className="flex justify-between mt-5">
        <Undo onClick={handleUndo} />
        <Save onClick={handleClick} />
      </div>
    </div>
  );
}
