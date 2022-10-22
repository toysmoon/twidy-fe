import { COLLECTION_COLOR } from 'features/cards/components/ColorPicker';
import { useMutateTheme } from 'features/settings/queries/useSettingQuery';
import useUserQuery from 'features/users/queries/useUserQuery';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import useToast from 'shared/hooks/useToast';
import { themeState } from 'shared/states/themeState';
import { setCookie } from 'shared/utils/cookie';
import ChangeTheme from './ChangeTheme';

interface IUserMenu {
  onClose: () => void;
}

const menus = [
  {
    title: 'Edit collection list',
    path: '/settings/collection',
    emoji: '🗂',
  },
  { title: 'Change theme', path: '/settings/theme', emoji: '🎨' },
  { title: 'My account', path: '/settings', emoji: '👤' },
  {
    title: 'About Twidy',
    path: 'https://sungjungjo.notion.site/About-Twidy-7c5c2a6b765c421ebb7137d4e8a70362',
    emoji: '👋',
  },
];

export default function UserMenu({ onClose }: IUserMenu) {
  const router = useRouter();

  const [isThemeOpen, setThemeOpen] = useState(false);
  const user = useUserQuery();
  const toast = useToast();
  const setTheme = useSetRecoilState(themeState);
  const { mutateAsync: updateTheme } = useMutateTheme(user!.userId);
  const handleApply = useCallback(
    async (color: COLLECTION_COLOR) => {
      await updateTheme(color);

      setCookie('theme', color, 30);
      setTheme(color);
      setThemeOpen(false);
      onClose();
      toast('New theme has been applied!');
    },
    [user]
  );

  const handleClickMenu = (path: string) => {
    if (path === '/settings/theme') {
      setThemeOpen(true);
      return;
    }

    router.push(path);
  };

  return (
    <>
      <div onClick={onClose} className="fixed inset-0" />
      <ul className="absolute top-10 right-0 m-0 p-0 bg-white rounded-2xl list-none drop-shadow-lg z-10 divide-gray-200">
        {menus.map(({ title, path, emoji }) => (
          <li
            onClick={() => handleClickMenu(path)}
            key={title}
            className="w-60 h-14 px-5 whitespace-nowrap flex items-center font-pretendard font-bold text-base leading-5 text-gray1 gap-2"
          >
            <span>{emoji}</span>
            <span>{title}</span>
          </li>
        ))}
      </ul>
      <ChangeTheme
        onSubmit={handleApply}
        open={isThemeOpen}
        onClose={() => setThemeOpen(false)}
      />
    </>
  );
}
