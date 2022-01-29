import Card from 'features/cards/components/Card';
import useCardsQuery from 'features/cards/queries/useCardsQuery';
import CollectionTitle from 'features/collections/components/CollectionTitle';
import { useUpdateCollection } from 'features/collections/queries/useCollectionQuery';
import { PostCollection } from 'features/collections/types';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';
import EditCollection from 'shared/components/Modal/EditCollection';
import HeaderButton from 'shared/components/Templates/Layout/HeaderButton';
import LowLayout from 'shared/components/Templates/Layout/LowLayout';
import useCollection from 'shared/hooks/useCollection';
import useToast from 'shared/hooks/useToast';

export default function CollectionPage() {
  const router = useRouter();
  const collectionId = Number(router.query.collectionId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toast = useToast();
  const collection = useCollection(collectionId);
  const { cards } = useCardsQuery(collection?.collectionId);
  const { mutateAsync: updateCollection, isLoading: isUpdating } =
    useUpdateCollection();

  const handleOpen = useCallback(() => setIsModalOpen(true), [setIsModalOpen]);
  const handleClose = useCallback(
    () => setIsModalOpen(false),
    [setIsModalOpen]
  );

  const handleSubmit = useCallback(
    async (pc: PostCollection) => {
      await updateCollection({ ...collection!, ...pc });
      toast('Collection has been updated!');
      handleClose();
    },
    [collection]
  );

  const RightButton = useMemo(
    () => <HeaderButton label="Edit" onClick={handleOpen} />,
    [router, handleOpen]
  );

  return (
    <LowLayout RightButton={RightButton}>
      <CollectionTitle collection={collection!} />
      {cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
      <EditCollection
        isOpen={isModalOpen}
        isLoading={isUpdating}
        onSubmit={handleSubmit}
        onClose={handleClose}
        collection={collection!}
      />
    </LowLayout>
  );
}
