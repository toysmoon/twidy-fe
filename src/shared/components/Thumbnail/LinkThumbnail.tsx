import React, { FC } from 'react';
import Image from 'shared/components/Image';

interface ICardThumbProps {
  title: string;
  link: string;
  image: string;
}

const LinkThumbnail: FC<ICardThumbProps> = ({ title, link, image }) => {
  return (
    <div className="w-full h-16 flex bg-white border border-gray-200 border-solid box-border rounded-xl overflow-hidden">
      <div className="w-16 relative">
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
      <div className="p-2 flex flex-col justify-between">
        <p className="m-0 text-sm leading-4 text-black">{title}</p>
        <p className="m-0 text-sm leading-4 text-gray3">{link}</p>
      </div>
    </div>
  );
};

export default React.memo(LinkThumbnail);
