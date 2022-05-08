import type Card from 'features/cards/types/Card';
import React from 'react';
import getDisplayDate from 'shared/utils/getDisplayDate';
import MoreButton from '../MoreButton';

export interface IHeaderProps {
  card: Card;
  onClick: () => void;
  isViewMode?: boolean;
}

export default function Header({ card, onClick, isViewMode }: IHeaderProps) {
  const { title, regDttm } = card;

  return (
    <div className="flex justify-between items-center p-5 pb-4">
      <div className="flex flex-col">
        <span className="text-xs text-gray4">{getDisplayDate(regDttm)}</span>
        <span className="text-black text-sm font-bold">{title ?? ''}</span>
      </div>
      {!isViewMode && <MoreButton onClick={onClick} classNames="block" />}
    </div>
  );
}
