import useUserQuery from 'features/users/queries/useUserQuery';
import React, { FC } from 'react';
import ProfileView from '../ProfileView';

const Profile: FC = () => {
  const user = useUserQuery();

  return <ProfileView user={user} />;
};

export default Profile;
