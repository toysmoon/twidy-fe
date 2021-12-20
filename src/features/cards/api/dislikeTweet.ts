import client, { DefaultResponse } from 'shared/api/client';

export default async function dislikeTweet(tweetId: string) {
  const response = await client.delete<DefaultResponse>(
    `/auth/likes?tweetId=${tweetId}`
  );
  return response.data.code === 4;
}
