import { Media, MEDIA_TYPE } from 'shared/api/types';
import React from 'react';
import Image from 'shared/components/Image';
import MediaType from './MediaType';

interface IMediaProps {
  media: Media[];
}

export default function Thumbnail({ media }: IMediaProps) {
  const { type, url, preview_image_url } = media[0];
  const countOfMedia = media.length - 1;
  const isNotImage = type !== MEDIA_TYPE.photo && type !== MEDIA_TYPE.gif;
  const isMultiMedia = !isNotImage && media.length > 1;

  return (
    //   filter: drop-shadow(0px 6px 12px rgba(79, 79, 79, 0.12));
    <div className="shrink-0 relative w-24 h-24 rounded-xl overflow-hidden">
      <Image src={url ?? preview_image_url ?? ''} layout="fill" objectFit="cover" />
      {isMultiMedia && (
        <div
          className="absolute right-2 bottom-2 rounded-lg font-pretendard text-xs text-white px-1 py-0.5"
          style={{
            background: 'rgba(29, 29, 31, 0.6)',
          }}
        >{`+${countOfMedia}`}</div>
      )}
      {isNotImage && <MediaType type={type} />}
    </div>
  );
}
