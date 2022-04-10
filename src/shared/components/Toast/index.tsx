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
    'w-full',
    'p-5',
    'transition-all',
    'duration-500',
  ];

  const displayClass = toast.open
    ? 'opacity-100'
    : 'opacity-20 -translate-y-20';

  return (
    <div className={classNames(toastClass, displayClass)}>
      <div className="bg-white w-full h-14 shadow-toast rounded-xl flex justify-center items-center text-base text-gray1">
        {toast.message}
      </div>
    </div>
  );
};

export default Toast;
