import { FC } from 'react';
import { Media, MEDIA_TYPE } from 'shared/api/types';
import ImageThumbnail from './ImageThumbnail';
import MultiImageThumbnail from './MultiImageThumbnail';
import VideoThumbnail from './VideoThumbnail';

interface ICardThumbProps {
  images: Media[];
  tweetUrl: string;
}

const CardThumbnail: FC<ICardThumbProps> = ({ images, tweetUrl }) => {
  const [image] = images;

  if (image.type === MEDIA_TYPE.photo) {
    return <MultiImageThumbnail images={images} />;
  } else if (image.type === MEDIA_TYPE.video) {
    return <VideoThumbnail image={image.previewImageUrl} tweetUrl={tweetUrl} />;
  } else if (image.previewImageUrl) {
    return <ImageThumbnail image={image.previewImageUrl} />;
  }

  return null;
};

export default CardThumbnail;
