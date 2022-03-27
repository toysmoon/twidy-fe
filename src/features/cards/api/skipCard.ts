import client from 'shared/api/client';

export default async function skipCard(tweetId: string) {
  const response = await client.post(`/auth/likes/${tweetId}/skip`);
  return response.data;
}
