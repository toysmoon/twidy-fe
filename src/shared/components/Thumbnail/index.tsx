import { FC } from 'react';
import { Media, MEDIA_TYPE } from 'shared/api/types';
import ImageThumbnail from './ImageThumbnail';
import VideoThumbnail from './VideoThumbnail';

interface ICardThumbProps {
  images: Media[];
}

const CardThumbnail: FC<ICardThumbProps> = ({ images }) => {
  const [image] = images;

  if (image.type === MEDIA_TYPE.photo) {
    return <ImageThumbnail image={image.url ?? image.preview_image_url} />;
  } else if (image.type === MEDIA_TYPE.video) {
    return <VideoThumbnail image={image.preview_image_url} />;
  } else if (image.preview_image_url) {
    return <ImageThumbnail image={image.preview_image_url} />;
  }

  return null;
};

export default CardThumbnail;
