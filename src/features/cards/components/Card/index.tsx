import useGlobalCard from 'features/cards/hooks/useGlobalCard';
import type Card from 'features/cards/types/Card';
import {
  useDeleteCardMutation,
  useMoveCardMutation,
  useUpdateCardMutation,
} from 'features/collections/queries/useCardMutations';
import { useRouter } from 'next/router';
import React, { MouseEvent, useCallback, useState } from 'react';
import useToast from 'shared/hooks/useToast';
import getDisplayDate from 'shared/utils/getDisplayDate';
import ChangeTitle from '../DetailedCard/ChangeTittle';
import MoveTweet from '../DetailedCard/MoveTweet';
import MoreButton from '../MoreButton';
import MoreMenu from '../MoreMenu';
import Content from './Content';

export interface ITweetProps {
  card: Card;
  isViewMode?: boolean;
}

enum STEP {
  DEFAULT,
  MORE_MENU,
  CHANGE_TITLE,
  MOVE_TWEET,
}

export default function CollectionTweet({
  card,
  isViewMode = false,
}: ITweetProps) {
  const {
    query: { collectionId },
  } = useRouter();
  const toast = useToast();
  const open = useGlobalCard(card);
  const { title, regDttm, text, media } = card;
  const [step, setStep] = useState(STEP.DEFAULT);
  const setStepDefault = useCallback(() => setStep(STEP.DEFAULT), []);

  const { mutateAsync: updateCard } = useUpdateCardMutation(card?.collectionId);
  const { mutateAsync: moveCard } = useMoveCardMutation(Number(collectionId));
  const { mutateAsync: deleteCard } = useDeleteCardMutation(
    Number(collectionId)
  );

  const handleMoreButton = useCallback((e: MouseEvent) => {
    setStep(STEP.MORE_MENU);
    e.stopPropagation();
  }, []);

  const handleMoreButtonClick = (step: number) => {
    if (step === 3) {
      setStep(STEP.CHANGE_TITLE);
    }

    if (step === 4) {
      setStep(STEP.MOVE_TWEET);
    }
  };

  const handleDelete = async () => {
    await deleteCard(card.cardId);
    toast('Your changes have been applied!');
    setStepDefault();
  };

  const handleClose = () => setStep(STEP.MORE_MENU);
  const handleChangeSubmit = async (title: string) => {
    await updateCard({ ...card, title });
    toast('Your changes have been applied!');
    setStepDefault();
  };

  const handleMoveSubmit = async (collectionId: number) => {
    await moveCard({ ...card, collectionId });
    toast('Your changes have been applied!');
    setStepDefault();
  };

  return (
    <>
      <div
        onClick={open}
        className="bg-white rounded-3xl p-5 m-4 my-2 box-border relative"
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-gray4">
              {getDisplayDate(regDttm)}
            </span>
            <span className="text-black text-sm font-bold">{title ?? ''}</span>
          </div>
          {!isViewMode && (
            <MoreButton onClick={handleMoreButton} classNames="block" />
          )}
        </div>
        <div className="bg-gray6 w-full h-1px mt-3" />
        <Content text={text} media={media} />
      </div>

      {step === STEP.MORE_MENU && (
        <MoreMenu
          onClose={setStepDefault}
          onClick={handleMoreButtonClick}
          onDelete={handleDelete}
        />
      )}
      {step === STEP.CHANGE_TITLE && (
        <ChangeTitle
          card={card}
          onSave={handleChangeSubmit}
          onClose={handleClose}
        />
      )}
      {step === STEP.MOVE_TWEET && (
        <MoveTweet
          collectionId={Number(collectionId as string)}
          onSubmit={handleMoveSubmit}
          onClose={handleClose}
        />
      )}
    </>
  );
}
