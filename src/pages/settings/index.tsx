import DeleteAccount from 'features/settings/components/DeleteAccount';
import SettingItem from 'features/settings/components/SettingItem';
import {
  useMutateAutoDelete,
  useSettingQuery,
} from 'features/settings/queries/useSettingQuery';
import postLogout from 'features/users/api/postLogout';
import useUserQuery from 'features/users/queries/useUserQuery';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import Toggle from 'shared/components/Form/Toggle';
import LowLayout from 'shared/components/Templates/Layout/LowLayout';

export default function SettingTheme() {
  const router = useRouter();
  const user = useUserQuery();
  const { data: setting } = useSettingQuery(user?.userId);
  const { mutateAsync: updateAuthDelete, isLoading } = useMutateAutoDelete(
    user?.userId
  );

  const isChecked = !!setting?.autoDelete;
  const handleToggle = useCallback(
    () => updateAuthDelete(!isChecked),
    [isChecked, updateAuthDelete]
  );

  const handleLogout = useCallback(async () => {
    await postLogout();
    router.replace('/about');
  }, [router]);

  return (
    <LowLayout title="My Account">
      <ul className="px-4">
        <SettingItem
          title="YOUR ID"
          right={<p className="text-white leading-5">{`@${user?.userName}`}</p>}
        />
        <SettingItem
          title="SYNC TWIDY WITH TWITTER"
          description={
            <>
              When you save a tweet on twidy,
              <br />
              the liked for that tweet is automatically turned off
            </>
          }
          right={
            <Toggle
              isChecked={isChecked}
              isLoading={isLoading}
              onClick={handleToggle}
            />
          }
        />
        <SettingItem title="SIGN OUT" onClick={handleLogout} />
      </ul>
      <DeleteAccount />
    </LowLayout>
  );
}
