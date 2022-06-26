import React, { FC, useCallback } from 'react';
import { User } from 'shared/api/types';
import { Copy } from 'shared/components/Icons';
import useToast from 'shared/hooks/useToast';
import Avatar from '../Profile/Avatar';
import Name from '../Profile/Name';

interface ProfileProps {
  user?: User;
  isViewMode?: boolean;
}

const ProfileView: FC<ProfileProps> = ({ user, isViewMode = false }) => {
  const toast = useToast();
  const url = `twidy.app/${user?.userName}`;

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(`https://${url}`);
      toast('Copied to clipboard');
    } catch {}
  }, [toast]);

  return (
    <div className="flex flex-col gap-4 items-center pt-16 pb-6">
      <Avatar
        src={user?.profileImageUrl ?? 'http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'}
      />
      <Name>{`${user?.name}'s Likes`}</Name>
      {!isViewMode && (
        <div onClick={handleCopy} className="flex justify-center items-center opacity-80 -mt-4">
          <p className=" text-base text-white mr-1">{url}</p>
          <Copy />
        </div>
      )}
    </div>
  );
};

export default ProfileView;
