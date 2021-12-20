import Card from 'features/cards/components/Card';
import useCardsQuery from 'features/cards/queries/useCardsQuery';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import CollectionTitle from 'features/collections/components/CollectionTitle';
import HeaderButton from 'shared/components/Templates/Layout/HeaderButton';
import LowLayout from 'shared/components/Templates/Layout/LowLayout';
import useCollection from 'shared/hooks/useCollection';

export default function CollectionPage() {
  const router = useRouter();
  const collectionId = Number(router.query.collectionId);

  const collection = useCollection(collectionId);
  const { cards } = useCardsQuery(collection?.collectionId);

  const RightButton = useMemo(
    () => <HeaderButton label="Edit" onClick={() => console.log('back')} />,
    [router]
  );

  if (!collection) {
    return null;
  }

  return (
    <LowLayout RightButton={RightButton}>
      <CollectionTitle collection={collection} />
      {cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </LowLayout>
  );
}
