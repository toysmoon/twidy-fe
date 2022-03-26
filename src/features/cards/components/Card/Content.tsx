import { Media } from 'shared/api/types';
import React from 'react';
import Thumbnail from './Thumbnail';

interface IContentProps {
  text: string;
  media?: Media[];
}

export default function Content({ text, media }: IContentProps) {
  const isHasDedia = media && media.length > 0;

  return (
    <div className="flex gap-4 mt-3">
      <p className="font-pretendard text-base leading-5">{text}</p>
      {isHasDedia && <Thumbnail media={media} />}
    </div>
  );
}
