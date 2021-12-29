import { useRouter } from 'next/router';
import React, { FC, useCallback } from 'react';
import { User } from 'shared/api/types';
import { Copy } from 'shared/components/Icons';
import useToast from 'shared/hooks/useToast';
import Avatar from '../Profile/Avatar';
import Name from '../Profile/Name';

interface ProfileProps {
  user?: User;
}

const ProfileView: FC<ProfileProps> = ({ user }) => {
  const toast = useToast();
  const router = useRouter();
  const url = `twidy.app/${user?.name}`;

  const handleClick = useCallback(() => {
    router.push('');
  }, [router, user]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(`https://${url}`);
      toast('Copied to clipboard');
    } catch {}
  }, [toast]);

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center pt-16 pb-10"
    >
      <Avatar
        src={
          user?.profileImageUrl ??
          'http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'
        }
      />
      <Name>{`${user?.userName}'s Likes`}</Name>
      <div onClick={handleCopy} className="flex justify-center items-center">
        <p className=" text-base text-gray-400 mr-1">{url}</p>
        <Copy />
      </div>
    </div>
  );
};

export default ProfileView;
