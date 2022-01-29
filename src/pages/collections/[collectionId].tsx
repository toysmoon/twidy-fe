import Card from 'features/cards/components/Card';
import useCardsQuery from 'features/cards/queries/useCardsQuery';
import CollectionTitle from 'features/collections/components/CollectionTitle';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';
import EditCollection from 'shared/components/Modal/EditCollection';
import HeaderButton from 'shared/components/Templates/Layout/HeaderButton';
import LowLayout from 'shared/components/Templates/Layout/LowLayout';
import useCollection from 'shared/hooks/useCollection';

export default function CollectionPage() {
  const router = useRouter();
  const collectionId = Number(router.query.collectionId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const collection = useCollection(collectionId);
  const { cards } = useCardsQuery(collection?.collectionId);

  const handleSubmit = useCallback(() => {}, []);
  const handleOpen = useCallback(() => setIsModalOpen(true), [setIsModalOpen]);
  const handleClose = useCallback(
    () => setIsModalOpen(false),
    [setIsModalOpen]
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
        onSubmit={handleSubmit}
        onClose={handleClose}
        collection={collection!}
      />
    </LowLayout>
  );
}
