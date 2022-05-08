import React, { FC } from 'react';
import { User } from 'shared/api/types';
import Avatar from '../Profile/Avatar';
import Name from '../Profile/Name';

interface ProfileProps {
  user?: User;
}

const ProfileView: FC<ProfileProps> = ({ user }) => {
  return (
    <div className="flex flex-col gap-4 items-center pt-16 pb-6">
      <Avatar
        src={user?.profileImageUrl ?? 'http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'}
      />
      <Name>{`${user?.name}'s Likes`}</Name>
    </div>
  );
};

export default ProfileView;
