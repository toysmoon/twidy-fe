import React, { FC } from 'react';
import { Copy } from 'shared/components/Icons';
import useToast from 'shared/hooks/useToast';
import Avatar from './Avatar';
import Name from './Name';

interface IProfileProps {
  name: string;
  src: string;
  onClick: () => void;
}

const Profile: FC<IProfileProps> = ({ name, src, onClick }) => {
  const toast = useToast();
  const url = `twidy.app/${name}`;
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`https://${url}`);
      toast('Copied to clipboard');
    } catch (e) {}
  };

  return (
    <div onClick={onClick} className="flex flex-col items-center pt-16 pb-10">
      <Avatar src={src} />
      <Name>{`${name}'s Likes`}</Name>
      <div onClick={handleCopy} className="flex justify-center items-center">
        <p className=" text-base text-gray-400 mr-1">{url}</p>
        <Copy />
      </div>
    </div>
  );
};

export default Profile;
