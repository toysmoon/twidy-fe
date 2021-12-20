import client from 'shared/api/client';

interface SaveTweetProps {
  title: string;
  collectionId: number;
  cardId: number;
}

export default async function updateCard(props: SaveTweetProps) {
  const { cardId, collectionId, title } = props;
  const response = await client.put<null>(`/card`, {
    cardId,
    collectionId,
    title,
  });

  return response.data;
}
