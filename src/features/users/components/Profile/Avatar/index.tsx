import { FC } from 'react';
import Image from 'shared/components/Image';
import { sizes } from 'shared/styles';

interface IAvatarProps {
  src?: string;
}

const Avatar: FC<IAvatarProps> = ({ src = '' }) => {
  return (
    <div className="w-16 h-16 rounded-full border-4 overflow-hidden">
      <Image
        src={src}
        width={sizes.profileAvatar}
        height={sizes.profileAvatar}
      />
    </div>
  );
};

export default Avatar;
