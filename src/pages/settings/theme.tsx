import CollectionItem from 'features/collections/components/CollectionItem';
import useCollecitonQuery from 'features/collections/queries/useCollectionQuery';
import { MockTab, ThemeSelect } from 'features/settings/components/Theme';
import putSetting from 'features/users/api/putSetting';
import Profile from 'features/users/components/Profile';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import SaveLayout from 'shared/components/Templates/Layout/SaveLayout';
import useTheme, { colorList } from 'shared/hooks/useTheme';
import useToast from 'shared/hooks/useToast';
import { userState } from 'shared/states/userState';

export default function SettingTheme() {
  const toast = useToast();
  const router = useRouter();
  const theme = useTheme();
  const [user, setUser] = useRecoilState(userState);
  const [color, setColor] = useState(colorList[theme]);
  const collections = useCollecitonQuery();

  const handleApply = useCallback(async () => {
    if (!user?.setting || !color) {
      return router.back();
    }

    const newSetting = { ...user.setting, theme: color };
    await putSetting(newSetting);

    setUser({ ...user, setting: newSetting });
    router.back();
    toast('New theme has been applied!');
  }, [user, setUser, color]);

  if (user === null) {
    return;
  }

  return (
    <SaveLayout onApply={handleApply} color={color}>
      <Profile
        src={'http://pbs.twimg.com/123'}
        name={user.name}
        onClick={() => {}}
      />
      <MockTab />
      <div className="p-4 flex flex-col gap-3">
        {collections.map((c) => (
          <CollectionItem key={`collection-item-${c.collectionId}`} data={c} />
        ))}
      </div>
      <ThemeSelect value={color} onChange={setColor} />
    </SaveLayout>
  );
}
