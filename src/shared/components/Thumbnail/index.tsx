import { Media } from 'shared/api/types';
import { FC } from 'react';
import ImageThumbnail from './ImageThumbnail';
import LinkThumbnail from './LinkThumbnail';

interface ICardThumbProps {
  link?: string;
  title?: string;
  images: Media[];
}

const CardThumbnail: FC<ICardThumbProps> = ({ link, title, images }) => {
  const [image] = images;

  if (typeof link === 'string' && typeof title === 'string') {
    return (
      <LinkThumbnail title={title} link={link} image={image.mediaURLHttps} />
    );
  }

  return <ImageThumbnail image={image.mediaURLHttps} />;
};

export default CardThumbnail;
