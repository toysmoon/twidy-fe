import { Media, MEDIA_TYPE } from 'shared/api/types';
import React from 'react';
import Image from 'shared/components/Image';
import MediaType from './MediaType';

interface IMediaProps {
  media: Media[];
}

export default function Thumbnail({ media }: IMediaProps) {
  const { mediaURLHttps, type } = media[0];
  const isNotImage = type !== MEDIA_TYPE.photo && type !== MEDIA_TYPE.gif;
  const isMutlimedia = !isNotImage && media.length > 1;

  return (
    //   filter: drop-shadow(0px 6px 12px rgba(79, 79, 79, 0.12));
    <div className="shrink-0 relative w-24 h-24 rounded-xl overflow-hidden">
      <Image src={mediaURLHttps} layout="fill" objectFit="cover" />
      {isMutlimedia && (
        <div className="absolute right-2 bottom-2 rounded-lg font-roboto text-xs text-white">{`+${
          media.length - 1
        }`}</div>
      )}
      {isNotImage && <MediaType type={type} />}
    </div>
  );
}
