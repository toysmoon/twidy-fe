import { FC } from 'react';
import Image from 'shared/components/Image';
import { sizes } from 'shared/styles';

interface IAvatarProps {
  src?: string;
}

const Avatar: FC<IAvatarProps> = ({ src = '' }) => {
  return (
    <div
      className="w-16 h-16 rounded-full overflow-hidden"
      style={{
        border: ' 0.5px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Image src={src} width={sizes.profileAvatar} height={sizes.profileAvatar} />
    </div>
  );
};

export default Avatar;
