import { FC } from 'react';
import Image from 'shared/components/Image';
import { sizes } from 'shared/styles';

interface IAvatarProps {
  src?: string;
}

const Avatar: FC<IAvatarProps> = ({ src = '' }) => {
  return (
    <div className="w-12 h-12 rounded-full border-3 overflow-hidden border-white">
      <Image
        src={src}
        width={sizes.profileAvatar}
        height={sizes.profileAvatar}
      />
    </div>
  );
};

export default Avatar;
