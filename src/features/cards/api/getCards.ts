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

export default async function getCards(collectionId: number, props: any = {}) {
  const response = await client.get<CardResponse[]>('/card', {
    params: { collectionId, ...props },
  });

  const data = response.data.map(({ author, media, ref, ...card }) => ({
    author: JSON.parse(author) as Author,
    media: JSON.parse(media) as Media[],
    refers: JSON.parse(ref) as Refer[],
    isSaved: true,
    ...card,
  }));

  return data;
}
