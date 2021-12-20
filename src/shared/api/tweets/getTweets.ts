import client from '../client';
import { TweetResponse, Tweet, Author, Media } from '../types';

export default async function getTweets(): Promise<Tweet[]> {
  const response = await client.get<TweetResponse[]>('/tweets');
  const data = response.data.map(({ author, media, ...tweet }) => ({
    author: JSON.parse(author) as Author,
    media: JSON.parse(media) as Media[],
    ...tweet,
  }));

  return data;
}
