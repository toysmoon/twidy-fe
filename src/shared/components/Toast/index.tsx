import classNames from 'classnames';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { toastState } from 'shared/states/toastState';

interface IToastProps {}

const Toast: FC<IToastProps> = () => {
  const [toast] = useRecoilState(toastState);
  const toastClass = [
    'fixed',
    'top-0',
    'flex',
    'justify-center',
    'items-center',
    'bg-gray5',
    'w-full',
    'h-20',
    'font-pretendard',
    'font-bold',
    'text-lg',
    'leading-5',
    'text-gray1',
    'transition-opacity',
    'transition-transform',
  ];

  const displayClass = toast.open ? 'opacity-1' : 'opacity-0 -translate-y-20';

  return (
    <div className={classNames(toastClass, displayClass)}>{toast.message}</div>
  );
};

export default Toast;
