import useUserQuery from 'features/users/queries/useUserQuery';
import { FC, useCallback } from 'react';
import { Copy } from 'shared/components/Icons';
import Spacer from 'shared/components/Spacer';
import useToast from 'shared/hooks/useToast';
import Avatar from '../Profile/Avatar';
import Name from '../Profile/Name';

const Profile: FC = () => {
  const user = useUserQuery();
  const toast = useToast();
  const url = `twidy.app/${user?.userName}`;

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
    <div className="p-4">
      <Avatar
        src={user?.profileImageUrl ?? 'http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'}
      />
      <Spacer size={16} />
      <Name>{`${user?.name}'s Twidy`}</Name>
      <Spacer size={2} />
      <div onClick={handleCopy} className="flex items-center gap-1 opacity-50 cursor-pointer">
        <Copy />
        <div className="flex gap-1 pt-1">
          <p className="text-caption-tiny text-white">Share link:</p>
          <p className="text-caption-tiny text-white underline">{url}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
