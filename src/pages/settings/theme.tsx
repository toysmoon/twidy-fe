import CollectionItem from 'features/collections/components/CollectionItem';
import useCollecitonQuery from 'features/collections/queries/useCollectionQuery';
import { MockTab, ThemeSelect } from 'features/settings/components/Theme';
import { useMutateTheme } from 'features/settings/queries/useSettingQuery';
import Profile from 'features/users/components/Profile';
import useUserQuery from 'features/users/queries/useUserQuery';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import SaveLayout from 'shared/components/Templates/Layout/SaveLayout';
import useToast from 'shared/hooks/useToast';
import { themeState } from 'shared/states/themeState';

export default function SettingTheme() {
  const toast = useToast();
  const router = useRouter();

  const [theme, setTheme] = useRecoilState(themeState);
  const [color, setColor] = useState(theme);

  const user = useUserQuery();
  const collections = useCollecitonQuery(user!.userId);
  const { mutateAsync: updateTheme } = useMutateTheme(user!.userId);

  const handleApply = useCallback(async () => {
    await updateTheme(color);

    setTheme(color);
    router.back();
    toast('New theme has been applied!');
  }, [user, color]);

  console.log(color);

  return (
    <SaveLayout onApply={handleApply} color={color}>
      <Profile />
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
