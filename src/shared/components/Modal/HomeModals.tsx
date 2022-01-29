import updateCard from 'features/cards/api/updateCard';
import { useSavedCardRemove } from 'features/cards/queries/useUnclassifiedQuery';
import type Card from 'features/cards/types/Card';
import CollectionList from 'features/collections/components/Modal/CollectionList';
import addCollectionMutation from 'features/collections/queries/addCollectionMutation';
import { Collection, PostCollection } from 'features/collections/types';
import dynamic from 'next/dynamic';
import React, { FC, useCallback, useEffect, useState } from 'react';
import useDim from 'shared/hooks/useDim';

const CreateFolder = dynamic(() => import('./CreateFolder'));
const SaveTweet = dynamic(() => import('./SaveTweet'));

export interface ISubmitProps {
  collection: Collection;
  card: Card;
  title: string;
}

interface IHomeModals {
  card: Card | null;
  onClose: () => void;
}

enum HOME_MODAL_STEP {
  CREATE_COLLECTION,
  SELECT_COLLECTION,
  INPUT_TITLE,
  NONE,
}

const HomeModals: FC<IHomeModals> = ({ card, onClose }) => {
  const [step, setStep] = useState<HOME_MODAL_STEP>(HOME_MODAL_STEP.NONE);
  const [collection, setCollection] = useState<Collection>();
  const { mutateAsync: addCollection, isLoading } = addCollectionMutation();
  const removeCardFromList = useSavedCardRemove();

  useDim(step !== HOME_MODAL_STEP.NONE);

  useEffect(() => {
    setStep(!!card ? HOME_MODAL_STEP.SELECT_COLLECTION : HOME_MODAL_STEP.NONE);
  }, [card]);

  const handleSelectFolder = useCallback((c: Collection) => {
    setCollection(c);
    setStep(HOME_MODAL_STEP.INPUT_TITLE);
  }, []);

  const handleCreateCollection = useCallback(
    () => setStep(HOME_MODAL_STEP.CREATE_COLLECTION),
    []
  );

  const goToSelectCollection = useCallback(
    () => setStep(HOME_MODAL_STEP.SELECT_COLLECTION),
    []
  );

  const submitCreateFolder = useCallback(async (pc: PostCollection) => {
    await addCollection(pc);
    setStep(HOME_MODAL_STEP.SELECT_COLLECTION);
  }, []);

  const submitCard = useCallback(
    async ({ card, collection, title }: ISubmitProps) => {
      await updateCard({
        title,
        collectionId: collection.collectionId,
        cardId: card.cardId,
      });

      removeCardFromList(card.cardId);
      onClose();
      setStep(HOME_MODAL_STEP.NONE);
    },
    [onClose, removeCardFromList]
  );

  if (step === HOME_MODAL_STEP.NONE) {
    return null;
  }

  return (
    <>
      <CollectionList
        isOpen={step === HOME_MODAL_STEP.SELECT_COLLECTION}
        onSelectFolder={handleSelectFolder}
        onCreateFolder={handleCreateCollection}
        onClose={onClose}
      />
      <CreateFolder
        isLoading={isLoading}
        isOpen={step === HOME_MODAL_STEP.CREATE_COLLECTION}
        onSelectFolder={submitCreateFolder}
        tweet={card?.text}
        onClose={goToSelectCollection}
      />
      <SaveTweet
        isOpen={step === HOME_MODAL_STEP.INPUT_TITLE}
        card={card}
        collection={collection}
        onSave={submitCard}
        onClose={goToSelectCollection}
      />
    </>
  );
};

export default HomeModals;
