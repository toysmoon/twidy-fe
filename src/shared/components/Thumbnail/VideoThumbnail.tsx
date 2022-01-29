import { Video } from 'features/collections/components/Icons';
import React, { FC } from 'react';
import Image from 'shared/components/Image';

interface ICardThumbProps {
  image?: string;
  tweetUrl: string;
}

const VideoThumbnail: FC<ICardThumbProps> = ({ image, tweetUrl }) => {
  if (!image) {
    return null;
  }

  return (
    <a href={tweetUrl} target="_blank">
      <div className=" relative pt-50-percent bg-white rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
          <Image src={image} layout="fill" objectFit="cover" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-14 h-14 bg-white bg-opacity-50 rounded-full flex justify-center items-center">
            <Video />
          </div>
        </div>
      </div>
    </a>
  );
};

export default React.memo(VideoThumbnail);
