import type Card from 'features/cards/types/Card';
import CollectionList from 'features/collections/components/Modal/CollectionList';
import addCollectionMutation from 'features/collections/queries/addCollectionMutation';
import { Collection, PostCollection } from 'features/collections/types';
import React, { FC, useCallback, useEffect, useState } from 'react';
import useDim from 'shared/hooks/useDim';
import { CreateFolder, SaveTweet } from '.';

export interface ISubmitProps {
  collection: Collection;
  card: Card;
  title: string;
}

interface IHomeModals {
  card: Card | null;
  onSubmit: ({ collection, card, title }: ISubmitProps) => void;
  onClose: () => void;
}

enum HOME_MODAL_STEP {
  CREATE_COLLECTION,
  SELECT_COLLECTION,
  INPUT_TITLE,
  NONE,
}

const HomeModals: FC<IHomeModals> = ({ card, onSubmit, onClose }) => {
  const [step, setStep] = useState<HOME_MODAL_STEP>(HOME_MODAL_STEP.NONE);
  const [collection, setCollection] = useState<Collection>();
  const { mutateAsync: addCollection, isLoading } = addCollectionMutation();

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
    (props) => {
      onSubmit(props);
      setStep(HOME_MODAL_STEP.NONE);
    },
    [onSubmit]
  );

  if (step === HOME_MODAL_STEP.NONE) {
    return null;
  }

  return (
    <>
      <CollectionList
        isOpen={true}
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
