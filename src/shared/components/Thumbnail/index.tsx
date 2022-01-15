import { FC } from 'react';
import { Media, MEDIA_TYPE } from 'shared/api/types';
import ImageThumbnail from './ImageThumbnail';

interface ICardThumbProps {
  images: Media[];
}

const CardThumbnail: FC<ICardThumbProps> = ({ images }) => {
  const [image] = images;

  if (image.type === MEDIA_TYPE.photo && image.url) {
    return <ImageThumbnail image={image.url} />;
  } else if (image.preview_image_url) {
    return <ImageThumbnail image={image.preview_image_url} />;
  }

  return null;
};

export default CardThumbnail;
