import React, { FC } from 'react';
import Twitter from 'shared/components/Icons/Twitter';
import Avatar from './Avatar';
import Id from './Id';
import Name from './Name';

interface ITwitterUserProps {
  profileImage: string;
  name: string;
  twitterId: string;
  url: string;
  hideLogo?: boolean;
}

const TwitterUser: FC<ITwitterUserProps> = ({ profileImage, twitterId, name, url, hideLogo = false }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex">
        <Avatar src={profileImage} />
        <div className="flex flex-col justify-between ml-2">
          <Name>{name}</Name>
          <Id id={twitterId} />
        </div>
      </div>
      {!hideLogo && (
        <a href={url} target="_blank">
          <Twitter color="#1DA1F2" />
        </a>
      )}
    </div>
  );
};

export default TwitterUser;
