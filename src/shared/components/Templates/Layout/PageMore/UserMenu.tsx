import { useRouter } from 'next/router';

interface IUserMenu {
  onClose: () => void;
}

const menus = [
  { title: '🗂 Align coleection', path: '/settings/collection' },
  { title: '🎨 Color theme', path: '/settings/theme' },
  { title: '👤 My account', path: '/settings' },
];

export default function UserMenu({ onClose }: IUserMenu) {
  const router = useRouter();

  return (
    <>
      <div onClick={onClose} className="fixed inset-0" />
      <ul className="absolute top-10 right-0 m-0 p-0 bg-white rounded-2xl list-none drop-shadow-lg z-10 divide-gray-200">
        {menus.map(({ title, path }) => (
          <li
            onClick={() => router.push(path)}
            key={title}
            className="h-14 px-5 whitespace-nowrap flex items-center font-roboto font-bold text-base leading-5 uppercase text-gray1"
          >
            {title}
          </li>
        ))}
      </ul>
    </>
  );
}
