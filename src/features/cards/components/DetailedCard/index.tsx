import Thumbnail from 'features/cards/components/Thumbnail';
import useUpdateCardMutation, {
  useDeleteCardMutation,
  useMoveCardMutation,
} from 'features/cards/queries/useUpdateCardMutation';
import type Card from 'features/cards/types/Card';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { MEDIA_TYPE } from 'shared/api/types';
import Modal from 'shared/components/Modal';
import useToast from 'shared/hooks/useToast';
import MoreMenu from '../MoreMenu';
import ChangeTitle from './ChangeTittle';
import Header from './Header';
import MoveTweet from './MoveTweet';
import ViewTweet from './ViewTweet';

export interface IDetailedCard {
  card?: Card;
  onClose: () => void;
  isViewMode?: boolean;
}

export default function DetailedCard({
  card,
  onClose,
  isViewMode,
}: IDetailedCard) {
  const toast = useToast();
  const router = useRouter();
  const collectionId = Number(router.query.collectionId);
  const [step, setStep] = useState(1);
  const { mutateAsync: updateCard } = useUpdateCardMutation(card?.collectionId);
  const { mutateAsync: moveCard } = useMoveCardMutation(collectionId);
  const { mutateAsync: deleteCard } = useDeleteCardMutation(collectionId);

  if (!card) {
    return null;
  }

  if (step === 2) {
    const handleDelete = async () => {
      await deleteCard(card.cardId);
      toast('Your changes have been applied!');
      onClose();
    };

    return (
      <MoreMenu
        onClose={() => setStep(1)}
        onClick={setStep}
        onDelete={handleDelete}
      />
    );
  }

  if (step === 3) {
    const handleClose = () => setStep(2);
    const handleSubmit = async (title: string) => {
      await updateCard({ ...card, title });
      toast('Your changes have been applied!');
      onClose();
    };

    return (
      <ChangeTitle card={card} onSave={handleSubmit} onClose={handleClose} />
    );
  }

  if (step === 4) {
    return (
      <MoveTweet
        collectionId={collectionId}
        onSubmit={async (cId) => {
          await moveCard({ ...card, collectionId: cId });
          toast('Your changes have been applied!');
          onClose();
        }}
        onClose={() => setStep(2)}
      />
    );
  }

  const { media, author, text, url } = card;
  const isHaveMedia = media && media.length > 0;
  const mediaType = media?.[0]?.type ?? MEDIA_TYPE.photo;

  return (
    <>
      <Modal isOpen={true} onClose={onClose}>
        <Header
          card={card}
          onClick={() => setStep(2)}
          isViewMode={isViewMode}
        />
        <div className={'p-5 pt-0'}>
          {isHaveMedia && (
            <Thumbnail author={author} type={mediaType} media={media} />
          )}
          <p className={'pt-5 font-roboto text-lg leading-7 text-black'}>
            {text}
          </p>
          <div className={'flex justify-end'}>
            <ViewTweet link={url} />
          </div>
        </div>
      </Modal>
    </>
  );
}
