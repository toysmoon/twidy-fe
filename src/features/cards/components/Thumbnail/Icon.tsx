import React, { useMemo } from 'react';
import { MEDIA_TYPE } from 'shared/api/types';
import { Poll, TopRight, Video } from '../../../collections/components/Icons';
import { IconWrapper } from './style';

interface IIconProps {
  type: MEDIA_TYPE;
}

export default function Icon({ type }: IIconProps) {
  const icon = useMemo(() => {
    switch (type) {
      case MEDIA_TYPE.video:
        return <Video />;
      case MEDIA_TYPE.poll:
        return <Poll />;
      case MEDIA_TYPE.place:
      case MEDIA_TYPE.quote:
        return <TopRight />;
      default:
        return <div />;
    }
  }, [type]);

  return <IconWrapper>{icon}</IconWrapper>;
}
