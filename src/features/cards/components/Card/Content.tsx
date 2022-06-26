import { Media } from 'shared/api/types';
import React from 'react';
import Thumbnail from './Thumbnail';
import Twit from '../LikedCardList/Twit';

interface IContentProps {
  text: string;
  media?: Media[];
}

export default function Content({ text, media }: IContentProps) {
  const hasMedia = media && media.length > 0;

  return (
    <div className="flex gap-4 mt-3">
      <Twit twit={text} />
      {hasMedia && <Thumbnail media={media} />}
    </div>
  );
}
