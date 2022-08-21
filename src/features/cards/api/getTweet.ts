import client from 'shared/api/client';
import { Author, Media, Refer } from 'shared/api/types';

export type CardResponse = {
  tweetId: string;
  text: string;
  url: string;
  author: string;
  media: string;
  status: string;
  regDttm: string;
  modDttm: string;
  cardId: number;
  userId: string;
  collectionId: number;
  title: string;
  ref: string;
};

export default async function getTweet(tweetId: string) {
  const response = await client.get<CardResponse>(`/tweet/${tweetId}`);
  if (!response.data) {
    return null;
  }

  const { author, media, ref, ...card } = response.data;

  return {
    author: JSON.parse(author) as Author,
    media: JSON.parse(media) as Media[],
    refers: JSON.parse(ref) as Refer[],
    isSaved: true,
    ...card,
  };
}
