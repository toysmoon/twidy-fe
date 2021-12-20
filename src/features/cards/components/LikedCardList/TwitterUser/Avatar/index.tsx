import { FC } from 'react';
import Image from 'shared/components/Image';
import { sizes } from 'shared/styles';

interface IAvatarProps {
  src: string;
}

const Avatar: FC<IAvatarProps> = ({ src }) => {
  return (
    <div className="w-5 h-5 rounded-full overflow-hidden">
      <Image
        src={src}
        width={sizes.twitterAvatar}
        height={sizes.twitterAvatar}
      />
    </div>
  );
};

export default Avatar;
