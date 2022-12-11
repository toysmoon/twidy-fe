import Thumbnail from 'features/cards/components/Thumbnail';
import type Card from 'features/cards/types/Card';
import {
  useDeleteCardMutation,
  useMoveCardMutation,
  useUpdateCardMutation,
} from 'features/collections/queries/useCardMutations';
import { useRouter } from 'next/router';
import React, { Suspense, useState } from 'react';
import { MEDIA_TYPE } from 'shared/api/types';
import Modal from 'shared/components/Modal';
import useToast from 'shared/hooks/useToast';
import ReferDetail from '../LikedCardList/ReferDetail';
import Twit from '../LikedCardList/Twit';
import TwitterUser from '../LikedCardList/TwitterUser';
import MoreMenu from '../MoreMenu';
import ChangeTitle from './ChangeTittle';
import Header from './Header';
import MoveTweet from './MoveTweet';

export interface IDetailedCard {
  card?: Card;
  onClose: () => void;
  isViewMode?: boolean;
}

export default function DetailedCard({ card, onClose, isViewMode }: IDetailedCard) {
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

    return <MoreMenu onClose={() => setStep(1)} onClick={setStep} onDelete={handleDelete} />;
  }

  if (step === 3) {
    const handleClose = () => setStep(2);
    const handleSubmit = async (title: string) => {
      await updateCard({ ...card, title });
      toast('Your changes have been applied!');
      onClose();
    };

    return <ChangeTitle card={card} onSave={handleSubmit} onClose={handleClose} />;
  }

  if (step === 4) {
    return (
      <MoveTweet
        collectionId={collectionId}
        onSubmit={async cId => {
          await moveCard({ ...card, collectionId: cId });
          toast('Your changes have been applied!');
          onClose();
        }}
        onClose={() => setStep(2)}
      />
    );
  }

  const { media, author, refers, text, url } = card;
  const isHaveMedia = media && media.length > 0;
  const isHaveRefer = refers && refers.length > 0;
  const mediaType = media?.[0]?.type ?? MEDIA_TYPE.photo;

  return (
    <>
      <Modal isOpen={true} onClose={onClose}>
        <Header card={card} onClick={() => setStep(2)} isViewMode={isViewMode} />
        <article className={'m-5 mt-0 p-4 border rounded-xl border-gray6'}>
          <TwitterUser profileImage={author.profileImageUrl} twitterId={author.username} name={author.name} url={url} />
          <Twit twit={text} />
          {isHaveMedia && <Thumbnail author={author} type={mediaType} media={media} />}
          {isHaveRefer && (
            <Suspense fallback={null}>
              <ReferDetail refer={refers[0]} />
            </Suspense>
          )}
        </article>
      </Modal>
    </>
  );
}
