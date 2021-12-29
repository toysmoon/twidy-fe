import { useSettingQuery } from 'features/settings/queries/useSettingQuery';
import useUserQuery from 'features/users/queries/useUserQuery';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from 'shared/states/themeState';
import { setCookie } from 'shared/utils/cookie';

export default function ThemeUpdater() {
  const [_, setTheme] = useRecoilState(themeState);
  const user = useUserQuery();
  const { data: setting } = useSettingQuery(user?.userId);

  useEffect(() => {
    if (!setting) {
      return;
    }

    setTheme(setting.theme);
    setCookie('theme', setting.theme, 30);
  }, [setting]);

  return null;
}
