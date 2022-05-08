import cn from 'classnames';
import React from 'react';
import { ArrowRight } from 'shared/components/Icons';
import TwitterEmoji from 'shared/components/TwitterEmoji';

export interface IMenuItem {
  emoji: string;
  label: string;
  isWarning?: boolean;
  onClick: () => void;
}

export default function MenuItem({ emoji, label, isWarning = false, onClick }: IMenuItem) {
  const labelClass = cn('leading-5', isWarning ? 'text-red-400' : 'text-black');

  return (
    <li onClick={onClick} className={cn('flex', 'justify-between', 'items-center', 'bg-white', 'py-4')}>
      <div className="flex gap-2 items-center">
        <TwitterEmoji value={emoji} size={16} />
        <p className={labelClass}>{label}</p>
      </div>
      <ArrowRight color={'#E0E0E0'} />
    </li>
  );
}
