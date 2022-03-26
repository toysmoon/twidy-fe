import cn from 'classnames';
import React from 'react';
import { ArrowRight } from 'shared/components/Icons';
import { colors } from 'shared/styles';

export interface IMenuItem {
  label: string;
  isWarning?: boolean;
  onClick: () => void;
}

export default function MenuItem({
  label,
  isWarning = false,
  onClick,
}: IMenuItem) {
  const labelClass = cn(
    'font-pretendard text-lg leading-5',
    isWarning ? 'text-red' : 'text-black'
  );

  return (
    <li
      onClick={onClick}
      className={cn(
        'flex',
        'justify-between',
        'items-center',
        'bg-white',
        'py-4'
      )}
    >
      <p className={labelClass}>{label}</p>
      <ArrowRight color={colors.gray3} />
    </li>
  );
}
