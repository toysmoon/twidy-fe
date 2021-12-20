import cn from 'classnames';
import React from 'react';
import { Author, Media, MEDIA_TYPE } from 'shared/api/types';
import Image from 'shared/components/Image';
import Icon from './Icon';
import { Background, ThumbName, ThumbSize, ThumbWrapper } from './style';

export interface IThumbnailProps {
  type: MEDIA_TYPE;
  author: Author;
  media: Media[];
}

const imageTypes = [MEDIA_TYPE.gif, MEDIA_TYPE.photo];

export default function Thumbnail({ type, author, media }: IThumbnailProps) {
  const isNotImage = imageTypes.every((iType) => iType !== type);

  if (isNotImage) {
    return (
      <Background bg={author.miniProfileImageURLHttps}>
        <ThumbSize />
        <ThumbName>{getContent(type, author)}</ThumbName>
        <Icon type={type} />
      </Background>
    );
  }

  const images = media.slice(0, 4);

  return (
    <ThumbWrapper>
      <ThumbSize />
      <div className="grid grid-cols-2 grid-rows-2 gap-0.5 absolute inset-0 rounded-md overflow-hidden">
        {images.map((image, i) => (
          <div
            key={`thumb-image-${i}`}
            className={cn(getGridClass(images.length, i), 'relative')}
          >
            <Image src={image.mediaURLHttps} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </ThumbWrapper>
  );
}

function getContent(type: MEDIA_TYPE, author: Author) {
  switch (type) {
    case MEDIA_TYPE.video:
      return `${author.screenName}'s video on Twitter`;
    case MEDIA_TYPE.poll:
      return `View poll on Twitter`;
    case MEDIA_TYPE.place:
      return `View map on Twitter`;
    case MEDIA_TYPE.quote:
      return `${author.screenName}'s quoted tweet on Twitter`;
  }
}

function getGridClass(totalCount: number, index: number) {
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
