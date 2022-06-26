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
    <div className="flex gap-4 justify-between mt-1">
      <Twit twit={text} useMaxLine />
      {hasMedia && (
        <div className="mt-2">
          <Thumbnail media={media} />
        </div>
      )}
    </div>
  );
}
