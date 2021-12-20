import { MEDIA_TYPE } from 'shared/api/types';
import React, { ReactNode } from 'react';
import { Poll, TopRight, Video } from '../../../collections/components/Icons';

interface IMediaType {
  type: MEDIA_TYPE;
}

export default function MediaType({ type }: IMediaType) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex justify-center items-center bg-gray5 rounded-full">
      {mediaIcons[type]}
    </div>
  );
}

const mediaIcons: Record<MEDIA_TYPE, ReactNode | null> = {
  [MEDIA_TYPE.poll]: <Poll />,
  [MEDIA_TYPE.video]: <Video />,
  [MEDIA_TYPE.place]: <TopRight />,
  [MEDIA_TYPE.quote]: <TopRight />,
  [MEDIA_TYPE.photo]: null,
  [MEDIA_TYPE.gif]: null,
};
