import { useRouter } from 'next/router';

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
];

export default function UserMenu({ onClose }: IUserMenu) {
  const router = useRouter();

  return (
    <>
      <div onClick={onClose} className="fixed inset-0" />
      <ul className="absolute top-10 right-0 m-0 p-0 bg-white rounded-2xl list-none drop-shadow-lg z-10 divide-gray-200">
        {menus.map(({ title, path, emoji }) => (
          <li
            onClick={() => router.push(path)}
            key={title}
            className="w-60 h-14 px-5 whitespace-nowrap flex items-center font-pretendard font-bold text-base leading-5 text-gray1 gap-2"
          >
            <span>{emoji}</span>
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
