import client from 'shared/api/client';

export type PostCard = {
  userId: string;
  tweetId: string;
  collectionId: number;
  title: string;
};

export default async function postCard(card: PostCard) {
  const response = await client.post('/card', card);
  return response.data;
}
