import React, { FC } from 'react';
import Avatar from './Avatar';
import Id from './Id';
import Name from './Name';

interface ITwitterUserProps {
  profileImage: string;
  name: string;
  twitterId: string;
}

const TwitterUser: FC<ITwitterUserProps> = ({
  profileImage,
  twitterId,
  name,
}) => {
  return (
    <div>
      <a className="flex">
        <Avatar src={profileImage} />
        <Name>{name}</Name>
        <Id id={twitterId} />
      </a>
    </div>
  );
};

export default TwitterUser;
