import React, { FC } from 'react';
import Image from 'shared/components/Image';

interface ICardThumbProps {
  image: string;
}

const ImageThumbnail: FC<ICardThumbProps> = ({ image }) => {
  return (
    <div className="relative pt-50-percent bg-white rounded-2xl overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default React.memo(ImageThumbnail);
