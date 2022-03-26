import type Card from 'features/cards/types/Card';
import React from 'react';
import { More } from 'shared/components/Icons';
import getDisplayDate from 'shared/utils/getDisplayDate';

export interface IHeaderProps {
  card: Card;
  onClick: () => void;
  isViewMode?: boolean;
}

export default function Header({ card, onClick, isViewMode }: IHeaderProps) {
  const { title, regDttm } = card;

  return (
    <div className={'flex justify-between items-center p-5 relative'}>
      <p className="font-pretendard font-bold text-2xl leading-7 text-gray1">
        {title}
        <span className="font-normal text-lg ml-1 text-gray3">
          {getDisplayDate(regDttm)}
        </span>
      </p>
      {!isViewMode && (
        <div className={'right-0'} onClick={onClick}>
          <More color={'#262F56'} size={27} />
        </div>
      )}
    </div>
  );
}
