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
      <p className="font-roboto font-bold text-base leading-5">
        {title ?? ''}
        <div className="font-normal ml-1 text-gray3">
          {getDisplayDate(regDttm)}
        </div>
      </p>
      <Content text={text} media={media} />
      {!isViewMode && (
        <MoreButton onClick={() => {}} classNames="absolute top-6 right-6" />
      )}
    </div>
  );
}
