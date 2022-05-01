import useGlobalCard from 'features/cards/hooks/useGlobalCard';
import type Card from 'features/cards/types/Card';
import React from 'react';
import getDisplayDate from 'shared/utils/getDisplayDate';
import MoreButton from '../MoreButton';
import Content from './Content';

export interface ITweetProps {
  card: Card;
  isViewMode?: boolean;
}

export default function CollectionTweet({
  card,
  isViewMode = false,
}: ITweetProps) {
  const open = useGlobalCard(card);
  const { title, regDttm, text, media } = card;

  return (
    <div
      onClick={open}
      className="bg-white rounded-3xl p-5 m-4 box-border relative"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs text-gray4">{getDisplayDate(regDttm)}</span>
          <span className="text-black text-sm font-bold">{title ?? ''}</span>
        </div>
        {!isViewMode && <MoreButton onClick={() => {}} classNames="block" />}
      </div>
      <div className="bg-gray6 w-full h-1px my-3" />
      <Content text={text} media={media} />
    </div>
  );
}
