import cn from 'classnames';
import React from 'react';
import { Author, Media, MEDIA_TYPE } from 'shared/api/types';
import Image from 'shared/components/Image';
import Icon from './Icon';

export interface IThumbnailProps {
  type: MEDIA_TYPE;
  author: Author;
  media: Media[];
}

const imageTypes = [MEDIA_TYPE.gif, MEDIA_TYPE.photo];

export default function Thumbnail({ type, author, media }: IThumbnailProps) {
  const isNotImage = imageTypes.every(iType => iType !== type);

  if (isNotImage) {
    return (
      <div className="relative mt-4 rounded-xl bg-cover bg-center bg-src">
        <div className="pb-50-percent" />
        <p className="text-lg leading-5 text-white absolute top-5 left-5">{getContent(type, author)}</p>
        <Icon type={type} />
        <style jsx>{`
          .bg-src {
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url(${media[0]?.url ?? media[0]?.previewImageUrl ?? author.profileImageUrl});
            background-position: center;
            background-size: cover;
          }
        `}</style>
      </div>
    );
  }

  const images = media.slice(0, 4);

  return (
    <div className="relative mt-4 overflow-hidden">
      <div className="pb-50-percent" />
      <div className="grid grid-cols-2 grid-rows-2 gap-0.5 absolute inset-0 rounded-md overflow-hidden">
        {images.map((image, i) => (
          <div key={`thumb-image-${i}`} className={cn(getGridClass(images.length, i), 'relative')}>
            <Image src={image.url ?? image.preview_image_url} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

function getContent(type: MEDIA_TYPE, author: Author) {
  switch (type) {
    case MEDIA_TYPE.video:
      return `${author.name}'s video on Twitter`;
    case MEDIA_TYPE.poll:
      return `View poll on Twitter`;
    case MEDIA_TYPE.place:
      return `View map on Twitter`;
    case MEDIA_TYPE.quote:
      return `${author.name}'s quoted tweet on Twitter`;
  }
}

export function getGridClass(totalCount: number, index: number) {
  if (totalCount === 1) {
    return 'col-span-2 row-span-2';
  }

  if (totalCount === 2) {
    return 'row-span-2';
  }

  if (totalCount === 3 && index === 0) {
    return 'row-span-2';
  }

  return '';
}
