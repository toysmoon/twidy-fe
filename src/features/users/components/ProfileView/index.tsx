import { useCollectionQueryById } from 'features/collections/queries/useCollectionQuery';
import React, { FC, useCallback, useMemo } from 'react';
import { User } from 'shared/api/types';
import { Export } from 'shared/components/Icons';
import Twitter from 'shared/components/Icons/Twitter';
import Spacer from 'shared/components/Spacer';
import useToast from 'shared/hooks/useToast';
import { colors } from 'shared/styles';
import Avatar from '../Profile/Avatar';
import Name from '../Profile/Name';

interface ProfileProps {
  user?: User;
}

const ProfileView: FC<ProfileProps> = ({ user }) => {
  const toast = useToast();
  const url = `twidy.app/${user?.userName}`;

  const collections = useCollectionQueryById(user!.userId);
  const collectionsCount = useMemo(() => {
    const twitCount = collections.reduce((acc, cur) => acc + (cur.count ?? 0), 0);
    return `${collections.length} collections · ${twitCount} tweets`;
  }, [collections]);

  const handleCopy = useCallback(async () => {
    try {
      navigator.share({
        title: `Twidy`,
        text: `${user?.name}'s Twidy`,
        url: `https://${url}`,
      });
    } catch {
      await navigator.clipboard.writeText(`https://${url}`);
      toast('Copied to clipboard');
    }
  }, [user, toast]);

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <Spacer size={30} />
      <Avatar
        src={user?.profileImageUrl ?? 'http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'}
      />
      <Spacer size={24} />
      <Name>{`${user?.name}'s Twidy`}</Name>
      <Spacer size={8} />
      <p className="text-p2-reg text-white opacity-50">{collectionsCount}</p>
      <Spacer size={24} />
      <div className="flex gap-4">
        <a href={`https://twitter.com/${user?.userName}`} target="_blank">
          <div className="w-10 h-10 bg-white bg-opacity-10  rounded-full flex justify-center items-center">
            <Twitter color={colors.white} />
          </div>
        </a>
        <div
          onClick={handleCopy}
          className="w-10 h-10 bg-black bg-opacity-10 rounded-full flex justify-center items-center"
        >
          <Export />
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
