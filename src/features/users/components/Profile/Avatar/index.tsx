import { FC } from 'react';
import Image from 'shared/components/Image';

interface IAvatarProps {
  src?: string;
}

const Avatar: FC<IAvatarProps> = ({ src = '' }) => {
  return (
    <div
      className="w-16 h-16 rounded-full overflow-hidden"
      style={{
        border: ' 0.5px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
      }}
    >
      <Image quality={100} src={src} />
    </div>
  );
};

export default Avatar;
