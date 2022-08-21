import Card from 'features/cards/components/Card';
import useCardsQuery from 'features/cards/queries/useCardsQuery';
import useCollection from 'shared/hooks/useCollection';
import EmptyMessage from './EmptyMessage';

interface Props {
  collectionId: number;
}

export default function CardListInCollection({ collectionId }: Props) {
  const collection = useCollection(collectionId);
  const { cards } = useCardsQuery(collection?.collectionId);

  if (cards.length === 0) {
    return <EmptyMessage />;
  }

  return (
    <>
      {cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </>
  );
}
